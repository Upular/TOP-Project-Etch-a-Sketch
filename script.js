const container = document.getElementById("container");

for (let i = 0; i < 256; i++) {
  const newSquare = document.createElement("div");

  newSquare.classList.add("square");

  if (container !== null) {
    container.appendChild(newSquare);
  }
};
