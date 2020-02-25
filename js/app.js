

//Array of card icons that can be looped through to shuffle or find a match.
let cardIconArray = ["fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o",
 "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-anchor", "fa fa-cube",
  "fa fa-cube", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle",
   "fa fa-bomb", "fa fa-bomb", "fa fa-bolt", "fa fa-bolt"];

const cardDeckContainer = document.querySelector(".deck");

//Cards are shuffled at restart of game or when restart button is clicked.
let shuffledCardsArray = [];

//Clicked cards are pushed into openedCardsArray to determine if match or not.
let openedCardsArray = [];

//Matched ares are pushed into matchedCardsArray to determine when the game finishes.
let matchedCardsArray = [];

//Timer function that starts on restart
let second = 0;
let minute = 0;
const timer = document.querySelector(".timer");
let timeInterval;

const startTimer = () => {
  if(startGameVal = true) {
        timeInterval = setInterval(function(){
        timer.innerHTML = `${minute}mins ${second}secs`;
        second++;
        if(second == 60){
            minute++;
            second = 0;
        }
    },1000);
};
}
startTimer();


//Move counter for clicks made to complete the game
const movesElement = document.querySelector(".moves");
let moves = 1;

const moveCounter = () => {
  movesElement.innerHTML = moves++;
};

//Star rating for card clicks
const starsElement = document.querySelector(".stars")

const starRating = () => { 
  if (moves <= 16) {
    starsElement.innerHTML =
    `<li><i class="fa fa-star"></i></li>
   <li><i class="fa fa-star"></i></li>
   <li><i class="fa fa-star"></i></li>
   <li><i class="fa fa-star"></i></li>`; 
  } else if (moves > 16 && moves <= 22) {
    starsElement.innerHTML =
    `<li><i class="fa fa-star"></i></li>
   <li><i class="fa fa-star"></i></li>
   <li><i class="fa fa-star"></i></li>`;
  } else if (moves > 22 && moves <= 28) {
    starsElement.innerHTML =
    `<li><i class="fa fa-star"></i></li>
   <li><i class="fa fa-star"></i></li>`;
  } else if (moves > 28) {
    starsElement.innerHTML =
    `<li><i class="fa fa-star"></i></li>`;
}
};

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


//start game function utilising the shuffle function above
const startGame = () => {
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

//Card flipping and matching function within the start game function.
card.addEventListener('click', function() {
//Starts the move counter and star rating countdown.
        starRating();
        moveCounter();
        openedCardsArray.push(card);
        //console log for testing
        console.log(openedCardsArray);
        if (openedCardsArray.length === 1) {
        card.classList.add('open','show');
        } else if (openedCardsArray.length === 2) {
            card.classList.add('open','show')
            //Cards matching statement
            if (openedCardsArray[0].innerHTML === openedCardsArray[1].innerHTML) {
              card.classList.add('match');
              openedCardsArray[0].classList.add('match');
              matchedCardsArray.push(card);
              //console log used for testing
              console.log("Matched!");
              openedCardsArray = [];
            }
        } else {
          openedCardsArray[0].classList.remove('open', 'show');
          openedCardsArray[1].classList.remove('open', 'show');
          openedCardsArray = [];
        }
        //Statement for modal to appear
        if(matchedCardsArray.length === 8) {
          clearInterval(timeInterval);
          const modal = document.querySelector(".modal");
          const modalContent = document.querySelector(".modal-conent");
          modal.style.display = "block";
          const movesText = document.querySelector(".moves").innerText;
          const timerText = document.querySelector(".timer").innerText;
          const starsText = document.querySelector(".stars").innerHTML;
          //Modal message on game win
          modalContent.innerHTML =
          `<span class="close-button">&times;</span>
          </br>
          <p class="congrats">Congrats! <br> You won!</p>
          Moves:  ${movesText} </br></br>
          Time:   ${timerText} </br></br>
          Star Rating:
          <ul style="list-style-type:none;">${starsText}</ul>
          Play again? 
          <div class="restart-modal" onClick="window.location.reload()">
            <i class="fa fa-repeat"></i>
          </div>
          </br>
          </br>`
          //To hide the modal
          const closeButton = document.querySelector(".close-button")
          closeButton.onclick = function() {
            modal.style.display = "None";
          }
        }
    });
  }
};

//Start game function to run the game
startGame();