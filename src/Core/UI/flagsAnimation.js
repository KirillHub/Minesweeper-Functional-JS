'use strict'
import { GlobalGameData } from "../../GameGlobalData/GameGlobalData.js";

const globalGameData = new GlobalGameData();
let flagsLocationCoords = new Set();

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

	console.log(flagsLocationCoords);



}


function checkingFlagsSet() {
	const pullFlagsCoord = new Array();

	globalGameData.fieldCellsChildren.forEach(item => {
		console.log();
		if (item.classList.contains('bomb-cell')) { }
	});

	bombs.forEach(bombsLocation => {
		flagsLocationCoords.forEach(flagsCord => {
			if (bombsLocation === flagsCord) pullFlagsCoord.push(flagsCord);
			if (pullFlagsCoord.length === bombs.length) {
				endGameText.innerText = 'YOU WIN !';
				MusicComponents.musicSounds('../music/win.mp3');
				setTimeout(() => { window.location.reload() }, 2000);
			}
		});
	});
}
checkingFlagsSet();

