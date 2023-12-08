let homeScore = document.getElementById("score1");
let guestScore = document.getElementById("score2");
let homeSum = 0;
let guestSum = 0;

function homep1() {
  homeSum += 1;
  homeScore.textContent = homeSum;
}

function homep2() {
  homeSum += 2;
  homeScore.textContent = homeSum;
}

function homep3() {
  homeSum += 3;
  homeScore.textContent = homeSum;
}

function guestp1() {
  guestSum += 1;
  guestScore.textContent = guestSum;
}
function guestp2() {
  guestSum += 2;
  guestScore.textContent = guestSum;
}

function guestp3() {
  guestSum += 3;
  guestScore.textContent = guestSum;
}

function restart() {
  homeScore.textContent = 0;
  homeSum = 0;
  guestScore.textContent = 0;
  guestSum = 0;
}
