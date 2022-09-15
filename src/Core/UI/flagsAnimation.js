'use strict'
import { GlobalGameData } from "../../GameGlobalData/GameGlobalData.js";
import MusicComponents from "../Modules/MusicComponents.js";

const globalGameData = new GlobalGameData();
let flagsLocationCoords = new Set();
let _flagCounter = +globalGameData.flagsCounterBlock.textContent;
console.log(_flagCounter);

export const flagCounter = (event) => {

	globalGameData.getArrayChildrenCells();
	globalGameData.getTargetIndex();

	const index = globalGameData.index;
	const selector = event.target;
	const flagsCounter = globalGameData.flagsCounterBlock;


	if (flagsCounter.textContent > 0
		&& selector.style.backgroundColor !== 'rgb(228, 194, 159)'
		&& selector.style.backgroundColor !== 'rgb(215, 184, 153)') {

		if (selector.innerHTML !== '🚩') {
			--flagsCounter.innerHTML;

			selector.innerHTML = '🚩';
			flagsLocationCoords.add(index);

		} else if (selector.innerHTML == '🚩') {
			++flagsCounter.innerHTML;
			selector.innerHTML = '';
			flagsLocationCoords.delete(index);

		} else if (flagsCounter === 1 && selector.innerHTML == '🚩') {
			flagsCounter.innerHTML++;
			selector.innerHTML = '';
		};

	} else if (flagsCounter >= 0 && selector.innerHTML == '🚩' &&
		selector.style.backgroundColor !== 'rgb(228, 194, 159)' &&
		selector.style.backgroundColor !== 'rgb(215, 184, 153)') {
		++flagsCounter.innerHTML;
		selector.innerHTML = '';
	};

	checkingFlagsSet();
};

function checkingFlagsSet() {
	const pullFlagsCoord = new Array();
	let bombsLenghtArray = new Array();

	globalGameData.fieldCellsChildren.forEach((bombsLocation, bombsLocationIndex) => {
		if (bombsLocation.classList.contains('bomb-cell')) {
			bombsLenghtArray.push(bombsLocationIndex);
		}
	});

	bombsLenghtArray.forEach(bombsLocation => {
		flagsLocationCoords.forEach(flagsCord => {
			if (bombsLocation === flagsCord) pullFlagsCoord.push(flagsCord);
			if (pullFlagsCoord.length === bombsLenghtArray.length) {
				globalGameData.endGameText.innerHTML = "YOU WIN !";
				MusicComponents.musicSounds('../music/win.mp3');
				setTimeout(() => { window.location.reload() }, 2000);
			}
		})
	});

}