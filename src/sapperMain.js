'use strict'


import { CreateBoard } from "../dist/CreateBoard.js"
import { ControllerAnimationLogic } from "../dist/firstClickAnimation.js";
import {OpenFields} from "../dist/"
// import { bombsClick } from "../dist/firstClickAnimation.js";
// import { Board } from "../dist/Board.js";

// console.log(randomizeMinesXY.shuffleMethod); //get запрос



const board = new CreateBoard();
// const boardSetting = board.createBoard();
console.log(board);



const test = new ControllerAnimationLogic();
console.log(test.keyHandlerFirstClick());
console.log(test.keyHandlerClicks());

console.log(board.bombs);
/*
export let boardConfig = {
	width: 10,
	height: 11,
	bombs: 20,
};
*/



//let data = new SweeperData(config.width, config.height, config.bombs);
//let controller = new SweeperLogic();

// console.log(CreateBoard());



// console.log(board);
// console.log(boardSetting);

// const board = new CreateBoard();
// console.log(board);



