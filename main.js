var Game = {};

var coins = 0;
var arrows = 0;
var enemyHealth = 20;
const gameWindow = document.getElementById("backgroundLeftCanvas");
const c = gameWindow.getContext("2d");

gameWindow.width = 720;
gameWindow.height = 920;

// Ha en enemy som et tekstelement paa skjermen, hver gang brukeren trykker paa attack, mister enemy liv, naar enemy doer, faa 2 coins.
function attackEnemy(number) {
  enemyHealth -= number;
  if (enemyHealth <= 0) {
    getCoin(2);
    enemyHealth = 20;
  }
  document.getElementById("enemy").innerHTML = enemyHealth;
}

// Get 2 coins when killing enemy
function getCoin(number) {
  coins += number;
  document.getElementById("coins").innerHTML = coins + " coins";
}

function buyArrow() {
  var arrowCost = Math.floor(10 * Math.pow(1.1, arrows));
  if (coins >= arrowCost) {
    arrows++;
    coins -= arrowCost;
    document.getElementById("arrow").innerHTML = arrows;
    document.getElementById("coins").innerHTML = coins;
  }
  var nextCost = Math.floor(10 * Math.pow(1.1, arrows));
  document.getElementById("arrowCost").innerHTML = arrowCost;
}

// Game loop
window.setInterval(function () {
  //Everything in here happens once a second
  attackEnemy(arrows);
}, 1000);
