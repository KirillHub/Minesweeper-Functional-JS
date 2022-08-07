'use strict'

import { CreateBoard } from "./CreateBoard.js";
import { timer } from "./Timer.js";
import { OpenFields } from "./OpenFields.js";  //!


const extendCreateBoard: CreateBoard = new CreateBoard();
const createCellsIndex = extendCreateBoard.createBoard();
const openFields = new OpenFields();  //!


// createCellsIndex;

export class ControllerAnimationLogic {
	numbersOfBombGenerated: number = extendCreateBoard.bombs;
	mainFieldDiv: any = extendCreateBoard.field;


	keyHandlerFirstClick() {

		const keyOnceClick: any = this.mainFieldDiv.addEventListener('click', (event: any) => {

			const arrayFirstClickIndexField = extendCreateBoard.cells.indexOf(event.target);
			console.log(arrayFirstClickIndexField); // numbers of fields

			const firstClickAnimation = () => {
				extendCreateBoard.bombs = [...Array(extendCreateBoard.board.cellsCount).keys()]
					.sort(() => Math.random() - 0.5)
					.slice(0, extendCreateBoard.board.bombs_count);

				console.log(extendCreateBoard.bombs);
			};
			firstClickAnimation();


			timer() //! later change on class (need to fix)

		}, { once: true });
	};
	keyHandlerClicks() {
		const keyClickAnimation: any = this.mainFieldDiv.addEventListener('click', (event: any) => {
			if (event.target.tagName !== 'DIV') return;

			const arrayIndexField = extendCreateBoard.cells.indexOf(event.target);
			const column = arrayIndexField % extendCreateBoard.board.width;
			const row = Math.floor(arrayIndexField / extendCreateBoard.board.width);

			//! class OpenFields (row, column)

		});
	};
	
}




/*
// Module my-module.js
var foo={
rightPressed:false;
leftPressed:false;
keyDownHandler:function(e) {
	 if (e.keyCode == 39) {
		  this.rightPressed = true;
	 }
	else if (e.keyCode == 37) {
		  this.leftPressed = true;
	 }
}
keyUpHandler:function(e){
	  if (e.keyCode == 39) {
			this.rightPressed = false;
	  }
	 else if (e.keyCode == 37) {
			this.leftPressed = false;
	  }
  const keyDown=  document.addEventListener("keydown", this.keyDownHandler, false);
 const keyUp= document.addEventListener("keyup", this.keyUpHandler, false);
}
export {foo};
*/