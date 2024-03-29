var player1Name = prompt("What is player 1's name ?");
var player2Name = prompt("What is player 2's name ?");

var player1Score = 0;
var player2Score = 0;

var score1 = document.querySelector(".score1");
var score2 = document.querySelector(".score2");

score1.textContent = `Score: ${player1Score}`;
score2.textContent = `Score: ${player2Score}`;

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
  retryButton.style.opacity = 0;
  setTimeout(function () {
    retryButton.style.opacity = 1;
  }, 100);
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

  if (randomIndex1 > randomIndex2) {
    heading.textContent = `${player1Name} wins`;
    player1Score++;
    score1.textContent = `Score: ${player1Score}`;
  } else if (randomIndex2 > randomIndex1) {
    heading.textContent = `${player2Name} wins`;
    player2Score++;
    score2.textContent = `Score: ${player2Score}`;
  } else heading.textContent = "It's a draw";
}
