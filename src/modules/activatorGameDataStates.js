"use strict";

// import { arrayGameModeStates } from "./gameStatesData.js";
// import { starterGamer } from "../modules/test.js"

export function activatorGameStatesMode(startGameActive) {
	const buttonsParentDiv = document.querySelector('.buttons-config');
	const field = document.querySelector('.field');
	const fieldStyle = field.style;

	buttonsParentDiv.addEventListener('click', event => {
		let indexArrayGameModeStates;
		if (event.target.tagName !== "BUTTON") return;

		while (field.hasChildNodes()) {
			field.removeChild(field.firstChild)
		};


		if (event.target.textContent === 'Easy') {
			indexArrayGameModeStates = 0;

			startGameActive(arrayGameModeStates[indexArrayGameModeStates].WIDTH,
				arrayGameModeStates[indexArrayGameModeStates].HEIGHT,
				arrayGameModeStates[indexArrayGameModeStates].BOMBS_COUNT);

			fieldStyle.setProperty('grid-template-columns', `repeat(10, 40px)`);

			field.childNodes.forEach(item => {
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

			field.childNodes.forEach(item => {
				item.style.fontSize = "18px";
				item.style.height = "23px";
			});
		};

		return startGameActive
	});

};