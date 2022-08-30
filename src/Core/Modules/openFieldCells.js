'use strict'

import hoverEffectClassListStyle from "../Modules/hoverEffectsStyle.js";

function isBomb(row, column, WIDTH, bombsArray) {
	if (!isValidForOpenCells(row, column, WIDTH, bombsArray)) return false;

	const index = row * WIDTH + column;
	return bombsArray.includes(index);
};

function isValidForOpenCells(row, column, WIDTH, bombsArray) {
	return row >= 0 && row < WIDTH
		&& column >= 0 && column < WIDTH;
};


function getCellsCount(row, column, WIDTH, bombsArray) {
	let count = 0;
	for (let x = -1; x <= 1; x++) {
		for (let y = -1; y <= 1; y++) {
			if (isBomb(row + y, column + x, WIDTH, bombsArray)) {
				count++
			};
		};
	};
	return count;
};


function openFieldCells(row, column, selector, WIDTH, cells, bombsArray) {

	if (!isValidForOpenCells(row, column, WIDTH, bombsArray)) return;

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
			if (getCellsCount(row, column, WIDTH, bombsArray) > 0) {
				if (getCellsCount(row, column, WIDTH, bombsArray) == index) {
					targetCell.style.color = item;
				}
			}
		});

		if (isBomb(row, column, WIDTH, bombsArray)) {
			targetCell.innerHTML = '💣';
			return;
		};

		const count = getCellsCount(row, column, WIDTH, bombsArray);
		if (count !== 0) {
			targetCell.innerHTML = count;
			return;
		};

		for (let x = -1; x <= 1; x++) {
			for (let y = -1; y <= 1; y++) {
				openFieldCells(row + x, column + y, selector, WIDTH, cells, bombsArray);
			}
		};
	};

};


export { isBomb, isValidForOpenCells, getCellsCount, openFieldCells };