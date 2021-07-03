function setBoard(size) {
  modifyGridContainer(size);
  setGrids(size);
  hoverEffect();
}

function modifyGridContainer(size) {
  let container = document.querySelector("#grid-container");
  container.setAttribute("style", 
    `grid-template-columns: repeat(${size},1fr); 
    grid-template-rows: repeat(${size},1fr);`
  );
}

function setGrids(size) {
  // setting up init grids
  for (let i = 0; i < size ** 2; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    document.querySelector("#grid-container").appendChild(grid);
  }
}

function hoverEffect() {
  // hover effects on grid
  const grids = document.querySelectorAll(".grid");
  grids.forEach(grid => {
    grid.addEventListener("mouseenter", paintGrid)
  })
}

function paintGrid(e) {
  e.target.style.backgroundColor = "black";
}

function resetGrid(){
  size = promptSize();
  removeOldGrid();
  setBoard(size);
}

function promptSize() {
  do {
    size = prompt("what is the new size of the grid?", "16");
  } while (!size || size > 100 ||/[A-Za-z]/i.test(size) === true)
  return Math.floor(size);
}

function removeOldGrid() {
  document.querySelector("#grid-container").innerHTML = "";
}

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetGrid);

setBoard(16);