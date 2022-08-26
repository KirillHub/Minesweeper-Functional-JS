"use strict";

import { arrayGameModeStates } from "./gameStatesData.js"

export function activatorGameStatesMode(funcName) {
	const buttonsParentDiv = document.querySelector('.buttons-config');
	const field = document.querySelector('.field');
	const fieldStyle = field.style;

	buttonsParentDiv.addEventListener('click', event => {
		let indexArrayGameModeStates;

		while (field.hasChildNodes()) {
			field.removeChild(field.firstChild)
		};

		if (event.target.textContent === 'Easy') {
			indexArrayGameModeStates = 0;

			funcName(arrayGameModeStates[indexArrayGameModeStates].WIDTH,
				arrayGameModeStates[indexArrayGameModeStates].HEIGHT,
				arrayGameModeStates[indexArrayGameModeStates].BOMBS_COUNT);

			fieldStyle.setProperty('grid-template-columns', `repeat(10, 40px)`);

			field.childNodes.forEach(item => {
				item.style.fontSize = "30px";
				item.style.height = "40px";
			});

		} else if (event.target.textContent === 'Normal') {
			indexArrayGameModeStates = 1;

			funcName(arrayGameModeStates[indexArrayGameModeStates].WIDTH,
				arrayGameModeStates[indexArrayGameModeStates].HEIGHT,
				arrayGameModeStates[indexArrayGameModeStates].BOMBS_COUNT);

			fieldStyle.setProperty('grid-template-columns', `repeat(15, 27px)`);

		} else if (event.target.textContent === 'Hard') {
			indexArrayGameModeStates = 2;

			funcName(arrayGameModeStates[indexArrayGameModeStates].WIDTH,
				arrayGameModeStates[indexArrayGameModeStates].HEIGHT,
				arrayGameModeStates[indexArrayGameModeStates].BOMBS_COUNT);

			fieldStyle.setProperty('grid-template-columns', `repeat(20, 23px)`);

			field.childNodes.forEach(item => {
				item.style.fontSize = "18px";
				item.style.height = "23px";
			});
		};

	});

};