'use strict'

export default class MusicComponents {
	static musicSounds(audioPath) {
		this.audioPath = audioPath;
		this.audio = new Audio();
		this.audio.src = this.audioPath;
		this.audio.play();
	};
};