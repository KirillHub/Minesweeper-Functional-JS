// import { boardConfig } from 
// import { gameModeStates } from "./controllerDataStates"
import { InitializationBoardData } from "./Types";
import { GameBoardTest } from "./gameManager";

// gameModeStates

/*
TODO: создать 3 уникальных варианта размерности поля
1. Три варианта, значит 3 массива или объекта, в какой то переменной
2. Можно выбирать любой режим игры, даже во время матча
3. Если режим перевыбран, обновить поле (return game)
*/

/*
	<div class="main-title__buttons buttons-config">
					<button class="buttons-config__easy-mode">Easy</button>
					<button class="buttons-config__normal-mode">Normal </button>
					<button class="buttons-config__hard-mode">Hard</button>
				</div>
*/

/*
let BoardPropertyInitializationMask: InitializationBoardData = {
	"BOMBS_COUNT": 1,
	"HEIGHT": 1,
	"WIDTH": 1,
};
*/
// let BoardPropertyInitializationMask;





export class GameModelsStatesProperty {
	parentCurrentTargetClass: any = document.querySelector('.buttons-config');
	gameModesArray: any | string | null = ["Easy", "Normal", "Hard"];
	indexArrayGameModes: number | null | undefined;


	// indexGameModex: null | number;

	constructor(public gameModesList: any
	) { //? many typeof object?!
		this.gameModesList = gameModesList;

	}

	identificatorClassNameButton() {
		let classNameTarget: string | null | undefined;
		let indexArrayGameModes: number;



		this.parentCurrentTargetClass?.addEventListener('click', (event: any) => {
			for (let i = 0; i < this.gameModesArray.length; i++) {
				if (event.target.textContent === this.gameModesArray[i]) {
				}
			}

		});


	};


}

/*
! here
let BoardPropertyInitializationMask: InitializationBoardData = {
					"BOMBS_COUNT": this.gameModesList[i].BOMBS_COUNT,
					"HEIGHT": this.gameModesList[i].HEIGHT,
					"WIDTH": this.gameModesList[i].WIDTH,
				};
*/

// const gameMode = new GameModelsStatesProperty(gameModeStates);



