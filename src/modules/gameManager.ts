"use strict"

import { InitializationDataState, InitializationBoardData } from "./Types";



/*
export let GameBoardTest: InitializationBoardData = {
	
}
*/
export var GameBoardTest: any;


export let GameProppertyVariables: InitializationDataState = {
	//initialization start game configuration
	/*
	WIDTH: boardConfig.width,
	HEIGHT: boardConfig.height,
	BOMBS_COUNT: boardConfig.bombs,
	*/

	cellsCount: 1, //! потом исправить

	field: document.querySelector('.field'),
	flag: document.querySelector('.main-title__flags-counter'),
	endGameText: document.querySelector('.end-game'),

	cells: new Array(),
	keysPairArray: new Array(),
	keysUnpairArray: new Array(),
	bombs: new Array(),
	// flagCounter: number,
	flagsLocationCoords: new Set(),
	hoverClassEffectsArray: new Set(),

	error: "Error, check you code", // добавить try{} catche{}
}