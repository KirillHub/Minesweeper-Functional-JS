'use strict'

'use strict';


import { GlobalGameData } from "../src/GameGlobalData/GameGlobalData.js";
import { activatorGameStatesMode } from "../src/Core/UX/activatorGameDataStates.js";
import { createBoard } from "../src/Core/UX/gameBoardCreation.js";
import hoverEffectClassListStyle from "../././modules/hoverEffectsStyle.js"


// addHoverEffectClassStyle();
// removeHoverEffectClassStyle();

/*============================================================================================================*/

//! globals variables
const globalGameData = new GlobalGameData();

//! start game
activatorGameStatesMode(createBoard);

/*============================================================================================================*/
const bombs = [...Array(100).keys()].sort(() => Math.random() - 0.5)
	.slice(0, 5);

const WIDTH = 10;
const HEIGHT = 10;


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
	hoverEffectClassListStyle(selector);
});



//?  first click !Временно!
// globalGameData.field.addEventListener('click', (event) => {
// 	if (event.target.tagName !== 'DIV') return;

// 	// bombsFirstClickAnimation();
// 	// MusicComponents.musicSounds('../music/first-click.wav');
// }, { once: true });


function isValidForOpenCells(row, column) { //? пробная версия проверки валидации
	return row >= 0 && row < HEIGHT
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

	if (!isValidForOpenCells(row, column)) return; //? off later вкл

	console.log(isBomb(row, column));

	// while (isBomb(row, column) === false) {
	// 	console.log();
	// }
	/* 
	! все данные есть и обновляются правильно!
	console.log(globalGameData.WIDTH);
	console.log(globalGameData.index);
	console.log(globalGameData.column);
	console.log(globalGameData.row);
	*/

	const targetCell = globalGameData.cells[globalGameData.index];
	// console.log(targetCell);


	//get div-block of target
	if (targetCell.disabled === true) return;

	targetCell.disabled = true;
	// console.log(globalGameData.cells);

	if (globalGameData.index >= 0) {

		//? later delete
		/*
		if (targetCell.style.backgroundColor === 'rgb(169, 215, 81)') {
			targetCell.style.backgroundColor = '#e4c29f';

		} else if (targetCell.style.backgroundColor === 'rgb(162, 208, 73)') {
			targetCell.style.backgroundColor = '#d7b899';

		};
		*/
		targetCell.style.backgroundColor = 'white';



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
		}

		for (let x = -1; x <= 1; x++) {
			for (let y = -1; y <= 1; y++) {
				// console.log(row + x);
				// console.log(openFieldCells(row + x, column + y));
				openFieldCells(row + x, column + y);
			}
		}
	}

};

function isBomb(row, column) {
	if (!isValidForOpenCells(row, column)) return false;

	const index = row * WIDTH + column;
	console.log(index);
	console.log(bombs.includes(index));
	return bombs.includes(index)
};


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



