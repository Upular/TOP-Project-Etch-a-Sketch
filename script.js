const container = document.getElementById("container");

/**
 * @param {number} squaresPerSide
 */
function createGrid(squaresPerSide) {
  // @ts-ignore
  container.innerHTML = "";

  // @ts-ignore
  container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
  // @ts-ignore
  container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;

  const totalSquares = squaresPerSide * squaresPerSide;

  for (let i = 0; i < totalSquares; i++) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("square");

    newSquare.addEventListener("mouseover", () => {
      newSquare.classList.add("active");
    });

    // @ts-ignore
    container.appendChild(newSquare);
  }
}

createGrid(16);

const resetBtn = document.getElementById("reset-btn");
if (resetBtn !== null) {
  resetBtn.addEventListener("click", () => {
    location.reload();
  });
}

const promptBtn = document.getElementById("prompt-btn");
if (promptBtn !== null) {
  promptBtn.addEventListener("click", () => {
    let size = getPrompt();
    if (typeof size === "number") createGrid(size);
  });
}

function getPrompt() {
  let promptResult = prompt("choose a number up to 100");

  if (promptResult === null) return;
  // @ts-ignore
  let parsedResult = parseInt(promptResult);

  if (parsedResult <= 100) {
    return parsedResult;
  } else {
    return alert("The number you selected is invalid!");
  }
}
