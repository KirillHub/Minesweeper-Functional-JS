'use strict'

export class GlobalGameData {
	WIDTH;
	cells = [];
	bombs;
	// flagsCounter = BOMBS_COUNT;
	// flag.innerText = flagsCounter; //? cringe?
	flagsLocationCoords = new Set();
	hoverClassEffectsArray = new Set();
	field = document.querySelector('.field');
	index;
	column;
	row;
	bombsRandomArrayGenerated = new Array();
	arrayBombNeighboursOnFirstClick = new Array();
	setObjectOfRandomMines = new Set();


	getTargetIndex() {
		if (this.cells.length !== 0) this.index = this.cells.indexOf(event.target);
	};

	calculateBoardWidth() {
		if (Math.ceil(this.cells.length / 10) === 10) this.WIDTH = 10;
		if (Math.ceil(this.cells.length / 15) === 15) this.WIDTH = 15;
		if (Math.ceil(this.cells.length / 20) === 20) this.WIDTH = 20;
	};

	getNumberBoardColumn() {
		this.getTargetIndex();
		this.calculateBoardWidth();

		if (typeof this.index !== 'undefined' &&
			typeof this.WIDTH !== 'undefined') this.column = this.index % this.WIDTH;
	};

	getNumberBoardRow() {
		this.getTargetIndex();
		this.calculateBoardWidth();

		if (typeof this.index !== 'undefined' &&
			typeof this.WIDTH !== 'undefined') this.row = Math.floor(this.index / this.WIDTH);
	};

};