//Global Variables

let cardIconArray = ["fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o",
 "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-anchor", "fa fa-cube",
  "fa fa-cube", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle",
   "fa fa-bomb", "fa fa-bomb", "fa fa-bolt", "fa fa-bolt"];

const cardDeckContainer = document.querySelector(".deck");

shuffledCardsArray = [];

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

let startGame = () => {
   let shuffledCards = shuffle(cardIconArray);
   shuffledCards.forEach(function(item){
    shuffledCardsArray.push(item)
  })
}

startGame();
//Functionality


//Creating the game board
for(let i = 0; i < shuffledCardsArray.length; i++) {
    const card = document.createElement("li");
    const icon = document.createElement("i");
    card.classList.add("card");
    icon.className = cardIconArray[i];
    cardDeckContainer.appendChild(card);
    card.appendChild(icon);
    card.addEventListener('click', function() {
    card.classList.add('open', 'show');
    });
}

