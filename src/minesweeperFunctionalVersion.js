'use strict';


import { GlobalGameData } from "./GameGlobalData/GameGlobalData.js";
import { activatorGameStatesMode } from "./Core/UX/activatorGameDataStates.js.js";
import { createBoard } from "./Core/UX/gameBoardCreation.js.js";
import hoverEffectClassListStyle from "./Core/Modules/hoverEffectsStyle.js"

// addHoverEffectClassStyle();
// removeHoverEffectClassStyle();

/*============================================================================================================*/

//! globals variables
const globalGameData = new GlobalGameData();

//! start game
activatorGameStatesMode(createBoard);

/*============================================================================================================*/
const bombs = [...Array(100).keys()].sort(() => Math.random() - 0.5)
	.slice(0, 15);


//? clicks animation
//TODO: forget about any first click's implementation
globalGameData.field.addEventListener('click', event => {

	const selector = event.target;
	if (selector.tagName !== 'DIV') return;

	//create array with cells
	globalGameData.getArrayChildrenCells();
	globalGameData.createTwoPairsArrayChildren();


	globalGameData.getTargetIndex();
	globalGameData.getBoardWidth();
	globalGameData.getNumberBoardColumn();
	globalGameData.getNumberBoardRow();


	// sconsole.log(globalGameData.index);
	// console.log(globalGameData.column);
	// console.log(globalGameData.row);


	// bombsAnimation(); //! later

	// console.log(targetCell);

	openFieldCells(globalGameData.row, globalGameData.column);
	hoverEffectClassListStyle(selector);
});


function isValidForOpenCells(row, column, WIDTH) { //? пробная версия проверки валидации
	return row >= 0 && row < WIDTH
		&& column >= 0 && column < WIDTH;
};

function getCellsCount(row, column) {
	let count = 0;
	for (let x = -1; x <= 1; x++) {
		for (let y = -1; y <= 1; y++) {
			if (isBomb(row + y, column + x, globalGameData.WIDTH)) {
				count++
			};
		};
	};
	return count;
};

// console.log(getCellsCount(globalGameData.row, globalGameData.column));

// Open
function openFieldCells(row, column) {

	if (!isValidForOpenCells(globalGameData.row, globalGameData.column,
		globalGameData.WIDTH)) return false;

	/* 
	! все данные есть и обновляются правильно!
	console.log(globalGameData.WIDTH);
	console.log(globalGameData.index);
	console.log(globalGameData.column);
	console.log(globalGameData.row);
	*/

	const targetCell = globalGameData.cells[globalGameData.index];


	//get div-block of target
	if (targetCell.disabled === true) return;

	targetCell.disabled = true;

	if (globalGameData.index >= 0) {
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

		if (isBomb(row, column, globalGameData.WIDTH)) {
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
				openFieldCells(row + x, column + y);
			}
		}
	}

};

function isBomb(row, column, WIDTH) {
	if (!isValidForOpenCells(row, column, globalGameData.WIDTH)) return false;

	const index = row * WIDTH + column;
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



