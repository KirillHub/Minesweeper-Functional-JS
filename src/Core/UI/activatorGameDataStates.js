
import { arrayGameModeStates } from "./gameModeStatesData.js";
import { GlobalGameData } from "../../GameGlobalData/GameGlobalData.js"

export function activatorGameStatesMode(startGameActive) {

	/**
	 * assign an instance to a class
	 * Load {data} from global game data && create board
	 */

	const globalGameData = new GlobalGameData();
	const fieldStyle = globalGameData.field.style;
	const flagCounter = document.querySelector('.main-title__flags-counter');
	const gridTemplateColumn = 'grid-template-columns';


	globalGameData.buttonsParentDiv.addEventListener('click', event => {
		if (event.target.tagName !== "BUTTON") return;

		while (globalGameData.field.hasChildNodes()) {
			globalGameData.field.removeChild(globalGameData.field.firstChild)
		};

		const START_GAME_CREATE_BOARD = (indexArrayGameModeStates,
			setPropertyGridColumns, setPropertyGridColumnsSize, styleFontSize, styleHeight) => {

			try {
				startGameActive(arrayGameModeStates[indexArrayGameModeStates].WIDTH,
					arrayGameModeStates[indexArrayGameModeStates].HEIGHT,
					arrayGameModeStates[indexArrayGameModeStates].BOMBS_COUNT);

				fieldStyle.setProperty(setPropertyGridColumns, setPropertyGridColumnsSize);

				if (typeof styleFontSize !== 'undefined' && typeof styleHeight !== 'undefined') {
					globalGameData.field.childNodes.forEach(item => {
						item.style.fontSize = styleFontSize;
						item.style.height = styleHeight;
					});
				};

				flagCounter.textContent = arrayGameModeStates[indexArrayGameModeStates].BOMBS_COUNT;
			} catch (err) {
				console.error(err);
				throw new err('Board is not created');
			};

		};

		/**
		 * we need three statets of board settings
		 * in this solution, we start from the text value of the button
		 */

		switch (event.target.textContent) {
			case "Easy":
				START_GAME_CREATE_BOARD(0, gridTemplateColumn, 'repeat(10, 40px)', "30px", "40px");
				break;
			case "Normal":
				START_GAME_CREATE_BOARD(1, gridTemplateColumn, "repeat(15, 27px)", "22px", "27px");
				break;
			case "Hard":
				START_GAME_CREATE_BOARD(2, gridTemplateColumn, 'repeat(20, 23px)', "18px", "23px");
				break;
		};

		return startGameActive;
	});
};
