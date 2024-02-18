const startInterface = document.getElementById("startInterface");
const playingField = document.getElementById("playingField");
const scoreBoard = document.getElementById("scoreBoard");
const Life = document.getElementById("life");
const Score = document.getElementById("score");
const displayLetter = document.getElementById("display");
let SubTotalScore = document.getElementById("SubTotalScore");

function hideElement(elementId) {
  document.getElementById(elementId).classList.add("hidden");
}

function showElement(elementId) {
  document.getElementById(elementId).classList.remove("hidden");
}

function setBackground(keyId) {
  document.getElementById(keyId).classList.add("bg-orange-500", "text-white");
}
function removeBackground(keyId) {
  document
    .getElementById(keyId)
    .classList.remove("bg-orange-500", "text-white");
}

// starting the game with clear data:
function startGame() {
  Life.innerText = 5;
  Score.innerText = 0;
  hideElement("startInterface");
  showElement("playingField");
  hideElement("scoreBoard");
  // set the first Letter in display
  displayLetter.innerText = generateLetter().toUpperCase();
  setBackground(displayLetter.innerText.toLowerCase());
}

// end the game and display scoreboad interface
function endGame() {
  // clear the previous highlighted key when the game over
  removeBackground(displayLetter.innerText.toLocaleLowerCase());
  hideElement("startInterface");
  hideElement("playingField");
  showElement("scoreBoard");
}

// get the random Letter
function generateLetter() {
  const Letters = "asdfglkjhzxcvmnbqwertpoiuy";
  const index = Math.round(Math.random() * 26);
  return Letters[index];
}

// get the typed/pressed key
function pressedKeyValue(pressedKey) {
  if (displayLetter.innerText == pressedKey.toUpperCase()) {
    // remove hightlight the already checked letter
    removeBackground(pressedKey);
    displayLetter.innerText = generateLetter().toUpperCase();
    Score.innerText = parseInt(Score.innerText) + 1;

    // hightlight the new matched key
    setBackground(displayLetter.innerText.toLowerCase());
  } else {
    Life.innerText = parseInt(Life.innerText) - 1;
    if (Life.innerText == 0) {
      // set the SubTotal Score in scoreboard
      SubTotalScore.innerText = Score.innerText;
      endGame();
    }
  }
}

// press keys by keyboard typing
document.addEventListener("keyup", function (e) {
  if (e.key == "Escape") {
    endGame();
    // set the SubTotal Score in scoreboard
    SubTotalScore.innerText = Score.innerText;
  }
  // check the keys are small letters
  else if ((e.key = /^[a-z]+$/.test(e.key))) {
    pressedKeyValue(e.key);
  } else if (e.key == "CapsLock") {
    alert("you are pressed on CapsLock");
  }
});
