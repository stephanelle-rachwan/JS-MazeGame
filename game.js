// The game starts by hovering over S to call the 1st function: startGame
// We used window onload because the script is in the head section
window.onload = () => {
  document.getElementsByClassName('example')[0].innerHTML= "Your score: " + score;
  document.getElementById("start").addEventListener("mouseover", startGame);
  };

// setting up a timer

// timer variables 
var dSeconds = 0;
var lastCounter = 0;
var best = 99999;
var timerId = 0;

// formate time based on ds
function formatTime(ms) {
  var minutes = Math.floor((ms/600));
  var seconds = Math.floor((ms - (minutes * 600))/10);
  var ds = Math.floor(ms - (minutes * 600) - (seconds*10));
  return minutes+':'+seconds+'.'+ds;
}

// start counter fct
function startCounter() {
    dSeconds += 1;
    document.getElementById("live-score").innerText = formatTime(dSeconds);
}

// stop counter fct 
function stopCounterWon() {
  lastCounter = dSeconds;
  document.getElementById("last-score").innerText = formatTime(dSeconds);

  if ( lastCounter < best) {
    document.getElementById("best-score").innerText = formatTime(lastCounter);
    best = lastCounter;
  }

  dSeconds = 0;
  clearInterval(timerId);
}

function stopCounterLose() {
  dSeconds = 0;
  document.getElementById("live-score").innerText = formatTime(dSeconds);
  clearInterval(timerId);
}


const boundaries = document.getElementsByClassName("boundary");
var score = 0;

// We will have 5 functions related to the major features
// Function that starts the game and calls other functions based on specific events
function startGame() {
  timerId = setInterval(startCounter, 100);

  document.getElementById("end").addEventListener("mouseover", winGame)
  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].addEventListener("mouseover", loseGame)
  }
  // removes the boundaries color after hovering over S
  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].classList.remove("youlose");
  }
  document.getElementById("status").innerHTML = "GAME STARTED: DO NOT TOUCH THE BOUNDARIES | DESTINATION: E";
  document.getElementById("start").addEventListener("click", resetScore);
  document.getElementById("game").addEventListener("mouseleave", cheatGame);
}

// The win game function that gets executed upon hovering on E
function winGame() {
  document.getElementById("status").innerHTML = "You Won!! you get a +5! :)";
  // doesn't let the boundaries coloring action execute from E to boundaries
  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].removeEventListener("mouseover", loseGame)
  }
  document.getElementById("game").removeEventListener("mouseleave", cheatGame);
  score += 5;
  document.getElementById("end").removeEventListener("mouseover", winGame);
  document.getElementsByClassName('example')[0].innerHTML= "Your score: " + score;

  stopCounterWon();
}

// The lose game function that gets executed upon crossing of the boundaries
function loseGame() {
  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].classList.add("youlose");
  }
  document.getElementById("status").innerHTML = "You Lost!! You get a -10! :(";
  // so the winGame fct doesn't execute directly after touching the boundaries then E
  document.getElementById("end").removeEventListener("mouseover", winGame);
  document.getElementById("game").removeEventListener("mouseleave", cheatGame);
  score -= 10;
  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].removeEventListener("mouseover", loseGame)
  }
  document.getElementsByClassName('example')[0].innerHTML= "Your score: " + score;

  stopCounterLose();
}

// The cheat game function that gets executed if we try to bypass S from the right
// aka leaving the id="game" div that contains the box
function cheatGame() {
  document.getElementById("status").innerHTML = "RESTART ya cheater";
  alert("cheater ;)");
  document.getElementById("game").removeEventListener("mouseleave", cheatGame);
  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].removeEventListener("mouseover", loseGame)
  }
  document.getElementById("end").removeEventListener("mouseover", winGame);

  stopCounterLose();
}

// the reset score function, gets executed upon clicking S; resets the score to 0 
function resetScore() {
  document.getElementById("status").innerHTML = "SCORE RESET | Restart: Get to the E without touching the boundaries";
  score = 0;
  document.getElementsByClassName('example')[0].innerHTML= "Your score: " + score;

  dSeconds = 0;
  lastCounter = 0;
  best = 0;
  document.getElementById("live-score").innerText = formatTime(dSeconds);
  document.getElementById("last-score").innerText = formatTime(lastCounter);
  document.getElementById("best-score").innerText = formatTime(best);
}