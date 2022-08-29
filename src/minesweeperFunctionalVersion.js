'use strict';

import { GlobalGameData } from "../src/GameGlobalData/GameGlobalData.js";
import { activatorGameStatesMode } from "../src/Core/UX/activatorGameDataStates.js";
import { createBoard } from "../src/Core/UX/gameBoardCreation.js";
import hoverEffectClassListStyle from "../src/Core/Modules/hoverEffectsStyle.js";


/*============================================================================================================*/

//! globals variables
const globalGameData = new GlobalGameData();

//! start game
activatorGameStatesMode(createBoard);

/*============================================================================================================*/
const bombs = [...Array(100).keys()].sort(() => Math.random() - 0.5)
	.slice(0, 5);



//? clicks animation
//TODO: forget about any first click's implementation
globalGameData.field.addEventListener('click', event => {
	event.preventDefault();

	const selector = event.target;
	if (selector.tagName !== 'DIV') return;

	//create array with cells
	globalGameData.getArrayChildrenCells();

	globalGameData.getTargetIndex();
	globalGameData.getBoardWidth();
	globalGameData.getNumberBoardColumn();
	globalGameData.getNumberBoardRow();



	// bombsAnimation(); //! later
	openFieldCells(globalGameData.row, globalGameData.column);

});



//?  first click !Временно!
globalGameData.field.addEventListener('click', (event) => {
	if (event.target.tagName !== 'DIV') return;

	console.log('here');
	// bombsFirstClickAnimation();
	// MusicComponents.musicSounds('../music/first-click.wav');
}, { once: true });



/*============================================================================================================*/
//! later import
function isValidForOpenCells(row, column, WIDTH) { //? пробная версия проверки валидации
	return row >= 0 && row < WIDTH
		&& column >= 0 && column < WIDTH;
};

function getCellsCount(row, column) {
	let count = 0;
	for (let x = -1; x <= 1; x++) {
		for (let y = -1; y <= 1; y++) {
			if (isBomb(row + y, column + x)) {
				count++
			};
		};
	};
	return count;
};

// Open
function openFieldCells(row, column) {
	if (!isValidForOpenCells(row, column, globalGameData.WIDTH)) return; //? off later вкл

	const index = row * globalGameData.WIDTH + column;
	const targetCell = globalGameData.cells[index];
	if (targetCell.disabled === true) return;
	targetCell.disabled = true;

	if (index >= 0) {
		hoverEffectClassListStyle(targetCell);

		const colorNumberArray = ['blue', 'green', 'red', 'purple', 'black',
			'darkslategray', 'rgb(64, 25, 90)', 'rgb(15, 81, 119)'];
		colorNumberArray.forEach((item, index) => {
			++index;
			if (getCellsCount(row, column) > 0) {
				if (getCellsCount(row, column) == index) {
					targetCell.style.color = item;
				}
			}
		});

		if (isBomb(row, column)) {
			targetCell.innerHTML = '💣';
			return;
		};

		const count = getCellsCount(row, column);
		if (count !== 0) {
			targetCell.innerHTML = count;
			return;
		};

		for (let x = -1; x <= 1; x++) {
			for (let y = -1; y <= 1; y++) {
				openFieldCells(row + x, column + y);
			}
		};
	};

};

function isBomb(row, column) {
	if (!isValidForOpenCells(row, column, globalGameData.WIDTH)) return false;

	const index = row * globalGameData.WIDTH + column;
	return bombs.includes(index);
};
/*============================================================================================================*/



/*============================================================================================================*/
//! later 
function bombsAnimation() {
	const fieldCellsChildren = document.querySelectorAll('.fields__cell');
	globalGameData.cells = [...fieldCellsChildren]

	globalGameData.getTargetIndex();
	globalGameData.getNumberBoardColumn();
	globalGameData.getNumberBoardRow();

	console.log(globalGameData.index);
	console.log(globalGameData.column);
	console.log(globalGameData.row);

	function pushNeighborFieldsIndex() {
		// if (!isValidForOpenCells(globalGameData.row, globalGameData.column)) return false; //! ??

		// console.log(index);
		// globalGameData.getTargetIndex();
		// console.log(globalGameData.index);
	}
	// pushNeighborFieldsIndex();

};
function randomizerMinesIndex(minArrayIndex, maxArrayIndex) {
	minArrayIndex = Math.ceil(minArrayIndex);
	maxArrayIndex = Math.floor(maxArrayIndex);
	return Math.floor(Math.random() * (maxArrayIndex - minArrayIndex + 1) + minArrayIndex);
};
/*============================================================================================================*/



