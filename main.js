var Game = {};

var coins = 0;
var cursors = 0;
const gameWindow = document.getElementById("backgroundLeftCanvas");
const c = gameWindow.getContext("2d");

gameWindow.width = 720;
gameWindow.height = 920;

c.fillStyle = "green";
c.fillRect(0, 0, gameWindow.width, gameWindow.height);

// Enemy spawning
// Find the middle of the map (where the tower is)
// Tower is located in the towerAnchor div.
c.fillStyle = "red";
c.fillRect(100, 200, 64, 64);

function animateEnemy() {
  requestAnimationFrame(animateEnemy);
}

animateEnemy();

function getCoin(number) {
  coins += number;
  document.getElementById("coins").innerHTML = coins + " coins";
}

function buyCursor() {
  var cursorCost = Math.floor(10 * Math.pow(1.1, cursors));
  if (coins >= cursorCost) {
    cursors++;
    coins -= cursorCost;
    document.getElementById("cursors").innerHTML = cursors;
    document.getElementById("coins").innerHTML = coins;
  }
  var nextCost = Math.floor(10 * Math.pow(1.1, cursors));
  document.getElementById("cursorCost").innerHTML = cursorCost;
}

// Game loop
window.setInterval(function () {
  //Everything in here happens once a second
  getCoin(cursors);
}, 1000);
