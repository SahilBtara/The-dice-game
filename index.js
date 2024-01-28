var dices = [
  "resources/dices/dice-six-faces-one.png",
  "resources/dices/dice-six-faces-two.png",
  "resources/dices/dice-six-faces-three.png",
  "resources/dices/dice-six-faces-four.png",
  "resources/dices/dice-six-faces-five.png",
  "resources/dices/dice-six-faces-six.png",
];
var randomIndex1 = Math.floor(Math.random() * dices.length);
var randomIndex2 = Math.floor(Math.random() * dices.length);

var dice1 = document.querySelector(".dice1");
var dice2 = document.querySelector(".dice2");

dice1.setAttribute("src", dices[randomIndex1]);
dice2.setAttribute("src", dices[randomIndex2]);

var heading = document.querySelector(".heading");

if (randomIndex1 > randomIndex2) heading.textContent = "Player 1 wins";
else if (randomIndex2 > randomIndex1) heading.textContent = "Player 2 wins";
else heading.textContent = "It's a draw";
