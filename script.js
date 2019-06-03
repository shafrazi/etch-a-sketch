const container = document.querySelector(".container");
const button = document.querySelector("#btnSquares");
const text = document.querySelector("#squareNo");

button.addEventListener("click", function() {
  container.innerHTML = "";
  let squareNo = parseInt(text.value);
  let squareWidth = `${(800 / squareNo) - 1}px`;
  for (let i = 0; i < squareNo; i++) {
    const row = document.createElement("div");
    row.className = "row";
    container.append(row);
    for (let j =0; j < squareNo; j++) {
      const square = document.createElement("div");
      square.className = "square";
      square.style.width = squareWidth;
      square.style.height = squareWidth;
      row.append(square);
    }
  }
  text.value = "";

  const squares = document.querySelectorAll(".square");

  for (let i =0; i < squares.length; i++) {
    let square = squares[i];
    square.addEventListener("mouseover", function() {
      square.style.backgroundColor = `rgb(${randomColorCode()}, ${randomColorCode()}, ${randomColorCode()})`;
    })
  }
})

function randomColorCode() {
  let randomCode = parseInt(Math.random() * 256) + 1;
  return randomCode;
};
