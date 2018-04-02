import Board from "./board.js";

class Game {
  constructor() {
    this.board = new Board();
    this.selected = null;
    this.setListeners();
    this.mapGrid();
  }

  setListeners() {
    $r(".add-num").on("click", e => {
      const node = $r(`.${this.selected}`);
      node.removeClass("selected");
      node.html(e.currentTarget.value);
      this.board.grid[this.selected[2]][this.selected[0]] =
        e.currentTarget.value;
      this.selected = null;
    });

    $r(".cell").on("click", e => {
      e.currentTarget.addClass("selected");
      this.selected = e.currentTarget.value;
    });

    $r(".clear").on("click", e => {
      this.board.resetGrid();
      this.mapGrid();
    });

    $r(".check").on("click", e => {
      const $solved = $r(".solved-status");
      if (this.board.solved()) {
        $solved.html("You Solved it!");
      } else {
        $solved.html("Not Yet Solved");
      }
    });
  }

  mapGrid() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        $r(`.${row},${col} `).html(`${this.board.grid[row][col]}`);
      }
    }
  }
}

export default Game;
