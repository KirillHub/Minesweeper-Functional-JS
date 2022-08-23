'use strict'

import { gameModeStates } from "../dist/controllerDataStates.js";
import { GameModelsStatesProperty } from "../dist/GameSettingDataConfig.js";
import { GameBoardTest } from "../dist/gameManager.js"
// import { GameTest } from "../dist/"
// import { gameMode } from "../dist/GameSettingDataConfig.js";

// import { abboba } from "../dist/unit.js";  //! пример

export const boardConfig = {
	width: 10,
	height: 10,
	bombs: 20,
};

// let numberObject;

console.log(GameBoardTest);
console.log(gameModeStates[0].BOMBS_COUNT);


/*
const easyGameModeStates: object = {
	"WIDTH": 10,
	"HEIGHT": 10,
	"BOMBS_COUNT": 12,
};
*/


const parentCurrentTargetClass = document.querySelector('.buttons-config');






/*
const api = new GameModelsStatesProperty(gameModeStates);
console.log(api);
console.log(api.identificatorClassNameButton());
*/


// console.log(apples);

