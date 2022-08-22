'use strict'






function getCoordPair(coord, box = { width, height }) {
	let x = coord % box.width;
	let y = Math.floor(coord / box.width);
	return { width: x, height: y };
 }

 



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



