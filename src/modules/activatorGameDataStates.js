"use strict";

import { arrayGameModeStates } from "./gameStatesData.js";

export function activatorGameStatesMode(startGameActive) {
	const buttonsParentDiv = document.querySelector('.buttons-config');
	const field = document.querySelector('.field');
	const fieldStyle = field.style;

	buttonsParentDiv.addEventListener('click', function selectButton(event) {
		let indexArrayGameModeStates;
		if (event.target.tagName !== "BUTTON") return;

		// field.childNodes(forEach(item => {
		// 	console.log(item);
		// }))

		/*
		? классы удалять пытался, не помогло
		field.childNodes.forEach(item => {
			console.log(item);
			item.classList.remove("fields__cell");
			item.classList.remove("fields__hover-class");
		})
		*/

		while (field.hasChildNodes()) {
			field.removeChild(field.firstChild)
			// field.removeChild(field.childElementCount)
			// field.removeChild(field.ELEMENT_NODE)
			// field.remove('')
		};


		if (event.target.textContent === 'Easy') {
			indexArrayGameModeStates = 0;

			startGameActive(arrayGameModeStates[indexArrayGameModeStates].WIDTH,
				arrayGameModeStates[indexArrayGameModeStates].HEIGHT,
				arrayGameModeStates[indexArrayGameModeStates].BOMBS_COUNT);

			// console.log(field.childNodes);

			fieldStyle.setProperty('grid-template-columns', `repeat(10, 40px)`);

			field.childNodes.forEach(item => {
				item.style.fontSize = "30px";
				item.style.height = "40px";
			});

			// buttonsParentDiv.removeEventListener('click', abc)
			// buttonsParentDiv.removeEventListener('click', event => {});

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
		// buttonsParentDiv.removeEventListener('click', selectButton)
	});

};