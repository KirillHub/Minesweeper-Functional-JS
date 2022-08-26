"use srtict";

let interval;
let second = 0;

function timer() {
	let timer = document.querySelector('.main-title__timer-time');

	function reseter() {
		clearInterval(interval);
		interval = setInterval(runningTimer, 1000);
	};
	function runningTimer() {
		if (second < 9) {
			second++;
			timer.innerHTML = "00" + second;
		}
		else if (second < 99) {
			second++;
			timer.innerHTML = "0" + second;
		}
		else if (second >= 99) {
			second++;
			timer.innerHTML = second;
		}
	};
	reseter();
};


function reseterTimer() {
	return clearInterval(interval);
}
