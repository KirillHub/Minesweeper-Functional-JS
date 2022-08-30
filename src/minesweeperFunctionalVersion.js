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


	// bombsAnimation(); //! later

	openFieldCells(globalGameData.row, globalGameData.column, selector,
		globalGameData.WIDTH, globalGameData.cells);
		bombsFirstClickAnimation(globalGameData.row, globalGameData.column, globalGameData.WIDTH, globalGameData.BOMBS_COUNT,
			globalGameData.arrayBombNeighboursOnFirstClick, globalGameData.cells);
	isBomb(globalGameData.row, globalGameData.column, globalGameData.WIDTH);
	isValidForOpenCells(globalGameData.row, globalGameData.column, globalGameData.WIDTH);
	getCellsCount(globalGameData.row, globalGameData.column, globalGameData.WIDTH);



	// console.log(globalGameData.bombs);
});



//?  first click !Временно!
// globalGameData.field.addEventListener('click', (event) => {
// 	if (event.target.tagName !== 'DIV') return;

// 	console.log('here');

// 	// MusicComponents.musicSounds('../music/first-click.wav');
// }, { once: true });



/*============================================================================================================*/
//! later 



/*
function randomizerMinesIndex(minArrayIndex, maxArrayIndex) {
	minArrayIndex = Math.ceil(minArrayIndex);
	maxArrayIndex = Math.floor(maxArrayIndex);
	return Math.floor(Math.random() * (maxArrayIndex - minArrayIndex + 1) + minArrayIndex);
};
*/
/*============================================================================================================*/



