var coins = 0;

function getCoin(number) {
  coins += number;
  document.getElementById("coins").innerHTML = coins;
}
