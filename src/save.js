

function isValidForOpenCells(row, column, WIDTH) { //? пробная версия проверки валидации
	return row >= 0 && row < WIDTH
		&& column >= 0 && column < WIDTH;
};

function getCellsCount(row, column) {
	let count = 0;
	for (let x = -1; x <= 1; x++) {
		for (let y = -1; y <= 1; y++) {
			if (isBomb(row + y, column + x, globalGameData.WIDTH)) {
				count++
			};
		};
	};
	return count;
};



// Open
function openFieldCells(row, column) {

	if (!isValidForOpenCells(globalGameData.row, globalGameData.column, globalGameData.WIDTH)) return;

	/* 
	! все данные есть и обновляются правильно!
	console.log(globalGameData.WIDTH);
	console.log(globalGameData.index);
	console.log(globalGameData.column);
	console.log(globalGameData.row);
	*/

	const targetCell = globalGameData.cells[globalGameData.index];


	//get div-block of target
	if (targetCell.disabled === true) return;

	targetCell.disabled = true;

	if (globalGameData.index >= 0) {
		const colorNumberArray = ['blue', 'green', 'red', 'purple', 'black',
			'darkslategray', 'rgb(64, 25, 90)', 'rgb(15, 81, 119)'];

		colorNumberArray.forEach((item, index) => {
			++index;
			if (getCellsCount(row, column) > 0) {
				if (getCellsCount(row, column) == index) {
					targetCell.style.color = item;
				}
			}
		});

		if (isBomb(row, column, globalGameData.WIDTH)) {
			targetCell.innerHTML = '💣';
			return;
		};

		const count = getCellsCount(row, column);
		if (count !== 0) {
			targetCell.innerHTML = count;
			return;
		}

		for (let x = -1; x <= 1; x++) {
			for (let y = -1; y <= 1; y++) {
				console.log(openFieldCells(row + x, column + y));
			}
		}
	}

};

function isBomb(row, column, WIDTH) {
	if (!isValidForOpenCells(row, column, globalGameData.WIDTH)) return false;

	const index = row * WIDTH + column;
	return bombs.includes(index)
};
