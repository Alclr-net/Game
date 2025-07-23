const windowGIF =  document.getElementById("win-gif");
const cells = document.getElementsByClassName("cell");
const grid = document.getElementsByClassName("grid");
grid[0].style.display = "none";
const moveC = document.getElementById("correctMove");
const moveW = document.getElementById("wrongMove");
const Win = document.getElementById("winMusic");
const timer = document.getElementsByClassName("timer");
let value = parseInt(timer[0].textContent);
let gameStarted = false;
const btn = document.getElementsByClassName("start");
btn[0].addEventListener("click", () => {
  if (value > 0) {
    grid[0].style.display = "";
    gameStarted = true;
    const intervalId = setInterval(() => {
      value--;
      timer[0].textContent = value;

      if (value === 0) {
        clearInterval(intervalId);
        window.location.reload();
      }
    }, 1000);
  }
});

const walls = [5, 13, 10, 8, 7, 18, 21, 25, 28, 29, 32, 30];
for (c of walls) {
  cells[c].textContent = "🧱";
}
cells[35].textContent = "🏠";
let userSum = 0;

if (userSum > 0 && userSum < 36) {
  userSum = 0;
  cells[userSum].textContent = "😫";
}

window.addEventListener("keydown", (e) => {
  if (!gameStarted) return;
  cells[userSum].style.backgroundColor = "#B6B09F";
  cells[userSum].textContent = "";

  switch (e.key) {
    case "ArrowRight":
      userSum++;
      break;
    case "ArrowDown":
      userSum += 6;
      break;
    case "ArrowLeft":
      userSum--;
      break;
    case "ArrowUp":
      userSum -= 6;
      break;
    default:
  }
  if (walls.includes(userSum)) {
    moveW.play();
    userSum = 0;
  } else {
    moveC.play();
  }
  if (userSum < 0 || userSum > 35) {
    userSum = 0;
  }
  if (userSum === 35) {
    Win.play();
    grid[0].remove();
  windowGIF.style.backgroundImage = 'url("/party.gif" )' 
  }

  cells[userSum].style.backgroundColor = "grey";
  cells[userSum].textContent = "😊";
});
