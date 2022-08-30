'use strict'

import { isValidForOpenCells } from "../Modules/openFieldCells.js";
import { GlobalGameData } from "../../GameGlobalData/GameGlobalData.js";
import { randomizerMinesIndex } from "../Util/util.js"

export function bombsFirstClickAnimation(row, column, WIDTH, BOMBS_COUNT, arrayBombNeighboursOnFirstClick, cells) {

	const globalGameData = new GlobalGameData();
	let setObjectOfRandomMines = globalGameData.setObjectOfRandomMines;
	let bombsRandomArrayGenerated = globalGameData.bombsRandomArrayGenerated;
	let countFieldsChildrenBlocks = cells.length;
	console.log(countFieldsChildrenBlocks);

	if (arrayBombNeighboursOnFirstClick.length === 0) {
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


		// if (bombsRandomArrayGenerated.length !== 0 ) return //! убиваем функцию в этом месте

		arrayBombNeighboursOnFirstClick.forEach(neighbors =>
			setObjectOfRandomMines.add(neighbors));

		do {
			setObjectOfRandomMines.add(randomizerMinesIndex(0, countFieldsChildrenBlocks));
		} while (setObjectOfRandomMines.size < (BOMBS_COUNT + arrayBombNeighboursOnFirstClick.length)
			&& setObjectOfRandomMines.size <= countFieldsChildrenBlocks);

		setObjectOfRandomMines.forEach(item => bombsRandomArrayGenerated.push(item));

		bombsRandomArrayGenerated = bombsRandomArrayGenerated
			.slice(arrayBombNeighboursOnFirstClick.length, bombsRandomArrayGenerated.length);

		bombsRandomArrayGenerated.forEach(item => cells[item].classList.add('bomb-cell'));

		return bombsRandomArrayGenerated;
	} else {

	}




};

