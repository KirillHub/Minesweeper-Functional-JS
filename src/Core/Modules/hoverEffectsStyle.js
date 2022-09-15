'use strict'

import { GlobalGameData } from "../../GameGlobalData/GameGlobalData.js";
const gameGlobalData = new GlobalGameData();

export default function hoverEffectClassListStyle(target) {
	let countingFlags = 0;
	if (target.textContent == '🚩') countingFlags++;

	if (countingFlags > 0) gameGlobalData.flagsCounterBlock.innerHTML =
		+gameGlobalData.flagsCounterBlock.innerHTML + (+countingFlags)

	if (target.textContent = '🚩') target.innerHTML = '';

	if (target.style.backgroundColor === 'rgb(169, 215, 81)') {
		target.style.backgroundColor = '#e4c29f';
		target.classList.remove('fields__hover-class');
		target.style.cursor = "auto";
	} else if (target.style.backgroundColor === 'rgb(162, 208, 73)') {
		target.style.backgroundColor = '#d7b899';
		target.classList.remove('fields__hover-class');
		target.style.cursor = "auto";
	};
};

