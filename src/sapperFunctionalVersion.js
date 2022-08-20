'use strict';

import { timer } from '../dist/Timer.js';
import neighborsSearcher from '../dist/neighborsSearcher.js';


startGame(10, 10, 3);

function startGame(WIDTH, HEIGHT, BOMBS_COUNT) {

	const field = document.querySelector('.field');
	const flag = document.querySelector('.main-title__flags-counter');
	const endGameText = document.querySelector('.end-game');

	const cellsCount = WIDTH * HEIGHT;

	let cells = [];
	const keysPairArray = [];
	const keysUnpairArray = [];

	let bombs;

	let flagsCounter = BOMBS_COUNT;
	flag.innerText = flagsCounter;
	let flagsLocationCoords = new Set();


	// create two colors for board
	function board() {
		let counter = -1;

		for (let i = 0; i < WIDTH; i++) {
			for (let j = 0; j < HEIGHT; j++) {

				counter++;
				const number = i + j + 2;
				const unpairMaskBlock = document.createElement('div');
				const pairMaskBlock = document.createElement('div');

				if (number % 2 === 0) {
					pairMaskBlock.style.backgroundColor = '#a9d751';
					field.append(pairMaskBlock);
					keysPairArray.push(counter);
				}
				if (number % 2 !== 0) {
					unpairMaskBlock.style.backgroundColor = '#a2d049';
					field.append(unpairMaskBlock);
					keysUnpairArray.push(counter);
				}

				cells = [...field.children];
			}
		}
	}
	board();


	//? sounds effects
	class MusicComponents {

		constructor(audioPath) {
			this.audioPath = audioPath;
		};

		static musicSounds() {
			this.audio = new Audio();
			this.audio.src = this.audioPath;
			this.audio.play();
		}

		firstClickMusic() {
			this.audio.src = "../music/first-click.wav";
			this.audio.play();
		};

		soundClick() {
			this.audio.src = "../music/clicks.wav";
			this.audio.play();
		};

		soundBomb() {
			this.audio.src = "../music/beep-bomb.mp3";
			this.audio.play();
		};
	}
	const soundsEffectsOnclick = new MusicComponents();
	const firstClickEffectSound = new MusicComponents();
	const soundsEffectsBombOnclick = new MusicComponents();

	//? start timer on first click
	field.addEventListener('click', (event) => {
		if (event.target.tagName !== 'DIV') return;
		const index = cells.indexOf(event.target);

		bombsAnimation();
		timer();
		MusicComponents.musicSounds('../music/first-click.wav');

	}, { once: true });


	function bombsAnimation() {
		const index = cells.indexOf(event.target); //?
		let bombsRandomArrayGenerated = new Array();
		let setObject = new Set();

		neighborsSearcher(index).forEach(neighbors => setObject.add(neighbors));

		do {
			setObject.add(randomizerMinesIndex(0, 99));
		} while (setObject.size < (BOMBS_COUNT + neighborsSearcher(index).length)
			&& setObject.size <= 99);

		setObject.forEach(item => bombsRandomArrayGenerated.push(item));

		bombsRandomArrayGenerated = bombsRandomArrayGenerated
			.slice(neighborsSearcher(index).length, bombsRandomArrayGenerated.length);
		return bombs = bombsRandomArrayGenerated;
	};

	function randomizerMinesIndex(minArrayIndex, maxArrayIndex) {
		minArrayIndex = Math.ceil(minArrayIndex);
		maxArrayIndex = Math.floor(maxArrayIndex);
		return Math.floor(Math.random() * (maxArrayIndex - minArrayIndex + 1) + minArrayIndex);
	};


	field.addEventListener('click', (event) => {
		if (event.target.tagName !== 'DIV') return;

		const index = cells.indexOf(event.target);
		const column = index % WIDTH;
		const row = Math.floor(index / WIDTH);

		open(row, column);
	});


	//! flags counter + win
	field.addEventListener('contextmenu', (event) => {
		event.preventDefault();

		function flagCounter() {
			const index = cells.indexOf(event.target);
			const selector = event.target;
			const pullFlagsCoord = new Array();

			if (bombs) {
				if (flagsCounter > 0
					&& selector.style.backgroundColor !== 'rgb(228, 194, 159)'
					&& selector.style.backgroundColor !== 'rgb(215, 184, 153)') {

					if (selector.innerHTML !== '🚩') {
						flag.innerHTML = --flagsCounter;
						selector.innerHTML = '🚩';
						flagsLocationCoords.add(index);

					} else if (selector.innerHTML == '🚩') {
						flag.innerHTML = ++flagsCounter;
						selector.innerHTML = '';
						flagsLocationCoords.delete(index);

					} else if (flagsCounter === 1 && selector.innerHTML == '🚩') {
						flagsCounter++;
						selector.innerHTML = '';
					};

				} else if (flagsCounter >= 0 && selector.innerHTML == '🚩') {
					flag.innerHTML = ++flagsCounter;
					selector.innerHTML = '';
				}

				bombs.forEach(bombsLocation => {
					flagsLocationCoords.forEach(flagsCord => {
						if (bombsLocation === flagsCord) pullFlagsCoord.push(flagsCord);
						if (pullFlagsCoord.length === bombs.length) {
							endGameText.innerText = 'YOU WIN !';
							setTimeout(() => { window.location.reload() }, 2000);
						}
					});
				});

			};
		}
		flagCounter();
	}, true);

	// soundsEffectsOnclick.soundClick(); //! вкл


	function isValid(row, column) {
		return row >= 0 && row < HEIGHT
			&& column >= 0 && column < WIDTH;
	}

	function getCount(row, column) {
		let count = 0;
		for (let x = -1; x <= 1; x++) {
			for (let y = -1; y <= 1; y++) {
				if (isBomb(row + y, column + x)) {
					count++
				}
			}
		}
		return count;
	}

	function open(row, column) {
		if (!isValid(row, column)) return;

		const index = row * WIDTH + column;
		const cell = cells[index];

		if (cell.disabled === true) return;

		cell.disabled = true;

		if (index >= 0) {
			keysPairArray.forEach(items => {
				if (items === index) cell.style.background = '#e4c29f';
			});

			keysUnpairArray.forEach(items => {
				if (items === index) cell.style.background = '#d7b899';
			});

			if (getCount(row, column) == 1) cell.style.color = 'blue';
			if (getCount(row, column) == 2) cell.style.color = 'green';
			if (getCount(row, column) == 3) cell.style.color = 'red';
			if (getCount(row, column) == 4) cell.style.color = 'purple';
			if (getCount(row, column) == 5) cell.style.color = 'black';
			if (getCount(row, column) == 6) cell.style.color = 'darkslategray';
			if (getCount(row, column) == 7) cell.style.color = 'rgb(64, 25, 90)';
			if (getCount(row, column) == 8) cell.style.color = 'rgb(15, 81, 119)';


			if (isBomb(row, column)) {

				cell.innerHTML = '💣';

				// soundsEffectsBombOnclick.soundBomb(); //! вкл

				endGameText.innerText = 'YOU LOSE!';
				setTimeout(() => { window.location.reload() }, 1500);

				return;
			}

			const count = getCount(row, column);

			if (count !== 0) {
				cell.innerHTML = count;
				return;
			}

			for (let x = -1; x <= 1; x++) {
				for (let y = -1; y <= 1; y++) {
					open(row + x, column + y);
				}
			}
		}
	}

	function isBomb(row, column) {
		if (!isValid(row, column)) return false;

		const index = row * WIDTH + column;

		return bombs.includes(index)
	}
}

