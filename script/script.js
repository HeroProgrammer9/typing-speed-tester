const startInterface = document.getElementById("startInterface");
const playingField = document.getElementById("playingField");
const scoreBoard = document.getElementById("scoreBoard");
const displayLetter = document.getElementById("display");

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
  hideElement("startInterface");
  showElement("playingField");
  hideElement("scoreBoard");
  // set the first Letter in display
  displayLetter.innerText = generateLetter().toUpperCase();
  setBackground(displayLetter.innerText.toLowerCase());
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
    removeBackground(displayLetter.innerText.toLowerCase());
    displayLetter.innerText = generateLetter().toUpperCase();

    // hightlight the new matched key
    setBackground(displayLetter.innerText.toLowerCase());
  }
}
