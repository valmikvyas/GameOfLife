const width = 25;
const height = 20; // width and height dimensions of the board

/**
 * Create a Game of Life instance
 */

const gol = new GameOfLife(width, height);

console.log(gol.makeBoard());
// console.log(gol.getCell(1,0))
// console.log(gol.setCell(0,1,0))
// console.log(gol.getCell(1,0))
// console.log(gol.toggleCell(1,0))
// console.log(gol.getCell(1,0))
// console.log(gol.livingNeighbors(6,6))
console.log(gol.tick());

/**
 * create a table and append to the DOM
 */

// Actual table cells
const tds = [];

// <table> element
const table = document.createElement("tbody");
// build a table row <tr>
for (let h = 0; h < height; h++) {
  const tr = document.createElement("tr");
  // build a table column <td>
  for (let w = 0; w < width; w++) {
    const td = document.createElement("td");
    // We'll put the coordinates on the cell
    // Element itself (using dataset),
    // letting us fetch it in a click listener later.
    td.dataset.row = h;
    td.dataset.col = w;
    tds.push(td);
    tr.append(td);
  }
  table.append(tr);
}

document.getElementById("board").append(table);

/**
 * Draws every cell from the gol instance into an actual, visible DOM element
 */

const paint = () => {
  gol.iterate((i,j) => {
    const value = gol.board[i][j];
    const cell = table.children[i].children[j];
    console.log(cell);
  })
}

  // TODO:
  //   1. For each <td> in the table:
  //     a. If its corresponding cell in gol instance is alive,
  //        give the <td> the `alive` CSS class.
  //     b. Otherwise, remove the `alive` class.
  //
  // To find all the <td>s in the table, you might query the DOM for them, or you
  // could choose to collect them when we create them in createTable.
  //
  // HINT:
  //   https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  //   https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName
// };

/**
 * Event Listeners
 */

document.getElementById("board").addEventListener("click", event => {
  const cell = event.target
  const row = cell.parentNode;
  const table = row.parentNode;
  const cellIndex = [...row.children].indexOf(cell);
  const rowIndex = [...table.children].indexOf(row);
  gol.board[rowIndex][cellIndex] = !gol.board[rowIndex][cellIndex];
  paint();

  // TODO: Toggle clicked cell (event.target) and paint
});

document.getElementById("step_btn").addEventListener("click", event => {
  // TODO: Do one gol tick and paint
});

document.getElementById("play_btn").addEventListener("click", event => {
  // TODO: Start playing by calling `tick` and paint
  // repeatedly every fixed time interval.
  // HINT:
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
});

document.getElementById("random_btn").addEventListener("click", event => {
  // TODO: Randomize the board and paint

  gol.randomize();
  

});

document.getElementById("clear_btn").addEventListener("click", event => {
  // TODO: Clear the board and paint
});
