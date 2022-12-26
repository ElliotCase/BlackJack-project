let playerHand = [];
let dealerHand = [];
let firstTimeCards = [];
let playerHandScore = 0;
let dealerHandScore = 0;

function startGame() {
  drawOneCard(playerHand);
  drawOneCard(playerHand);

  calculatePlayerHandScore();

  console.log(
    `Starting Player cards = ${playerHand} - score = ${playerHandScore}`
  );
  drawOneCard(dealerHand);
  drawOneCard(dealerHand);

  calculateDealerHandScore();
  console.log(
    `Starting Dealer cards = ${dealerHand} - score = ${dealerHandScore}`
  );
}

startGame();
function drawOneCard(e) {
  for (let i = 0; i < 1; i++) {
    const cards = [
      "Ace",
      1,
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
    console.log(firstTimeCards);
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

function calculatePlayerHandScore() {
  for (let i = 0; i < playerHand.length; i++) {
    if (playerHand[i].includes("Ace")) {
      playerHandScore += 11;
    } else if (playerHand[i].includes("2")) {
      playerHandScore += 2;
    } else if (playerHand[i].includes("3")) {
      playerHandScore += 3;
    } else if (playerHand[i].includes("4")) {
      playerHandScore += 4;
    } else if (playerHand[i].includes("5")) {
      playerHandScore += 5;
    } else if (playerHand[i].includes("6")) {
      playerHandScore += 6;
    } else if (playerHand[i].includes("7")) {
      playerHandScore += 7;
    } else if (playerHand[i].includes("8")) {
      playerHandScore += 8;
    } else if (playerHand[i].includes("9")) {
      playerHandScore += 9;
    } else if (playerHand[i].includes("10")) {
      playerHandScore += 10;
    } else if (playerHand[i] == "King" || "Queen" || "Jack") {
      playerHandScore += 10;
    }
  }
}
function calculateDealerHandScore() {
  for (let i = 0; i < dealerHand.length; i++) {
    if (dealerHand[i].includes("Ace")) {
      dealerHandScore += 11;
    } else if (dealerHand[i].includes("2")) {
      dealerHandScore += 2;
    } else if (dealerHand[i].includes("3")) {
      dealerHandScore += 3;
    } else if (dealerHand[i].includes("4")) {
      dealerHandScore += 4;
    } else if (dealerHand[i].includes("5")) {
      dealerHandScore += 5;
    } else if (dealerHand[i].includes("6")) {
      dealerHandScore += 6;
    } else if (dealerHand[i].includes("7")) {
      dealerHandScore += 7;
    } else if (dealerHand[i].includes("8")) {
      dealerHandScore += 8;
    } else if (dealerHand[i].includes("9")) {
      dealerHandScore += 9;
    } else if (dealerHand[i].includes("10")) {
      dealerHandScore += 10;
    } else if (dealerHand[i] == "King" || "Queen" || "Jack") {
      dealerHandScore += 10;
    }
  }
}

function drawAgain() {
  if (playerHandScore < 17) {
  }
}
