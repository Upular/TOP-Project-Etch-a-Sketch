const container = document.getElementById("container");

for (let i = 0; i < 256; i++) {
  const newSquare = document.createElement("div");

  newSquare.classList.add("square");

  newSquare.addEventListener("mouseover", () => {
    newSquare.classList.add("active");
  });

  if (container !== null) {
    container.appendChild(newSquare);
  }
};

const resetBtn = document.getElementById("reset-btn");
if (resetBtn !== null) {
  resetBtn.addEventListener("click", () => {
    location.reload();
  });
};

const promptBtn = document.getElementById("prompt-btn");
if (promptBtn !== null) {
  promptBtn.addEventListener("click", () => {
    getPrompt();
  });
};

function getPrompt() {
  let promptResult = prompt("choose a number up to 100");

   if (promptResult === null) return;
  // @ts-ignore
  let parsedResult = parseInt(promptResult);

  if (parsedResult <= 100) {
    return parsedResult;
  } else {
    return "The number you selected is invalid";
  }
};
