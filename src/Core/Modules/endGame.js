'use strict'

import MusicComponents from "./MusicComponents.js";
import { GlobalGameData } from "../../GameGlobalData/GameGlobalData.js";

export default function endGame(selector) {
	const globalGameData = new GlobalGameData();
	if (selector.classList.contains('bomb-cell')) {
		MusicComponents.musicSounds('../music/beep-bomb.mp3');
		globalGameData.endGameText.innerText = 'YOU LOSE!';
		setTimeout(() => { window.location.reload() }, 1500);
		return;
	}
}