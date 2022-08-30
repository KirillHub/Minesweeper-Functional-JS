'use strict';

import { GlobalGameData } from "../src/GameGlobalData/GameGlobalData.js";
import { activatorGameStatesMode } from "../src/Core/UX/activatorGameDataStates.js";
import { createBoard } from "../src/Core/UX/gameBoardCreation.js";
import { openFieldCells, isValidForOpenCells, isBomb, getCellsCount } from "../src/Core/Modules/openFieldCells.js";
import { bombsFirstClickAnimation } from "../src/Core/Modules/bombsFirstClickAnimation.js";


/*============================================================================================================*/

//! globals variables
const globalGameData = new GlobalGameData();

//! start game
activatorGameStatesMode(createBoard);

/*============================================================================================================*/

let bombsFirstClickAnimationArray = new Array();
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
	globalGameData.getBombsCount();

	// console.log(globalGameData.isFistClickImplement);
	bombsFirstClickAnimationArray = bombsFirstClickAnimation(globalGameData.row,
		globalGameData.column, globalGameData.WIDTH, globalGameData.BOMBS_COUNT,
		globalGameData.arrayBombNeighboursOnFirstClick, globalGameData.cells);

	openFieldCells(globalGameData.row, globalGameData.column, selector,
		globalGameData.WIDTH, globalGameData.cells, bombsFirstClickAnimationArray);


	isBomb(globalGameData.row, globalGameData.column, globalGameData.WIDTH, bombsFirstClickAnimationArray);
	isValidForOpenCells(globalGameData.row, globalGameData.column, globalGameData.WIDTH, bombsFirstClickAnimationArray);
	getCellsCount(globalGameData.row, globalGameData.column, globalGameData.WIDTH, bombsFirstClickAnimationArray);

});



