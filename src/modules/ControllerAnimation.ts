'use strict'

// import { CreateBoard } from "./CreateBoard.js";
// import { timer } from "./Timer.js";



/*
const extendCreateBoard: CreateBoard = new CreateBoard();
// const createCellsIndex = extendCreateBoard.createBoard();

// cringe, pls delet
export class OpenFields {
	controllerAnimation: ControllerAnimationLogic;
	createBoardData: CreateBoard;
	index: number;
	cell: number;


	constructor() {

	}
}



export class ControllerAnimationLogic {


}
*/



/*
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
*/