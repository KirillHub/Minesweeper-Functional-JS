export function board(field, WIDTH, HEIGHT, BOMBS_COUNT, cells) {
	const buttonsParentDiv = document.querySelector('.buttons-config');
	const fieldStyle = field.style;

	const keysPairArray = [];
	const keysUnpairArray = [];
	const flag = document.querySelector(".main-title__flags-counter");

	/*
		//? создание доски по умолчанию (normal)
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
				if (cells.length !== 0) {
					cells = 0;
				}
				cells = [...field.children];
			}
		}
	*/

	buttonsParentDiv.addEventListener('click', event => {
		while (field.hasChildNodes()) {
			field.removeChild(field.firstChild);
		};

		if (event.target.textContent === 'Normal') {
			// window.location.reload();
			WIDTH = 15, HEIGHT = 15;
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
					if (cells.length !== 0) {
						cells = 0;
					}
				cells = [...field.children];
				}
			}
		} else if (event.target.textContent === 'Easy') {
			let counter = -1;
			flag.innerHTML = 10; //! брать потом кл-во бомб из innerHTML

			WIDTH = 10; HEIGHT = 10; BOMBS_COUNT = 12;

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
						field.append(pairMaskBlock);
						keysPairArray.push(counter);
					}
					if (number % 2 !== 0) {
						unpairMaskBlock.style.backgroundColor = '#a2d049';
						field.append(unpairMaskBlock);
						keysUnpairArray.push(counter);
					}
					if (cells.length !== 0) {
						cells = 0;
					}
					cells = [...field.children];
				}
			};
			fieldStyle.setProperty('grid-template-columns', `repeat(10, 40px)`);

			field.childNodes.forEach(item => {
				item.style.fontSize = "30px";
				item.style.height = "40px";
			});

		} else if (event.target.textContent === 'Hard') {
			let counter = -1;
			flag.innerHTML = 80; //! брать потом кл-во бомб из innerHTML

			WIDTH = 20; HEIGHT = 20; BOMBS_COUNT = 80;

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
						field.append(pairMaskBlock);
						keysPairArray.push(counter);
					}
					if (number % 2 !== 0) {
						unpairMaskBlock.style.backgroundColor = '#a2d049';
						field.append(unpairMaskBlock);
						keysUnpairArray.push(counter);
					}
					if (cells.length !== 0) {
						cells = 0;
					}
					cells = [...field.children];
				}
			};

			fieldStyle.setProperty('grid-template-columns', `repeat(20, 23px)`);

			field.childNodes.forEach(item => {
				item.style.fontSize = "18px";
				item.style.height = "23px";
			});
		}

	});
}