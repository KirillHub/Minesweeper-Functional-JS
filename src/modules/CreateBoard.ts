'use strict'

// import { Board } from "./Board.js";



/*
class CreateBoard extends Board {
	board: Board;
}
*/


/*
	board: Board;
	field: any = document.querySelector('.field');
	counter: number;
	cells: any = [];
	keysPairArray: any = [];
	keysUnpairArray: any = [];
	bombs: any = [];

	constructor() {
		this.board = new Board(10, 10, 15);
		this.field; 
		this.board.cellsCount = this.board.width * this.board.height;
	};

	createBoard() {
		this.counter = -1;

		for (let i = 0; i < this.board.width; i++) {
			for (let j = 0; j < this.board.height; j++) {
				this.counter++;
				const remainderDivisionNumber = i + j + 2;
				const unpairBoardBlock = document.createElement('div');
				const pairBoardBlock = document.createElement('div');

				if (remainderDivisionNumber % 2 === 0) {
					pairBoardBlock.style.backgroundColor = '#a9d751';
					this.field.append(pairBoardBlock);
					this.keysPairArray.push(this.counter);
				};

				if (remainderDivisionNumber % 2 !== 0) {
					unpairBoardBlock.style.backgroundColor = '#a2d049';
					this.field.append(unpairBoardBlock);
					this.keysUnpairArray.push(this.counter);
				};

				this.cells = [...this.field.children];
			}
		}
	};
*/