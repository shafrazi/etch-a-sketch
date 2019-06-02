const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.className = "row";
  container.append(row);
  for (let j =0; j < 16; j++) {
    const square = document.createElement("div");
    square.className = "square";
    row.append(square);
  }
}

const squares = document.querySelectorAll(".square");

for (let i =0; i < squares.length; i++) {
  let square = squares[i];
  square.addEventListener("mouseover", function() {
    square.classList.add("hover");
  })
}
