'use strict'

export default function hoverEffectClassListStyle(target) {
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

