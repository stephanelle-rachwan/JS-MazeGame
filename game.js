// The game starts by hovering over S to call the 1st function: startGame
// We used window onload because the script is in the head section
window.onload = () => {
  document.getElementById("start").addEventListener("mouseover", startGame);
  };

// We will have 5 functions related to the major features
// Function that starts the game and calls other functions based on specific events
function startGame() {
  document.getElementById("end").addEventListener("mouseover", winGame)
  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].addEventListener("mouseover", loseGame)
  }
  document.getElementById("status").innerHTML = "GAME STARTED: DO NOT TOUCH THE BOUNDARIES | DESTINATION: E";

}

// The win game function that gets executed upon hovering on E
function winGame() {
  document.getElementById("status").innerHTML = "You Won!! you get a +5! :)";

}

// The lose game function that gets executed upon crossing of the boundaries
function loseGame() {
  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].classList.add("youlose");
  }
  document.getElementById("status").innerHTML = "You Lost!! You get a -10! :(";
}

function cheatGame() {

}

function resetScore() {

}