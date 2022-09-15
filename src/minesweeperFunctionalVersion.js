'use strict';

import { GlobalGameData } from "../src/GameGlobalData/GameGlobalData.js";
import { activatorGameStatesMode } from "../src/Core/UI/activatorGameDataStates.js";
import { createBoard } from "../src/Core/UI/gameBoardCreation.js";
import { openFieldCells, isValidForOpenCells, isBomb, getCellsCount } from "../src/Core/Modules/openFieldCells.js";
import { bombsFirstClickAnimation } from "../src/Core/Modules/bombsFirstClickAnimation.js";

/*============================================================================================================*/
//! globals variables
const globalGameData = new GlobalGameData();

// create visual board for user
createBoard(15, 15, 35);

//! start game
activatorGameStatesMode(createBoard);
/*============================================================================================================*/

//? clicks animation
//TODO: forget about any first click's implementation
globalGameData.field.addEventListener('click', event => {
	event.preventDefault();
	const selector = event.target;
	if (selector.tagName !== 'DIV') return;

	globalGameData.buttonsParentDiv.addEventListener('click', event => {
		if (event) {
			if (event.target.classList.contains('start-game')) {
				window.location.reload()
			} else return window.location.reload()
		}
	})

	//create array with cells
	globalGameData.getArrayChildrenCells();
	globalGameData.getTargetIndex();
	globalGameData.getBoardWidth();
	globalGameData.getNumberBoardColumn();
	globalGameData.getNumberBoardRow();
	globalGameData.getBombsCount();

	let bombsFirstClickAnimationArray = new Array();

	bombsFirstClickAnimationArray = bombsFirstClickAnimation(globalGameData.row,
		globalGameData.column, globalGameData.WIDTH, globalGameData.BOMBS_COUNT,
		globalGameData.arrayBombNeighboursOnFirstClick, globalGameData.cells);

	if (!bombsFirstClickAnimationArray || typeof bombsFirstClickAnimationArray === "undefined" ||
		bombsFirstClickAnimationArray.length === 0) {
		bombsFirstClickAnimationArray = new Array();
		globalGameData.cells.forEach((item, index) => {

			if (item.classList.contains('bomb-cell')) {
				bombsFirstClickAnimationArray.push(index);
			}
		});
	};

	openFieldCells(globalGameData.row, globalGameData.column, selector,
		globalGameData.WIDTH, globalGameData.cells, bombsFirstClickAnimationArray);
	isBomb(globalGameData.row, globalGameData.column, globalGameData.WIDTH,
		bombsFirstClickAnimationArray);
	isValidForOpenCells(globalGameData.row, globalGameData.column, globalGameData.WIDTH,
		bombsFirstClickAnimationArray);
	getCellsCount(globalGameData.row, globalGameData.column, globalGameData.WIDTH,
		bombsFirstClickAnimationArray);
});

