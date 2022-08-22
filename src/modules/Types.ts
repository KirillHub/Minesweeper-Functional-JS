'use strict';


const field: any = document.querySelector('.field');
const flag: any = document.querySelector('.main-title__flags-counter');
const endGameText: any = document.querySelector('.end-game');

let cells: any = new Array();
const keysPairArray = new Array();
const keysUnpairArray = new Array();

let bombs: any;

/*
? later
let flagsCounter: number = BOMBS_COUNT;
flag.innerText = flagsCounter;
*/

let flagsLocationCoords: object = new Set();