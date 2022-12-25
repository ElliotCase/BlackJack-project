let playerHand = [];
let dealerHand = [];
let firstTimeCards = [];

function startGame() {
  drawTwoCards(playerHand);
  console.log(`Starting Player cards = ${playerHand}`);
  drawTwoCards(dealerHand);
  console.log(`Starting Dealer cards = ${dealerHand}`);
}

startGame();
function drawTwoCards(e) {
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
    const suit = ["Spades", "Hearts", "Jacks", "Clubs"];
    let randomCard = cards[Math.floor(Math.random() * cards.length)];
    let randomCard2 = cards[Math.floor(Math.random() * cards.length)];

    let randomSuit = suit[Math.floor(Math.random() * suit.length)];
    let randomSuit2 = suit[Math.floor(Math.random() * suit.length)];

    firstTimeCards.push(" " + randomCard + " Of " + randomSuit);
    firstTimeCards.push(" " + randomCard2 + " Of " + randomSuit2);
    // console.log(firstTimeCards);
    // console.log(checkIfArrayIsUnique(firstTimeCards));
    if (checkIfArrayIsUnique(firstTimeCards)) {
      e.push(" " + randomCard + " Of " + randomSuit);
      e.push(" " + randomCard2 + " Of " + randomSuit2);
    } else if (firstTimeCards.length == 2) {
      firstTimeCards.pop();
      firstTimeCards.pop();
      drawTwoCards(playerHand);
    } else if (firstTimeCards.length == 4) {
      firstTimeCards.pop();
      firstTimeCards.pop();
      drawTwoCards(dealerHand);
    }
  }
}

function checkIfArrayIsUnique(myArray) {
  return myArray.length === new Set(myArray).size;
}
