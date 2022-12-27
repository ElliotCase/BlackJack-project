let playerHand = [];
let dealerHand = [];
let firstTimeCards = [];
let playerHandScore = 0;
let dealerHandScore = 0;
let playerScore = 0;
let updatedScore = 0;
let updatedScore2 = 0;
let playerScoreUpdated = 0;
let updatedFinalScore = 0;
function startGame() {
  drawOneCard(playerHand);
  drawOneCard(playerHand);
  playerScore = calculateHandScore(playerHandScore, playerHand);
  console.log(`Starting Player cards = ${playerHand}  score = ${playerScore}`);
  drawOneCard(dealerHand);
  drawOneCard(dealerHand);

  let dealerScore = calculateHandScore(dealerHandScore, dealerHand);
  // console.log(`Starting Dealer cards = ${dealerHand}  score = ${dealerScore}`);

  playerScoreUpdated = drawAgain(
    playerScore,
    playerHand,
    playerHandScore,
    updatedScore
  );
  logEndScore();

  checkIfBust(playerScoreUpdated, playerHand);
  checkIfBust(playerScoreUpdated, playerHand);
}

startGame();
function drawOneCard(e) {
  for (let i = 0; i < 1; i++) {
    const cards = [
      "Ace",
      // 1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      "Jack",
      "Queen",
      "King",
    ];
    const suit = ["Spades", "Hearts", "Diamonds", "Clubs"];
    let randomCard = cards[Math.floor(Math.random() * cards.length)];

    let randomSuit = suit[Math.floor(Math.random() * suit.length)];

    firstTimeCards.push(" " + randomCard + " Of " + randomSuit);
    //    console.log(firstTimeCards);
    if (checkIfArrayIsUnique(firstTimeCards)) {
      //   console.log("this is a new item in the array");
      e.push(" " + randomCard + " Of " + randomSuit);
    } else {
      //    console.log("I am popping off the last item in the array which is");
      //     console.log(firstTimeCards[firstTimeCards.length - 1]);
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

function drawAgain(score, whosHand, whosOldScore, newScore) {
  if (score < 17) {
    console.log("score is under 17");
    console.log(`
    
drawing another card for the player`);
    drawOneCard(whosHand);
    newScore = calculateHandScore(whosOldScore, whosHand);
    console.log(whosHand[whosHand.length - 1]);
    console.log(newScore);
  }
  return newScore;
}

function checkIfBust(e, r) {
  if (e > 21) {
    console.log(`
    
The New Score for player is ${playerScoreUpdated}`);

    console.log("player is bust you lose");
    return;
  } else if (e < 17) {
    console.log("drawing another card for the player");

    drawOneCard(r);
    console.log(r[r.length - 1]);
    playerScoreUpdated = calculateHandScore(playerHandScore, playerHand);
    console.log(playerScoreUpdated);
    if (playerScoreUpdated < 21) {
      console.log(`
    
    The New Score for player is ${playerScoreUpdated}`);
    }
  }
  return;
}

function logEndScore() {
  if (playerScoreUpdated > 17 && playerScoreUpdated < 21) {
    console.log(`Player End Score = ${playerScoreUpdated}`);
  }
}
