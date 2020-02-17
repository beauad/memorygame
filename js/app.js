

//Array of card icons that can be looped through to shuffle or find a match.

let cardIconArray = ["fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o",
 "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-anchor", "fa fa-cube",
  "fa fa-cube", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle",
   "fa fa-bomb", "fa fa-bomb", "fa fa-bolt", "fa fa-bolt"];

const cardDeckContainer = document.querySelector(".deck");

//Cards are shuffled at restart of game or when restart button is clicked.

shuffledCardsArray = [];

openedCardsArray = [];

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


//start game function

let startGame = () => {
   let shuffledCards = shuffle(cardIconArray);
   shuffledCards.forEach(function(item){
    shuffledCardsArray.push(item)
  })

  //Creates the game board
for(let i = 0; i < shuffledCardsArray.length; i++) {
    const card = document.createElement("li");
    const icon = document.createElement("i");
    card.classList.add("card");
    icon.className = cardIconArray[i];
    cardDeckContainer.appendChild(card);
    card.appendChild(icon);

card.addEventListener('click', function() {
        openedCardsArray.push(card);
        console.log(openedCardsArray);
        if (openedCardsArray.length === 1) {
        card.classList.add('open','show');
        } else if (openedCardsArray.length === 2) {
            card.classList.add('open','show') 
            if (openedCardsArray[0].innerHTML === openedCardsArray[1].innerHTML) {
              openedCardsArray[0].classList.add('match');
                card.classList.add('match');
                console.log("Matched!");
                openedCardsArray = [];
            }
        }
    }) 
  };
}


/* 
card.addEventListener('click', function() {
        openedCardsArray.push(card);
        console.log(openedCardsArray);
        if (openedCardsArray.length === 1) {
        card.classList.add('open','show');
        } else if (openedCardsArray.length === 2) {
            card.classList.add('open','show') 
            if (openedCardsArray[0].innerHTML === openedCardsArray[1].innerHTML) {
              openedCardsArray[0].classList.add('match');
                card.classList.add('match');
                console.log("Matched!");
                openedCardsArray = [];
            }
        }
    }) 
  };
}
*/
startGame();



/*             if (openedCardsArray[0] === openedCardsArray[1]) {
                card.classList.remove('open', 'show');
                card.classList.add('match');
                openedCardsArray = [];
                */

//Game board creatation and functionality




//restart button




//How to determine if the cards match