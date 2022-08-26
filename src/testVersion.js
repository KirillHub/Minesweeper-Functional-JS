'use strict';

import { timer } from '../dist/Timer.js';
// import neighborsSearcher from '../dist/neighborsSearcher.js';


/*
	TODO: зависимость от кнопок
	TODO: first task -> сделать привязку события от кнопки "Easy"
 */

const field = document.querySelector('.field');

const easyGameMode = {
	"WIDTH": 10,
	"HEIGHT": 10,
	"BOMBS_COUNT": 12,
	"font-size": "25px",
	"grid-template-columns": "repeat(10, 40px)",
	".fields__cell height": "40px",
	"randomizerMinesIndex": "0-99"
};


const normalGameMode = {
	"WIDTH": 15,
	"HEIGHT": 15,
	"BOMBS_COUNT": 35,
	"font-size": "18px",
	"grid-template-columns": "repeat(15, 27px)",
	".fields__cell height": "27px",
	"randomizerMinesIndex": "0-224"
};
const hardGameMode = {
	"WIDTH": 20,
	"HEIGHT": 20,
	"BOMBS_COUNT": 80,
	"font-size": "16px",
	"grid-template-columns": "repeat(20, 23px)",
	".fields__cell height": "23px",
	"randomizerMinesIndex": "0-399"
};


const arrayGameModeStates = [easyGameMode, normalGameMode, hardGameMode];

startGame(arrayGameModeStates[1].WIDTH,
	arrayGameModeStates[1].HEIGHT,
	arrayGameModeStates[1].BOMBS_COUNT);


/*
	const startGameDataSetting = document.querySelector('.buttons-config').addEventListener('click', event => {
	
		let indexArrayGameModeStates;
		console.log(event.target);
		if (event.target.textContent === 'Easy') {
			indexArrayGameModeStates = 0;
			startGame(0, 0, 0);
			console.log('easy');
			startGame(arrayGameModeStates[indexArrayGameModeStates].WIDTH,
				arrayGameModeStates[indexArrayGameModeStates].HEIGHT,
				arrayGameModeStates[indexArrayGameModeStates].BOMBS_COUNT);
	
		} else if (event.target.textContent === 'Normal') {
			indexArrayGameModeStates = 1;
			console.log('normal');
			startGame(arrayGameModeStates[indexArrayGameModeStates].WIDTH,
				arrayGameModeStates[indexArrayGameModeStates].HEIGHT,
				arrayGameModeStates[indexArrayGameModeStates].BOMBS_COUNT);
	
		} else if (event.target.textContent === 'Hard') {
			indexArrayGameModeStates = 2;
			console.log('hard');
			startGame(arrayGameModeStates[indexArrayGameModeStates].WIDTH,
				arrayGameModeStates[indexArrayGameModeStates].HEIGHT,
				arrayGameModeStates[indexArrayGameModeStates].BOMBS_COUNT);
		}
	
	
		// startGame(arrayGameModeStates[indexArrayGameModeStates].WIDTH,
		// 	arrayGameModeStates[indexArrayGameModeStates].HEIGHT,
		// 	arrayGameModeStates[indexArrayGameModeStates].BOMBS_COUNT);
	}, { once: true });
*/


//! activaite buttons 
//? button which activate game state 
const buttonsParentDiv = document.querySelector('.buttons-config');
const fieldStyle = field.style;

/*
!
	while (field.hasChildNodes()) {
			console.log('first - del children');
			field.removeChild(field.firstChild)
		}
*/


buttonsParentDiv.addEventListener('click', event => {
	let indexArrayGameModeStates;

	while (field.hasChildNodes()) {
		field.removeChild(field.firstChild)
	};



	field.childNodes.forEach(item => {
		const selectorFiedlChildren = item.style;


		/*
		! может по другому
			while (field.hasChildNodes()) {
				field.removeChild(field.firstChild)
			};
		*/


		if (event.target.classList.contains('buttons-config__easy-mode')) {
			console.log(`here - easy`);
			fieldStyle.setProperty('grid-template-columns', `repeat(10, 40px)`);
			selectorFiedlChildren.display = "grid";
			selectorFiedlChildren.fontSize = "25px";
			selectorFiedlChildren.height = "40px";
		};

		if (event.target.classList.contains('buttons-config__normal-mode')) {
			console.log(`here - normal`);
			fieldStyle.setProperty('grid-template-columns', `repeat(15, 27px)`);
			selectorFiedlChildren.fontSize = "18px";
			selectorFiedlChildren.height = "27px";
		};

		if (event.target.classList.contains('buttons-config__hard-mode')) {
			console.log(`here - hard`);
			fieldStyle.setProperty('grid-template-columns', `repeat(20, 23px)`);
			selectorFiedlChildren.fontSize = "16px";
			selectorFiedlChildren.height = "23px";
		};
	});


	if (event.target.textContent === 'Easy') {
		indexArrayGameModeStates = 0;

		console.log('easy');
		startGame(arrayGameModeStates[indexArrayGameModeStates].WIDTH,
			arrayGameModeStates[indexArrayGameModeStates].HEIGHT,
			arrayGameModeStates[indexArrayGameModeStates].BOMBS_COUNT);
		console.log(field.children);

	} else if (event.target.textContent === 'Normal') {
		indexArrayGameModeStates = 1;
		console.log('normal');
		startGame(arrayGameModeStates[indexArrayGameModeStates].WIDTH,
			arrayGameModeStates[indexArrayGameModeStates].HEIGHT,
			arrayGameModeStates[indexArrayGameModeStates].BOMBS_COUNT);

	} else if (event.target.textContent === 'Hard') {
		indexArrayGameModeStates = 2;
		console.log('hard');
		startGame(arrayGameModeStates[indexArrayGameModeStates].WIDTH,
			arrayGameModeStates[indexArrayGameModeStates].HEIGHT,
			arrayGameModeStates[indexArrayGameModeStates].BOMBS_COUNT);
	}

});





function startGame(WIDTH, HEIGHT, BOMBS_COUNT) {

	document.addEventListener('contextmenu', event => event.preventDefault());


	const fieldsCellSettingsClass = document.querySelector('.fields__cell');

	// field.addEventListener("click", function (event) { event.preventDefault(); })
	// field.addEventListener("mousedown", function (event) { event.preventDefault(); })
	// field.addEventListener("mouseup", function (event) { event.preventDefault(); })

	const flag = document.querySelector('.main-title__flags-counter');
	const endGameText = document.querySelector('.end-game');


	const cellsCount = WIDTH * HEIGHT; // ? delete?

	let cells = [];
	const keysPairArray = [];
	const keysUnpairArray = [];

	let bombs;


	let flagsCounter = BOMBS_COUNT;
	flag.innerText = flagsCounter;
	let flagsLocationCoords = new Set();

	let hoverClassEffectsArray = new Set();



	// two colors for board
	function board() {
		let counter = -1;

		for (let i = 0; i < WIDTH; i++) {
			for (let j = 0; j < HEIGHT; j++) {
				counter++;
				const number = i + j + 2;
				const unpairMaskBlock = document.createElement('div');
				const pairMaskBlock = document.createElement('div');

				unpairMaskBlock.classList.add('fields__hover-class', "fields__cell");
				pairMaskBlock.classList.add('fields__hover-class', "fields__cell");

				if (number % 2 === 0) {
					pairMaskBlock.style.backgroundColor = '#a9d751';
					// pairMaskBlock.textContent = counter;
					field.append(pairMaskBlock);
					keysPairArray.push(counter);
				}
				if (number % 2 !== 0) {
					unpairMaskBlock.style.backgroundColor = '#a2d049';
					// unpairMaskBlock.textContent = counter;
					field.append(unpairMaskBlock);
					keysUnpairArray.push(counter);
				}
				cells = [...field.children];
			}
		}
	}
	board();


	/*============================================================================================================*/
	// отвечает за макс диапазон при рандомизации мин по индексам
	let countFieldsChildrenBlocks = cells.length;
	console.log(countFieldsChildrenBlocks);



	/*============================================================================================================*/


	//? sounds effects
	class MusicComponents {

		static musicSounds(audioPath) {
			this.audioPath = audioPath;
			this.audio = new Audio();
			this.audio.src = this.audioPath;
			this.audio.play();
		};
	};

	//?  first click
	field.addEventListener('click', (event) => {
		if (event.target.tagName !== 'DIV') return;

		bombsAnimation();
		timer();
		MusicComponents.musicSounds('../music/first-click.wav');
	}, { once: true });


	function bombsAnimation() {
		const index = cells.indexOf(event.target);
		let bombsRandomArrayGenerated = new Array();
		let arrayBombNeighboursOnFirstClick = new Array();
		let setObjectOfRandomMines = new Set();
		const column = index % WIDTH;
		const row = Math.floor(index / WIDTH);

		function pushNeighborFieldsIndex(row, column) {
			if (!isValid(row, column)) return false;

			const index = row * WIDTH + column;
			return arrayBombNeighboursOnFirstClick.push(index);
		}

		function openNeighborsFields(row, column) {
			for (let x = -1; x <= 1; x++) {
				for (let y = -1; y <= 1; y++) {
					(pushNeighborFieldsIndex(row + y, column + x))
				}
			}
		};

		openNeighborsFields(row, column);

		arrayBombNeighboursOnFirstClick.forEach(neighbors => setObjectOfRandomMines.add(neighbors));

		do {
			setObjectOfRandomMines.add(randomizerMinesIndex(0, countFieldsChildrenBlocks)); //! (0,99) || (0, 224) || (0, 528)
		} while (setObjectOfRandomMines.size < (BOMBS_COUNT + arrayBombNeighboursOnFirstClick.length)
			&& setObjectOfRandomMines.size <= countFieldsChildrenBlocks);

		setObjectOfRandomMines.forEach(item => bombsRandomArrayGenerated.push(item));

		bombsRandomArrayGenerated = bombsRandomArrayGenerated
			.slice(arrayBombNeighboursOnFirstClick.length, bombsRandomArrayGenerated.length);
		return bombs = bombsRandomArrayGenerated;
	};

	function randomizerMinesIndex(minArrayIndex, maxArrayIndex) {
		minArrayIndex = Math.ceil(minArrayIndex);
		maxArrayIndex = Math.floor(maxArrayIndex);
		return Math.floor(Math.random() * (maxArrayIndex - minArrayIndex + 1) + minArrayIndex);
	};


	//? click's animation
	field.addEventListener('click', (event) => {
		const selector = event.target;
		const index = cells.indexOf(selector);
		const column = index % WIDTH;
		const row = Math.floor(index / WIDTH);

		field.addEventListener("mousedown", function (event) { event.preventDefault(); });
		field.addEventListener("mouseup", function (event) { event.preventDefault(); });

		if (selector.tagName !== 'DIV') return;

		if (selector.style.backgroundColor == 'rgb(169, 215, 81)' ||
			selector.style.backgroundColor == 'rgb(162, 208, 73)') {
			MusicComponents.musicSounds('../music/clicks.wav');
		};

		open(row, column);
	});


	//! right click animation
	field.addEventListener('contextmenu', (event) => {

		function flagCounter() {
			const index = cells.indexOf(event.target);
			const selector = event.target;

			if (bombs) {
				if (flagsCounter > 0
					&& selector.style.backgroundColor !== 'rgb(228, 194, 159)'
					&& selector.style.backgroundColor !== 'rgb(215, 184, 153)') {

					if (selector.innerHTML !== '🚩') {
						flag.innerHTML = --flagsCounter;
						selector.innerHTML = '🚩';
						MusicComponents.musicSounds('../music/tick.mp3');
						flagsLocationCoords.add(index);

					} else if (selector.innerHTML == '🚩') {
						flag.innerHTML = ++flagsCounter;
						selector.innerHTML = '';
						MusicComponents.musicSounds('../music/tick.mp3');
						flagsLocationCoords.delete(index);

					} else if (flagsCounter === 1 && selector.innerHTML == '🚩') {
						flagsCounter++;
						selector.innerHTML = '';
						MusicComponents.musicSounds('../music/tick.mp3');
					};

				} else if (flagsCounter >= 0 && selector.innerHTML == '🚩' &&
					selector.style.backgroundColor !== 'rgb(228, 194, 159)' &&
					selector.style.backgroundColor !== 'rgb(215, 184, 153)') {
					flag.innerHTML = ++flagsCounter;
					selector.innerHTML = '';
					MusicComponents.musicSounds('../music/tick.mp3');
				}

				function checkingFlagsSet() {
					const pullFlagsCoord = new Array();
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
			};
		};
		flagCounter();
	});


	function isValid(row, column) {
		return row >= 0 && row < HEIGHT
			&& column >= 0 && column < WIDTH;
	};

	function getCount(row, column) {
		let count = 0;
		for (let x = -1; x <= 1; x++) {
			for (let y = -1; y <= 1; y++) {
				if (isBomb(row + y, column + x)) {
					count++
				};
			};
		};
		return count;
	};

	function open(row, column) {
		if (!isValid(row, column)) return;

		const index = row * WIDTH + column;
		const cell = cells[index];

		if (cell.disabled === true) return;

		cell.disabled = true;

		if (index >= 0) {
			keysPairArray.forEach(items => {
				if (items === index) {
					hoverClassEffectsArray.add(items);
					cell.style.background = '#e4c29f';
				}
			});

			keysUnpairArray.forEach(items => {
				if (items === index) {
					hoverClassEffectsArray.add(items);
					cell.style.background = '#d7b899';
				}
			});

			function clearHoverEffect() {
				if (hoverClassEffectsArray.size > 0) {
					hoverClassEffectsArray.forEach(fieldsNumber => {
						if (fieldsNumber === index) {
							cell.classList.remove('fields__hover-class')
						}
					})
				}
			}
			clearHoverEffect();

			const colorNumberArray = ['blue', 'green', 'red', 'purple', 'black',
				'darkslategray', 'rgb(64, 25, 90)', 'rgb(15, 81, 119)'];

			colorNumberArray.forEach((item, index) => {
				++index;
				if (getCount(row, column) > 0) {
					if (getCount(row, column) == index) {
						cell.style.color = item;
					}
				}
			});

			if (isBomb(row, column)) {


				return cell.innerHTML = '💣'; //! потом убрать return
				/*
				! анимация проигрыша
				MusicComponents.musicSounds('../music/beep-bomb.mp3');
				endGameText.innerText = 'YOU LOSE!';
				setTimeout(() => { window.location.reload() }, 1500);
				return;
				*/
			}

			const count = getCount(row, column);

			if (count !== 0) {
				cell.innerHTML = count;
				return;
			};

			for (let x = -1; x <= 1; x++) {
				for (let y = -1; y <= 1; y++) {
					open(row + x, column + y);
				}
			}
		};
	}

	function isBomb(row, column) {
		if (!isValid(row, column)) return false;

		const index = row * WIDTH + column;
		return bombs.includes(index)
	};

}


