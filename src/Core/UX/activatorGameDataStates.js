"use strict";

import { arrayGameModeStates } from "./gameModeStatesData.js";
import { GlobalGameData } from "../../GameGlobalData/GameGlobalData.js"

export function activatorGameStatesMode(startGameActive) {
	const globalGameData = new GlobalGameData();
	const fieldStyle = globalGameData.field.style;

	globalGameData.buttonsParentDiv.addEventListener('click', event => {
		let indexArrayGameModeStates;
		if (event.target.tagName !== "BUTTON") return;

		while (globalGameData.field.hasChildNodes()) {
			globalGameData.field.removeChild(globalGameData.field.firstChild)
		};

		// rebootGame(event);

		if (event.target.textContent === 'Easy') {
			indexArrayGameModeStates = 0;

			startGameActive(arrayGameModeStates[indexArrayGameModeStates].WIDTH,
				arrayGameModeStates[indexArrayGameModeStates].HEIGHT,
				arrayGameModeStates[indexArrayGameModeStates].BOMBS_COUNT);

			fieldStyle.setProperty('grid-template-columns', `repeat(10, 40px)`);

			globalGameData.field.childNodes.forEach(item => {
				item.style.fontSize = "30px";
				item.style.height = "40px";
			});

		} else if (event.target.textContent === 'Normal') {
			indexArrayGameModeStates = 1;

			startGameActive(arrayGameModeStates[indexArrayGameModeStates].WIDTH,
				arrayGameModeStates[indexArrayGameModeStates].HEIGHT,
				arrayGameModeStates[indexArrayGameModeStates].BOMBS_COUNT);

			fieldStyle.setProperty('grid-template-columns', `repeat(15, 27px)`);

		} else if (event.target.textContent === 'Hard') {
			indexArrayGameModeStates = 2;

			startGameActive(arrayGameModeStates[indexArrayGameModeStates].WIDTH,
				arrayGameModeStates[indexArrayGameModeStates].HEIGHT,
				arrayGameModeStates[indexArrayGameModeStates].BOMBS_COUNT);

			fieldStyle.setProperty('grid-template-columns', `repeat(20, 23px)`);

			globalGameData.field.childNodes.forEach(item => {
				item.style.fontSize = "18px";
				item.style.height = "23px";
			});
		};
		return startGameActive
	});
};
// activatorGameStatesMode(15,15,15)

const rebootGame = (event) => {
	if (event.target.classList.contains('start-game')) {
		console.log('yes');
		event.target.classList.remove('start-game');

	} else {
		const resultQuestion = confirm("Вы желаете начать новую игру?");
		console.log('cringe');

		if (resultQuestion) {
			return window.location.reload()
		}
	}
};