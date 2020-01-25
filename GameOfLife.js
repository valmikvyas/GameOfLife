class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }

  /**
   * Returns a 2D Array
   */

  makeBoard() {
    const newArray = [];
    for (let h = 0; h < this.height; h++) {
      const rows = [];

      for (let w = 0; w < this.width; w++) {
        rows.push(1);
        // We'll put the coordinates on the cell
        // Element itself (using dataset),
        // letting us fetch it in a click listener later.
      }
      newArray.push(rows);
    }
    // TODO: Create and return an 2D Array
    // with `this.heigh` as rows and `this.width` as cols.
    // For example, given a height of 4 and a width of 3, it will generate:
    // [
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    // ]
    return newArray;
  }

  coordinateValidator(row, col) {
    return (
      row >= 0 && col >= 0 && row <= this.width - 1 && col <= this.height - 1
    );
  }

  /**
   * Returns the cell value for the given row and col coordinates.
   */

  getCell(row, col) {
    if (this.coordinateValidator(row, col)) return  this.board[row][col]
   
  }

  /**
   * Sets a new value for a cell in the given row and col coordinates.
   */

  setCell(value, row, col) {
    if (this.coordinateValidator(row, col)) this.board[row][col] = value;
  }

  /**
   * toggle a cell value between dead and alive.
   */

  toggleCell(row, col) {
    if (this.coordinateValidator(row, col))
      return Number(!this.board[row][col]);
    // console.log(this.board[row][col]);
  }

  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, col) {
    // TODO: Return the count of living neighbors.
    let counter = 0;

    if (this.getCell(row - 1, col - 1) === 1) counter++;
    if (this.getCell(row - 1, col + 1) === 1) counter++;
    if (this.getCell(row - 1, col) === 1) counter++;
    if (this.getCell(row, col + 1) === 1) counter++;
    if (this.getCell(row + 1, col) === 1) counter++;
    if (this.getCell(row, col - 1) === 1) counter++;
    if (this.getCell(row + 1, col - 1) === 1) counter++;
    if (this.getCell(row + 1, col + 1) === 1) counter++;

    return counter;
  }

  /**
   * Given the present board, apply the rules to generate a new board
   */

  tick() {
    const newBoard = this.makeBoard();
    for (let rows = 0; rows < this.height; rows++) {
      for (let cells = 0; cells < this.width; cells++) {
        console.log(this.livingNeighbors(rows, cells));
        if (
          this.livingNeighbors(rows, cells) < 2 ||
          this.livingNeighbors(rows, cells) > 3
        )
          if (this.getCell(rows, cells) === 1) {
            newBoard[rows][cells] = this.toggleCell(rows, cells);
          }
      }
    }
    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board
    // (the next iteration of the game)
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors
    this.board = newBoard;
  }
}
