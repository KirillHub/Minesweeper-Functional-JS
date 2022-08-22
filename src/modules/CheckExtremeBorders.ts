"use strict"



export default class CheckExtremeBorders {

	static numbersOfBoardLeftVertical(num: number) {
		let arrayX = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];


		return arrayX.filter(item => {
			if (item == num) return num;
		})
	};
	static numbersOfBoardRightVertical(num: number) {
		let arrayX = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];

		return arrayX.filter(item => {
			if (item == num) return num;
		})
	};
};


