"use strict"

// import CheckExtremeBorders from "./CheckExtremeBorders.js"
import CheckExtremeBorders from "./CheckExtremeBorders.js"


export default function neighborsSearcher(x: number) {
	let emptyArr = [];

	if (x >= 0 && x <= 99) {

		if (x >= 0 && x < 10 && x !== 0 && x !== 9) {
			emptyArr.push(
				x - 1, x, x + 1, x + 9, x + 10, x + 11
			)
		}
		if (x >= 10 && x <= 89) {
			if (Object.keys(CheckExtremeBorders.numbersOfBoardLeftVertical(x)).length !== 0) {
				emptyArr.push(
					x - 10, x - 9, x, x + 1, x + 10, x + 11
				)
			} else if (Object.keys(CheckExtremeBorders.numbersOfBoardRightVertical(x)).length !== 0) {
				emptyArr.push(
					x - 11, x - 10, x - 1, x, x + 9, x + 10
				)
			} else {
				emptyArr.push(
					x - 11, x - 10, x - 9, x - 1, x, x + 1, x + 9, x + 10, x + 11
				)
			}
		}
		if (x > 90 && x < 99) {
			emptyArr.push(
				x - 11, x - 10, x - 9, x - 1, x, x + 1
			)
		}

		if (x == 0) emptyArr.push(x + 1, x, x + 10, x + 11);
		if (x == 9) emptyArr.push(x - 1, x, x + 9, x + 10);
		if (x == 90) emptyArr.push(x - 10, x - 9, x, x + 1);
		if (x == 99) emptyArr.push(x, x - 1, x - 11, x - 10);

		return emptyArr;
	} else return false;
};

