var coins = 0;
var cursors = 0;

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
