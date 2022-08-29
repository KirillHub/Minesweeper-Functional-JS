'use strict'

export class GlobalGameData {
	WIDTH;
	HEIGHT = this.WIDTH;

	bombs = [23, 10, 56, 77, 3, 5, 37, 21, 54, 13, 17, 19, 87]; //! later
	// flagsCounter = BOMBS_COUNT;
	// flag.innerText = flagsCounter; //? cringe?
	flagsLocationCoords = new Set();

	field = document.querySelector('.field');
	fieldCellsChildren = document.querySelectorAll('.fields__cell');

	cells = [];
	index;
	column;
	row;
	bombsRandomArrayGenerated = new Array();
	arrayBombNeighboursOnFirstClick = new Array();
	setObjectOfRandomMines = new Set();
	isFistClickEmplement = false;
	arrayChildrenCells = [];
	arrayChildrenCellsPair = [];
	arrayChildrenCellsUnpair = [];

	testArray = []

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

	createTwoPairsArrayChildren() {
		this.fieldCellsChildren.forEach(item => {
			item.style.backgroundColor == 'rgb(169, 215, 81)' ? this.arrayChildrenCellsPair.push(item) :
				this.arrayChildrenCellsUnpair.push(item);
		});
	};

};