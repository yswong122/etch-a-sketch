function paintGrid(e) {
  e.target.style.backgroundColor = "black";
}

// setting up init grids
for (let i = 0; i < 16 * 16; i++) {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  document.querySelector("#grid-container").appendChild(grid);
}

// hover effects on grid
const grids = document.querySelectorAll(".grid");
grids.forEach(grid => {
  grid.addEventListener("mouseenter", paintGrid)
})