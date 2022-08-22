'use strict'


export class Board {
	width: number;
	height: number;
	bombs_count: number;
	cellsCount: number;

	constructor(WIDTH: number, HEIGHT: number, BOMBS_COUNT: number) {
		this.width = WIDTH;
		this.height = HEIGHT;
		this.bombs_count = BOMBS_COUNT;
		this.cellsCount = this.width * this.height;
	};
}

