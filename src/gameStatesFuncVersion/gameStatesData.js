'use strict';


const easyGameMode = {
	"WIDTH": 10,
	"HEIGHT": 10,
	"BOMBS_COUNT": 12,
	"font-size": "25px",
	"grid-template-columns": "repeat(10, 40px)",
	".fields__cell height": "40px",
	"randomizerMinesIndex": "0-99"
};

const normalGameMode = {
	"WIDTH": 15,
	"HEIGHT": 15,
	"BOMBS_COUNT": 35,
	"font-size": "18px",
	"grid-template-columns": "repeat(15, 27px)",
	".fields__cell height": "27px",
	"randomizerMinesIndex": "0-224"
};

const hardGameMode = {
	"WIDTH": 20,
	"HEIGHT": 20,
	"BOMBS_COUNT": 80,
	"font-size": "16px",
	"grid-template-columns": "repeat(20, 23px)",
	".fields__cell height": "23px",
	"randomizerMinesIndex": "0-399"
};

export const arrayGameModeStates = [easyGameMode, normalGameMode, hardGameMode];

