'use strict'

/*
interface User {
	name: string;
	id: number;
 }
  
 class UserAccount {
	name: string;
	id: number;
  
	constructor(name: string, id: number) {
	  this.name = name;
	  this.id = id;
	}
 }
  
 const user: User = new UserAccount("Murphy", 1);
*/


interface Randomizer {
	minArrayIndex: number,
	maxArrayIndex: number
}

class RandomizeMines {
	minArrayIndex: number;
	maxArrayIndex: number;

	constructor(minArrayIndex: number, maxArrayIndex: number) {
		this.minArrayIndex = minArrayIndex;
		this.maxArrayIndex = maxArrayIndex;
	};

	get shuffleMethod() {
		this.minArrayIndex = Math.ceil(this.minArrayIndex);
		this.maxArrayIndex = Math.floor(this.maxArrayIndex);

		return Math.floor(Math.random() * (this.maxArrayIndex - this.minArrayIndex + 1) + this.minArrayIndex);
	}

}

export const randomizeMinesXY: Randomizer = new RandomizeMines(1, 100);

