'use strict'

import { isValidForOpenCells } from "../Modules/openFieldCells.js"

export function bombsFirstClickAnimation(row, column, WIDTH, arrayBombNeighboursOnFirstClick) {

	if (arrayBombNeighboursOnFirstClick.length !== 0) return

	function pushNeighborFieldsIndex(row, column, WIDTH) {
		if (!isValidForOpenCells(row, column, WIDTH)) return false;

		const index = row * WIDTH + column;
		return arrayBombNeighboursOnFirstClick.push(index)
	}
	pushNeighborFieldsIndex(row, column, WIDTH);


	function openNeighborsFields(row, column, WIDTH) {
		for (let x = -1; x <= 1; x++) {
			for (let y = -1; y <= 1; y++) {
				(pushNeighborFieldsIndex(row + y, column + x, WIDTH))
			}
		}
	};
	openNeighborsFields(row, column, WIDTH);

	console.log(arrayBombNeighboursOnFirstClick);
};

