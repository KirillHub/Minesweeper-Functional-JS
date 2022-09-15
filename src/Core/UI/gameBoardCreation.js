'use strict'

import { GlobalGameData } from "../../GameGlobalData/GameGlobalData.js";

export function createBoard(WIDTH, HEIGHT) {
	const globalGameData = new GlobalGameData();
	let counter = -1;
	if (counter !== -1) counter = -1;

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
				globalGameData.field.append(pairMaskBlock);
			}
			if (number % 2 !== 0) {
				unpairMaskBlock.style.backgroundColor = '#a2d049';
				globalGameData.field.append(unpairMaskBlock);
			}
		}
	};
}