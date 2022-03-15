const colorPicker_input = document.querySelector("#colorPicker");
const btns = document.querySelectorAll(".btn");
const brush_btn = document.querySelector("#brushBtn");
const rgb_btn = document.querySelector("#rgnBtn");
const eraser_btn = document.querySelector("#eraserBtn");
const clear_btn = document.querySelector("#clearBtn");
const sizeValue_div = document.querySelector("#sizeValue");
const sizeSlider_input = document.querySelector("#sizeSlider");
const board = document.querySelector("#grid");

let mouseover = false;
colorPicker_input.onchange = (e) => setCurrentColor(e.target.value);
sizeSlider_input.onchange = (e) => changeSize(e.target.value);

function createBoard(size) {
  board.style.gridTemplateColumns = `repeat(${size}, 1fr`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let gridSize = size * size;
  for (let i = 0; i < gridSize; i++) {
    let square = document.createElement("div");

    square.addEventListener("mouseover", currentColor);
    board.insertAdjacentElement("beforeend", square);
  }
}

function currentColor() {
  this.style.backgroundColor = color;
}

function setCurrentColor(colorChoice) {
  color = colorChoice;
}

function changeSize(sizeChoice) {
  updateSizeLabel(sizeChoice);
  updateSizeValue(sizeChoice);
}
