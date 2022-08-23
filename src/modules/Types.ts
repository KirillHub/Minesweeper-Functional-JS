

export interface InitializationBoardData {
	BOMBS_COUNT: number
	WIDTH: number
	HEIGHT: number
};

export interface InitializationDataState {
	cellsCount: number

	field: any
	endGameText: any
	flag: any

	cells: any
	keysPairArray: any
	keysUnpairArray: any
	bombs: any
	// flagCounter: number //? потом вернёт функцию
	flagsLocationCoords: object
	hoverClassEffectsArray: object

	error: null | string
};

