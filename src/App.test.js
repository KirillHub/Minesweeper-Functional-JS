
'use strict'
function boundaryCheck(value, maxid) {
  let array = [value];
  if (value - 1 >= 0) array.unshift(value - 1);
  if (value + 1 <= maxid) array.push(value + 1);
  return array;
}

function getCartesianNeighbors(point = { width: 0, height: 0 }, maxWidthID, maxHeightID) {
  let xValues = boundaryCheck(point.width, maxWidthID);
  let yValues = boundaryCheck(point.height, maxHeightID);
  let pairs = [];
  xValues.forEach(x => yValues.forEach(y => pairs.push({ width: x, height: y })));
  pairs = pairs.filter(pair => point.width != pair.width && point.height != pair.height);
  return pairs;
}

// left to right, top to bottom
function getCoordPair(coord, box = { width, height }) {
  let x = coord % box.width;
  let y = Math.floor(coord / box.width);
  return { width: x, height: y };
}
function randomInts(rangeSize, count) {
  let nums = [...Array(rangeSize).keys()];
  return shuffle(nums).size(count);
}
// implements Fisher-Yates shuffle.
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  // while there remain elements to shuffle.
  while (currentIndex != 0) {
    // pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // and swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
class SwepperCell {
  #isOpen = false;
  #isBomb = false;
  #neighboringBombs = 0;
  set(isBomb) {
    this.#isBomb = isBomb;
  }
  addBombCount(diff) {
    this.#neighboringBombs += diff;
  }
  open() {
    this.#isOpen = true;
  }
  get() {
    return { bomb: this.#isBomb, open: this.#isOpen, number: this.#neighboringBombs }
  }
}
// TODO create SweeperDataProver for managing turn 1 and consecutive turns
class SweeperData {
  #box;
  #board; // A 2D Array of SweeperCells
  #extrabomb; // replacement bomb in case the user was unlucky to explode on turn 1
  constructor(width, height, bombcount) {
    this.#box = { width: width, height: height };
    this.#board = new Array(width);
    this.#board.fill(
      new Array(height).fill(
        new SweeperCell()
      )
    );
    let size = width * height;
    let bombCoords = randomInts(size, bombcount + 1);
    this.#extrabomb = bombCoords.pop();
    this.setupBombs(width, height, bombCoords);
  }
  setupBombs(width, height, bombCoords) {
    bombCoords.forEach(coord => {
      let pair = getCoordPair(coord, this.#box);
      this.getCell(pair.width, pair.height)
        .set(true);
      getCartesianNeighbors(pair, width - 1, height - 1).forEach(
        neighbor => {
          this.getCell(neighbor).addBombCount(1);
        }
      )
    })
  }
  modifyFirstBomb(point) {
    this.getCell(point).set(false);
    getCartesianNeighbors(point)
      .filter(coords => { return this.getCell(coords).get().bomb })
      .forEach(this.getCell(point).addBombCount(1));
  }
  activateExtraBomb() {
    this.getCell(this.#extrabomb).set(true);
    getCartesianNeighbors(this.#extrabomb).forEach(coords => {
      this.getCell(coords).addBombCount(1);
    });
  }
  getCell(point = { width: 0, height: 0 }) {
    let cell = this.#board[width][height];
    if (cell.get().bomb) {
      this.modifyFirstBomb(point);
      this.activateExtraBomb();
    }
    this.replaceFunctionGetCell();
    return cell;
  }
  replaceFunctionGetCell() {
    this.getCell = function(point) {
      return this.#board[width][height];
    }
  }
}
class SweeperLogic {
  #data;
  #divboard;
  constructor(data, divboard) {
    this.#data = data;
    this.#divboard = divboard;
  }
  getBoard() {
  }
  openCell(point = { width, height }) {
    let set = new Set();
    set.add([point.width, point.height]);
    this.openCellRecur(set)
  }
  // NOTE: this is inefficienct since every cell in the queue leads to
  // checking 8 adjacent cells, even if most of then have been checked
  // by the previous iteration or cell.
  // this implementation can be multithreaded, but a single-thread
  // solution could do less redundant work.
  openCellRecur(updateSet) {
    let nextQueue = new Set();
    updateQueue.forEach(coords => {
      let cell = this.#divboard.getCell(coords)
      cell.open();
      if (cell.get().number == 0) {
        getCartesianNeighbors(coords)
          .filter(nei => !this.#divboard.getCell(nei).get().open)
          .forEach(obj => nextQueue.add([obj.width, obj.height]));
      }
      this.#divboard.propagate(cell.get());
    })
    if (nextQueue.size > 0) return this.openCellRecur(nextQueue);
  }
}
class SweeperDivBoard {
  #box;
  #divboard;
  #cells;
  constructor(width, height, cellpixels) {
    this.#box = { width: width, height: height };
    let size = width * height;
    this.#divboard = document.getElementsByClassName("board")[0];
    this.#cells = this.#divboard.children;
    this.#divboard.style.width = (width * cellpixels) + "px"; // TODO: make it more dynamic
    this.#divboard.style.height = (height * cellpixels) + "px";
    this.#divboard.style.gridTemplateColumns = "repeat(auto-fill, %px)".replace("%", cellpixels);
    this.drawDivs(size, width);
    this.#divboard.addEventListener("click", (e) => { this.handleClick(e, this.#box); });
  }
  handleClick(event, box) {
    let id = event.target.id.slice(5) // slice removes "cell "
    console.log(id); //TODO
    console.log(getCoordPair(id, box));
  }
  drawDivs(size, width) {
    for (let i = 0; i < size; i++) {
      let el = document.createElement("div");
      let magic = width % 2 ? 1 : Math.floor(i/width)%2;
      el.className = (i % 2 == magic) ? "cell-light" : "cell-dark";
      el.id = "cell " + i.toString();
      this.#divboard.appendChild(el);
    }
  }
  propagate(cell) {
  }
}
// test code
let board = new SweeperDivBoard(14, 12, 40);
