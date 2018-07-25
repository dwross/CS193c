var cardFrontPics = ["1clubs.png", "1hearts.png", "2clubs.png", "2hearts.png", "3clubs.png", "3hearts.png"];

var cardBackPics = ["back.png", "back.png", "back.png", "back.png", "back.png", "back.png"];

var cardDisabled = [false, false, false, false ,false, false];

var cardFlippedPosition = -1;

var timerActive = false;

var clearTimeoutVar = "";

function randomizeCards() {
  for (let i=cardFrontPics.length; i>0; i--){
    let randomCardIndex = Math.floor(Math.random() * Math.floor(i));
    let cardToSwap = cardFrontPics[i-1];
    cardFrontPics[i-1] = cardFrontPics[randomCardIndex];
    cardFrontPics[randomCardIndex] = cardToSwap;
  }
}

randomizeCards();

function resetCardBackPics() {
  cardBackPics = ["back.png", "back.png", "back.png", "back.png", "back.png", "back.png"];
}

function resetCardDisabled() {
  cardDisabled = [false, false, false, false ,false, false];
}

function resetCardFlippedPosition() {
  cardFlippedPosition = -1;
}

function resetTimerActive() {
  timerActive = false;
}

function resetTimeout() {
  if (clearTimeoutVar != "") {
    clearTimeout(clearTimeoutVar);
  }
}

function flipOverAllCards() {
  let cardImages = document.getElementsByTagName("img");
  for (let i=0; i<cardImages.length; i++){
    cardImages[i].src = cardBackPics[i];
  }
}

var restartGameBtn = document.getElementById("restartGameButton");
restartGameBtn.addEventListener("click", () => {
  resetTimeout();
  resetTimerActive();
  randomizeCards();
  resetCardBackPics();
  resetCardDisabled();
  resetCardFlippedPosition();
  flipOverAllCards();
  }, false);

function testFlippedCard(cardPosition2) {
  if (cardFrontPics[cardPosition2].substring(0,1) === cardFrontPics[cardFlippedPosition].substring(0,1)) {
    cardBackPics[cardFlippedPosition] = "clear.png";
    cardDisabled[cardFlippedPosition] = true;
    cardBackPics[cardPosition2] = "clear.png";
    cardDisabled[cardPosition2] = true; 
  }else{
    cardDisabled[cardFlippedPosition] = false;
    cardDisabled[cardPosition2] = false; 
  }
  resetTimerActive();
  resetCardFlippedPosition();
  flipOverAllCards();
}

function flipCard(cardPosition) {
  if (!cardDisabled[cardPosition] && !timerActive) {
    document.getElementById("card" + cardPosition).src=cardFrontPics[cardPosition];
    cardDisabled[cardPosition] = true;
    if (cardFlippedPosition === -1) {
      cardFlippedPosition = cardPosition;
    } else {
      timerActive = true;
      clearTimeoutVar = setTimeout( () => { testFlippedCard(cardPosition); }, 7000);
    }
  }
}

for (let i=0; i<cardFrontPics.length; i++) {
  document.getElementById("card" + i + "Button").addEventListener("click", () => { flipCard(i); }, false);
}


