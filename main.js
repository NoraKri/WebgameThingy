var Game = {};

var coins = 0;
var arrows = 0;
var enemyHealth = 20;
const enemies = [];
var enemyCounter = 0;

const gameWindow = document.getElementById("backgroundLeftCanvas");
const c = gameWindow.getContext("2d");

gameWindow.width = 720;
gameWindow.height = 920;

// Spawn an enemy every x seconds, with x amount of health.
window.setInterval(function () {
  spawnEnemy(enemyHealth);
}, 5000);

// Create an enemy element inside the enemies div, set its ID to the amount of enemies spawned
function spawnEnemy(health) {
  enemyCounter++;
  const enemy = { health: health, name: "Goblin no " + enemyCounter };
  enemies.push(enemy);
  updateEnemyList();
}

// Attack enemy with x amount of damage, if enemy has 0 or less health, delete the entity and give x amount of coins to the player
function attackEnemy(number) {
  const target = enemies[0];
  target.health -= number;
  if (target.health <= 0) {
    getCoin(2);
    enemies.shift();
  }
  updateEnemyList();
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

function updateEnemyList() {
  var html = enemies
    .map(function (element) {
      return (
        "<li>" + element.name + ", " + element.health + " health" + "</li>"
      );
    })
    .join("");

  document.getElementById("enemies").innerHTML = html;
}

// Game loop
window.setInterval(function () {
  //Everything in here happens once a second
  attackEnemy(arrows);
}, 1000);
