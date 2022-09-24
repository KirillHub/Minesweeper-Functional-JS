
import { GlobalGameData } from "./GameGlobalData/GameGlobalData.js";
import { activatorGameStatesMode } from "./Core/UI/activatorGameDataStates.js";
import { createBoard } from "./Core/UI/gameBoardCreation.js";
import { openFieldCells, isValidForOpenCells, isBomb, getCellsCount } from "./Core/Modules/openFieldCells.js";
import { bombsFirstClickAnimation } from "./Core/Modules/bombsFirstClickAnimation.js";
import { flagCounter } from "./Core/UI/flagsAnimation.js";
import MusicComponents from "./Core/Modules/MusicComponents.js";
import endGame from "./Core/Modules/endGame.js";

/*============================================================================================================*/
//! globals variables
const globalGameData = new GlobalGameData();

// create visual board for user
createBoard(15, 15, 35);

//! start game
activatorGameStatesMode(createBoard);
/*============================================================================================================*/

//? buttons animation
globalGameData.buttonsParentDiv.addEventListener('click', event => {
	event.preventDefault();

	globalGameData.field.childNodes.forEach(item => {
		item.classList.remove('bomb-cell');
	});
	globalGameData.field.classList.remove('blocked');
});


//? clicks animation
globalGameData.field.addEventListener('click', event => {
	event.preventDefault();
	const selector = event.target;
	MusicComponents.musicSounds('../music/clicks.wav');
	if (selector.tagName !== 'DIV') return;

	endGame(selector);

	//create array with cells
	globalGameData.getArrayChildrenCells();
	globalGameData.getTargetIndex();
	globalGameData.getBoardWidth();
	globalGameData.getNumberBoardColumn();
	globalGameData.getNumberBoardRow();
	globalGameData.getBombsCount();

	let bombsArray = [];
	let bombsFirstClickAnimationArray = [];

	if (!globalGameData.field.classList.contains('blocked')) {
		bombsFirstClickAnimationArray = bombsFirstClickAnimation(globalGameData.row,
			globalGameData.column, globalGameData.WIDTH, globalGameData.BOMBS_COUNT,
			globalGameData.cells);

		try {
			bombsFirstClickAnimationArray.forEach(item =>
				globalGameData.cells[item].classList.add('bomb-cell'));
		} catch (error) {
			alert('Something going wrong, game will restarting');
			setTimeout(() => { window.location.reload() }, 1000);
		}
	}

	globalGameData.field.childNodes.forEach((item, index) => {
		if (typeof item.classList[2] === "undefined") {
			return;
		} else bombsArray.push(index);
	});

	try {
		openFieldCells(globalGameData.row, globalGameData.column, selector,
			globalGameData.WIDTH, globalGameData.cells, bombsArray);
		isBomb(globalGameData.row, globalGameData.column, globalGameData.WIDTH,
			bombsArray);
		isValidForOpenCells(globalGameData.row, globalGameData.column, globalGameData.WIDTH,
			bombsArray);
		getCellsCount(globalGameData.row, globalGameData.column, globalGameData.WIDTH,
			bombsArray);
	} catch (err) {
		alert("Please, restart");
		window.location.reload();
	}
});

// right click animation 
globalGameData.field.addEventListener('contextmenu', (event) => {
	event.preventDefault();
	flagCounter(event);
});

