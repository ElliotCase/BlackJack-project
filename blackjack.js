let playerHand = [];
let dealerHand = [];
let firstTimeCards = [];
let playerHandScore = 0;
let dealerHandScore = 0;
let playerScore = 0;
let dealerScore = 0;

//Main function that runs the game from start to finish
function startGame() {
  // Draws starting two cards for the player, calculates and logs the players score and the cards they drew
  drawOneCard(playerHand);
  drawOneCard(playerHand);
  playerScore = calculateHandScore(playerHandScore, playerHand);
  console.log(`Starting Player cards = ${playerHand}  score = ${playerScore}`);

  // Draws starting two cards for the dealer, calculates and logs the dealers score and the cards they drew
  drawOneCard(dealerHand);
  drawOneCard(dealerHand);
  dealerScore = calculateHandScore(dealerHandScore, dealerHand);
  console.log(`Starting Dealer cards = ${dealerHand}  score = ${dealerScore}`);

  // while player is under 17 keep drawing cards one at a time and logging the card drawn and the new updated score
  console.log("");
  while (playerScore < 17) {
    console.log("Drawing another card for the player");
    drawOneCard(playerHand);
    playerScore = calculateHandScore(playerHandScore, playerHand);
    console.log(`The players score is now ${playerScore}`);
  }
  // The players score is now over 17 log out the final players score
  logEndScore("player", playerScore);
  console.log("");
  console.log("");
  console.log("");
  console.log("");

  //While the dealers score is under 17 and the player did not bust, keep drawing one card at a time
  //Logging each card and the new score
  while (dealerScore < 17 && playerScore <= 21) {
    console.log("Drawing another card for the Dealer");
    drawOneCard(dealerHand);
    dealerScore = calculateHandScore(dealerHandScore, dealerHand);
    console.log(`The dealers score is now ${dealerScore}`);
  }

  playerScore = calculateHandScore(playerHandScore, playerHand);
  logEndScore("dealer", dealerScore);
  checkIfBust(playerScore, "player");
  findWinner();
}

startGame();

///////////// Game Functions

/*function to draw one card, adds card to array 'firstTimeCards' checks if card exsits in 'firstTimeCards'already and if so
draws a new card.*/
function drawOneCard(whosDeck) {
  for (let i = 0; i < 1; i++) {
    const cards = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
    const suit = ["Spades", "Hearts", "Diamonds", "Clubs"];
    let randomCard = cards[Math.floor(Math.random() * cards.length)];
    let randomSuit = suit[Math.floor(Math.random() * suit.length)];
    firstTimeCards.push(" " + randomCard + " Of " + randomSuit);
    if (checkIfArrayIsUnique(firstTimeCards)) {
      whosDeck.push(" " + randomCard + " Of " + randomSuit);
    } else {
      firstTimeCards.pop();
      drawOneCard(whosDeck);
    }
    if (whosDeck.length > 2) {
      console.log("The new card is " + randomCard + " Of " + randomSuit);
    }
  }
}

//Function for checking if the drawn cards are unique
function checkIfArrayIsUnique(myArray) {
  return myArray.length === new Set(myArray).size;
}

//function to check the score if the hand has an ace which would cause them to bust change the ace value to 1
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
  for (let i = 0; i < whosHand.length; i++) {
    if (whosHand[i].includes("Ace") && score > 21) {
      score -= 10;
    }
  }
  return score;
}

function checkIfBust(score, who) {
  if (score > 21) {
    console.log(`${who} is bust with a score of ${score}`);
    return;
  }
  return;
}

function logEndScore(who, score) {
  if (score >= 17 && score <= 21) {
    console.log(`${who} sticks with a score of = ${score}`);
  }
}

function findWinner() {
  if ((playerScore > dealerScore && playerScore <= 21) || dealerScore > 21) {
    console.log(
      `The Player is the winner! With a score of ${playerScore} while the dealer had a score of ${dealerScore}`
    );
  } else if (playerScore == dealerScore) {
    console.log(
      `The game ends in a draw player and dealer  had a score of ${playerScore}`
    );
  } else {
    console.log(`The Dealer is the winner! With a score of ${dealerScore}`);
  }
}
