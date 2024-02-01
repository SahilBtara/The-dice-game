var player1Name = prompt("What is player 1's name ?");
var player2Name = prompt("What is player 2's name ?");

document.querySelector(".player1Dice h2").textContent = player1Name;
document.querySelector(".player2Dice h2").textContent = player2Name;

var retryButton = document.querySelector(".retry-btn");

var dices = [
  "resources/dices/dice-six-faces-one.png",
  "resources/dices/dice-six-faces-two.png",
  "resources/dices/dice-six-faces-three.png",
  "resources/dices/dice-six-faces-four.png",
  "resources/dices/dice-six-faces-five.png",
  "resources/dices/dice-six-faces-six.png",
];
rollTheDice();
retryButton.addEventListener("click", () => {
  rollTheDice();
});

function rollTheDice() {
  var randomIndex1 = Math.floor(Math.random() * dices.length);
  var randomIndex2 = Math.floor(Math.random() * dices.length);

  var dice1 = document.querySelector(".dice1");
  var dice2 = document.querySelector(".dice2");

  dice1.setAttribute("src", dices[randomIndex1]);
  dice2.setAttribute("src", dices[randomIndex2]);

  var heading = document.querySelector(".heading");

  if (randomIndex1 > randomIndex2) heading.textContent = `${player1Name} wins`;
  else if (randomIndex2 > randomIndex1)
    heading.textContent = `${player2Name} wins`;
  else heading.textContent = "It's a draw";
}
