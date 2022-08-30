'use strict'

import hoverEffectClassListStyle from "../Modules/hoverEffectsStyle.js";
import { bombsFirstClickAnimation } from "./bombsFirstClickAnimation.js";


const bombs = [...Array(100).keys()].sort(() => Math.random() - 0.5)
	.slice(0, 5);


function isBomb(row, column, WIDTH) {
	if (!isValidForOpenCells(row, column, WIDTH)) return false;

	const index = row * WIDTH + column;
	return bombs.includes(index);
};

function isValidForOpenCells(row, column, WIDTH) {
	return row >= 0 && row < WIDTH
		&& column >= 0 && column < WIDTH;
};


function getCellsCount(row, column, WIDTH) {
	let count = 0;
	for (let x = -1; x <= 1; x++) {
		for (let y = -1; y <= 1; y++) {
			if (isBomb(row + y, column + x, WIDTH)) {
				count++
			};
		};
	};
	return count;
};


function openFieldCells(row, column, selector, WIDTH, cells) {

	if (!isValidForOpenCells(row, column, WIDTH)) return;

	const index = row * WIDTH + column;
	const targetCell = cells[index];
	if (targetCell.disabled === true) return;
	targetCell.disabled = true;

	if (index >= 0) {
		hoverEffectClassListStyle(targetCell);

		const colorNumberArray = ['blue', 'green', 'red', 'purple', 'black',
			'darkslategray', 'rgb(64, 25, 90)', 'rgb(15, 81, 119)'];
		colorNumberArray.forEach((item, index) => {
			++index;
			if (getCellsCount(row, column, WIDTH) > 0) {
				if (getCellsCount(row, column, WIDTH) == index) {
					targetCell.style.color = item;
				}
			}
		});

		if (isBomb(row, column, WIDTH)) {
			targetCell.innerHTML = '💣';
			return;
		};

		const count = getCellsCount(row, column, WIDTH);
		if (count !== 0) {
			targetCell.innerHTML = count;
			return;
		};

		for (let x = -1; x <= 1; x++) {
			for (let y = -1; y <= 1; y++) {
				openFieldCells(row + x, column + y, selector, WIDTH, cells);
			}
		};
	};

};


export { isBomb, isValidForOpenCells, getCellsCount, openFieldCells };