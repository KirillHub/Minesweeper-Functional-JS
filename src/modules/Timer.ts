"use srtict"

export function timer() {

	let timer: any = document.querySelector('.main-title__timer-time');
	let interval: number;
	let second: number = 0;

	function reseter() {
		clearInterval(interval);
		interval = setInterval(runningTimer, 1000)
	};

	function runningTimer() {

		if (second < 9) {
			second++;
			timer.innerHTML = "00" + second;
		} else if (second < 99) {
			second++;
			timer.innerHTML = "0" + second;
		} else if (second >= 99) {
			second++;
			timer.innerHTML = second;
		}

	}
	reseter();
}


/*
export class Timer {
	timer: any = document.querySelector('.main-title__timer-time');
	interval: number;
	second: number = 0;

	startTimer() {
		clearInterval(this.interval);
		this.interval = setInterval(this.runningTimer, 1000)
	};

	runningTimer() {
		if (this.second < 9) {
			this.second++;
			this.timer.innerText = "00" + this.second;
		} else if (this.second < 99) {
			this.second++;
			this.timer.innerText = "0" + this.second;
		} else if (this.second >= 99) {
			this.second++;
			this.timer.innerText = this.second;
		}
	};
}
*/
