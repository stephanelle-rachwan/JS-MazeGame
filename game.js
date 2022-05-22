// The game starts by hovering over S to call the 1st function: startGame
// We used window onload because the script is in the head section
window.onload = () => {
  document.getElementById("start").addEventListener("mouseover", startGame);
  };

// We will have 5 functions related to the major features
// Function that starts the game and calls other functions based on specific events
function startGame() {
  document.getElementById("end").addEventListener("mouseover", winGame)
  document.getElementById("status").innerHTML = "GAME STARTED: DO NOT TOUCH THE BOUNDARIES | DESTINATION: E";

}

// The win game function that gets executed upon hovering on E
function winGame() {
  document.getElementById("status").innerHTML = "You Won!! you get a +5! :)";

}

function loseGame() {

}

function cheatGame() {

}

function resetScore() {

}