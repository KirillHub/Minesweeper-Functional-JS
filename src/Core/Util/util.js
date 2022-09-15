'use strict'

const randomizerMinesIndex = (minArrayIndex, maxArrayIndex) => {
	minArrayIndex = Math.ceil(minArrayIndex);
	maxArrayIndex = Math.floor(maxArrayIndex);
	return Math.floor(Math.random() * (maxArrayIndex - minArrayIndex + 1) + minArrayIndex);
};

const rebootGameWindow = (event) => {
	if (event) {
		if (event.target.classList.contains('start-game')) {
			window.location.reload();
		} else return window.location.reload();
	}
};

export { randomizerMinesIndex, rebootGameWindow }