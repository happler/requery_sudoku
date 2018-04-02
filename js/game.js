import Board from "./board.js";

class Game {
  constructor() {
    this.board = new Board();
    this.selected = null;
    this.setListeners();
    this.mapGrid();
    // this.mapGrid.bind(this);
  }

  setListeners() {
    $r(".add-num").on("click", e => {
      const node = $r(`.${this.selected}`);
      node.removeClass("selected");
      debugger;
      node.html(e.target.value);
      this.board.grid[this.selected[7]][this.selected[5]] = e.target.value;
      this.selected = null;
    });

    $r(".cell").on("click", e => {
      debugger;
      if (
        $r(e.currentTarget)
          .attr("class")
          .split(" ")
          .indexOf("fixed") === -1
      ) {
        if (this.selected) {
          $r(`.${this.selected}`).removeClass("selected");
        }
        $r(e.currentTarget).addClass("selected");
        this.selected = e.currentTarget.attributes.value.value;
      }
    });

    $r(".clear").on("click", e => {
      this.board.resetGrid();
      this.mapGrid();
    });

    $r(".check").on("click", e => {
      debugger;
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
        const cellFillValue = this.board.grid[row][col];
        const $cellToFill = $r(`.cell-${row}-${col}`);
        if (cellFillValue !== "") {
          $cellToFill.addClass("fixed");
        } else {
          $cellToFill.addClass("mutable");
        }
        $cellToFill.html(`${cellFillValue}`);
      }
    }
  }
}

export default Game;
