'use strict';


import { GlobalGameData } from "./GameGlobalData/GameGlobalData.js";
import { activatorGameStatesMode } from "./UX/activatorGameDataStates.js";
import { createBoard } from "./UX/gameBoardCreation.js";


/*============================================================================================================*/

//! globals variables
const globalGameData = new GlobalGameData();

//! start game
activatorGameStatesMode(createBoard);

/*============================================================================================================*/




globalGameData.field.addEventListener('click', event => {

	const selector = event.target;

	if (globalGameData.cells.length !== 0) globalGameData.cells = new Array();

	const fieldCellsChildren = document.querySelectorAll('.fields__cell');
	globalGameData.cells = [...fieldCellsChildren]


	globalGameData.getTargetIndex();
	// globalGameData.getNumberBoardColumn();
	// globalGameData.getNumberBoardRow();

	// console.log(globalGameData.index);
	console.log(globalGameData.column);
	console.log(globalGameData.row);


});




function bombsAnimation() {

}
bombsAnimation()

