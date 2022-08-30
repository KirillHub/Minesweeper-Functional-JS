'use strict'

export class GlobalGameData {
	WIDTH;
	BOMBS_COUNT;

	bombs = [];
	// flagsCounter = BOMBS_COUNT;
	// flag.innerText = flagsCounter; //? cringe?
	flagsLocationCoords = new Set();

	field = document.querySelector('.field');
	fieldCellsChildren = document.querySelectorAll('.fields__cell');
	buttonsParentDiv = document.querySelector('.buttons-config');

	cells = [];
	index;
	column;
	row;

	bombsRandomArrayGenerated = new Array();
	arrayBombNeighboursOnFirstClick = new Array();
	setObjectOfRandomMines = new Set();

	isFistClickImplement = false;
	// isCreatedNewBoard = false;

	arrayChildrenCells = [];


	getTargetIndex() {
		if (this.cells.length !== 0) this.index = this.cells.indexOf(event.target);
	};

	getBoardWidth() {
		if (Math.ceil(this.cells.length / 10) === 10) this.WIDTH = 10;
		if (Math.ceil(this.cells.length / 15) === 15) this.WIDTH = 15;
		if (Math.ceil(this.cells.length / 20) === 20) this.WIDTH = 20;
	};

	getNumberBoardColumn() {
		this.getTargetIndex();
		this.getBoardWidth();

		if (typeof this.index !== 'undefined' &&
			typeof this.WIDTH !== 'undefined') this.column = this.index % this.WIDTH;
	};

	getNumberBoardRow() {
		this.getTargetIndex();
		this.getBoardWidth();

		if (typeof this.index !== 'undefined' &&
			typeof this.WIDTH !== 'undefined') this.row = Math.floor(this.index / this.WIDTH);
	};

	getArrayChildrenCells() {
		this.fieldCellsChildren = document.querySelectorAll('.fields__cell');
		this.cells = [...this.fieldCellsChildren];

		this.fieldCellsChildren.forEach(item => {
			this.arrayChildrenCells.push(item)
		});
	};

	getBombsCount() {
		if (this.cells.length === 100) this.BOMBS_COUNT = 12;
		if (this.cells.length === 225) this.BOMBS_COUNT = 35;
		if (this.cells.length === 400) this.BOMBS_COUNT = 80;
	};

};