const container = document.querySelector(".container");
const button = document.querySelector("#btnSquares");
const text = document.querySelector("#squareNo");


button.addEventListener("click", function() {
  container.innerHTML = "";
  let squareWidth = `${(800 / parseInt(text.value)) - 1}px`;
  for (let i = 0; i < parseInt(text.value); i++) {
    const row = document.createElement("div");
    row.className = "row";
    container.append(row);
    for (let j =0; j < parseInt(text.value); j++) {
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
      square.classList.add("hover");
    })
  }
})
