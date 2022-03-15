const colorPicker_input = document.querySelector("#colorPicker");
const btns = document.querySelectorAll(".btn");
const brush_btn = document.querySelector("#brushBtn");
const rgb_btn = document.querySelector("#rgnBtn");
const eraser_btn = document.querySelector("#eraserBtn");
const clear_btn = document.querySelector("#clearBtn");
const sizeValue_div = document.querySelector("#sizeValue");
const sizeSlider_input = document.querySelector("#sizeSlider");
const board = document.querySelector("#grid");

colorPicker_input.onchange = (e) => setCurrentColor(e.target.value);
sizeSlider_input.onchange = (e) => changeSize(e.target.value);
sizeSlider_input.onmousemove = (e) => updateSizeLabel(e.target.value);
eraser_btn.addEventListener("click", setCurrentColor("white"));
clear_btn.addEventListener("click", clearBoard);

let DEFAULT_SIZE = 16;
let DEFAULT_COLOR = "black";

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

function setCurrentSize(newSize) {
  currentSize = newSize;
}

function setCurrentColor(newColor) {
  currentColor = newColor;
}

function clearBoard() {
  clearGrid();
}

function changeSize(sizeChoice) {
  setCurrentSize(sizeChoice);
  updateSizeLabel(sizeChoice);
  clearGrid();
}

function updateSizeLabel(size) {
  sizeValue_div.innerHTML = `${size} x ${size}`;
}

function clearGrid(size) {
  board.innerHTML = "";
  createBoard(currentSize);
}

function changeColor() {
  this.style.backgroundColor = color;
}

function setCurrentColor(colorChoice) {
  color = colorChoice;
}

function createBoard(size) {
  board.style.gridTemplateColumns = `repeat(${size}, 1fr`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let gridSize = size * size;
  for (let i = 0; i < gridSize; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", changeColor);
    square.addEventListener("mousedown", changeColor);
    board.insertAdjacentElement("beforeend", square);
  }
}

window.onload = () => {
  setupGrid(DEFAULT_SIZE);
};
