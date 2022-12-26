let playerHand = [];
let dealerHand = [];
let firstTimeCards = [];
let playerHandScore = 0;
let dealerHandScore = 0;

function startGame() {
  drawOneCard(playerHand);
  drawOneCard(playerHand);
  let playerScore = calculateHandScore(playerHandScore, playerHand);
  console.log(`Starting Player cards = ${playerHand}  score = ${playerScore}`);
  drawOneCard(dealerHand);
  drawOneCard(dealerHand);

  let dealerScore = calculateHandScore(dealerHandScore, dealerHand);
  console.log(`Starting Dealer cards = ${dealerHand}  score = ${dealerScore}`);
}

startGame();
function drawOneCard(e) {
  for (let i = 0; i < 1; i++) {
    const cards = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
    const suit = ["Spades", "Hearts", "Diamonds", "Clubs"];
    let randomCard = cards[Math.floor(Math.random() * cards.length)];

    let randomSuit = suit[Math.floor(Math.random() * suit.length)];

    firstTimeCards.push(" " + randomCard + " Of " + randomSuit);
    if (checkIfArrayIsUnique(firstTimeCards)) {
      e.push(" " + randomCard + " Of " + randomSuit);
    } else if (firstTimeCards.length == 3) {
      firstTimeCards.pop();
      drawOneCard(e);
    }
  }
}

function checkIfArrayIsUnique(myArray) {
  return myArray.length === new Set(myArray).size;
}

/////calculate score of hand

function calculateHandScore(score, whosHand) {
  for (let i = 0; i < whosHand.length; i++) {
    if (whosHand[i].includes("Ace")) {
      score += 11;
    } else if (whosHand[i].includes("2")) {
      score += 2;
    } else if (whosHand[i].includes("3")) {
      score += 3;
    } else if (whosHand[i].includes("4")) {
      score += 4;
    } else if (whosHand[i].includes("5")) {
      score += 5;
    } else if (whosHand[i].includes("6")) {
      score += 6;
    } else if (whosHand[i].includes("7")) {
      score += 7;
    } else if (whosHand[i].includes("8")) {
      score += 8;
    } else if (whosHand[i].includes("9")) {
      score += 9;
    } else if (whosHand[i].includes("10")) {
      score += 10;
    } else if (whosHand[i] == "King" || "Queen" || "Jack") {
      score += 10;
    }
  }
  return score;
}

function drawAgain() {
  if (playerHandScore < 17) {
    console.log("drawing another card for the player");
    drawOneCard(playerHand);
    playerScore = calculateHandScore(playerHandScore, playerHand);
    console.log(playerHand);
    console.log(playerScore);
  }
}

drawAgain();
