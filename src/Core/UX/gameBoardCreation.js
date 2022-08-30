'use strict'

import { GlobalGameData } from "../../GameGlobalData/GameGlobalData.js";

export function createBoard(WIDTH, HEIGHT, BOMBS_COUNT) {
	const globalGameData = new GlobalGameData();
	// console.log(BOMBS_COUNT);

	// const keysPairArray = [];
	// const keysUnpairArray = [];
	let counter = -1;

	if (counter !== -1) counter = -1;  //? предосторожность (потом убрать)

	for (let i = 0; i < WIDTH; i++) {
		for (let j = 0; j < HEIGHT; j++) {
			counter++;
			let number = i + j + 2;
			const unpairMaskBlock = document.createElement('div');
			const pairMaskBlock = document.createElement('div');

			unpairMaskBlock.classList.add('fields__hover-class', "fields__cell");
			pairMaskBlock.classList.add('fields__hover-class', "fields__cell");

			if (number % 2 === 0) {
				pairMaskBlock.style.backgroundColor = '#a9d751';
				// pairMaskBlock.textContent = counter;
				globalGameData.field.append(pairMaskBlock);
				// keysPairArray.push(counter);
			}
			if (number % 2 !== 0) {
				unpairMaskBlock.style.backgroundColor = '#a2d049';
				// unpairMaskBlock.textContent = counter;
				globalGameData.field.append(unpairMaskBlock);
				// keysUnpairArray.push(counter);
			}
		}
	};
}