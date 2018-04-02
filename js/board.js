import { isEqual } from "lodash";

class Board {
  constructor() {
    this.grid = this.grid();
  }

  grid() {
    return [
      [null, null, null, null, null, null, null, null, 3],
      [null, 5, 8, 6, null, null, null, null, 2],
      [null, null, 4, null, 7, null, null, null, null],
      [null, null, null, null, 5, 8, 6, null, 1],
      [null, null, null, 4, null, 9, null, null, null],
      [4, null, 2, 7, 3, null, null, null, null],
      [null, null, null, null, 8, null, 9, null, null],
      [6, null, null, null, null, 3, 8, 7, null],
      [7, null, null, null, null, null, null, null, null]
    ];
  }

  resetGrid() {
    this.grid = this.grid();
  }
  answer() {
    return [
      [1, 7, 6, 8, 9, 2, 4, 5, 3],
      [3, 5, 8, 6, 1, 4, 7, 9, 2],
      [2, 9, 4, 3, 7, 5, 1, 6, 8],
      [9, 3, 7, 2, 5, 8, 6, 4, 1],
      [8, 1, 5, 4, 6, 9, 2, 3, 7],
      [4, 6, 2, 7, 3, 1, 5, 8, 9],
      [5, 4, 3, 1, 8, 7, 9, 2, 6],
      [6, 2, 1, 9, 4, 3, 8, 7, 5],
      [7, 8, 9, 5, 2, 6, 3, 1, 4]
    ];
  }

  solved() {
    return isEqual(this.grid, this.answer());
  }
}

export default Board;
