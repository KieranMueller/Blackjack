function randomNumber(){
    let randomNumber = Math.floor((Math.random()*13)+1)
    if (randomNumber === 1) return 11;
    if(randomNumber > 10) return 10;
    return randomNumber
};
// Variables
let cards = [];
let youWin = false;
let isInGame = false;
let hasBet = false;
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = " ";
let dealerCards = [];
let newDealerCard = 0;
let betTotal = [];
let betSum = 0;
let betAmount = [];
let dealerSum = 0;
let playerName = "Jasper";
let playerChips = [];
let displayMessage = document.getElementById("message");
let sumMessage = document.getElementById("sum");
let displayCards = document.querySelector(".cards");
let dealerEl = document.querySelector(".dealerCards");
dealerEl.textContent = "- -";
let betEl = document.querySelector(".bet");
let actionButtonOne = document.querySelector(".actionButtonOne");
let actionButtonTwo = document.querySelector(".actionButtonTwo");
let actionButtonThree = document.querySelector(".actionButtonThree");
let playerEl = document.querySelector(".playerObject");
function start(){
    renderGame()
}
// Stand Button
function stand(){
    if (isAlive){
        dealerEl.textContent = "Dealer Drawing..."
        setTimeout(function(){actionButtonThree.textContent = "Reset"},800);
        setTimeout(function(){actionButtonOne.textContent = " "},800);
        setTimeout(function(){actionButtonTwo.textContent = " "},800);
    if(dealerSum>16){
        isAlive = false;
        setTimeout(function(){dealerEl.textContent = dealerCards[1] + " " + dealerCards[0]},800);
        if(dealerSum>sum) setTimeout(function(){displayMessage.textContent = "You Lose"},800);
        if(dealerSum<sum) setTimeout(function(){displayMessage.textContent = "You Win"},800);
        youWin = true;
        if(dealerSum === sum) setTimeout(function(){displayMessage.textContent = "Push"},800);
        return;
    }
    if(dealerSum<=16){
        isAlive = false;
        let newDealerCard = randomNumber();
        dealerCards.push(newDealerCard)
        dealerSum += newDealerCard;
        setTimeout(function(){dealerEl.textContent = dealerCards},800);
    }
    if(dealerSum<=16){
        isAlive = false;
        let newDealerCard = randomNumber();
        dealerCards.push(newDealerCard)
        dealerSum += newDealerCard;
        setTimeout(function(){dealerEl.textContent = dealerCards},800);
    }
    if(dealerSum<=16){
        isAlive = false;
        let newDealerCard = randomNumber();
        dealerCards.push(newDealerCard)
        dealerSum += newDealerCard;
        setTimeout(function(){dealerEl.textContent = dealerCards},800);
    }
    if(dealerSum<=16){
        isAlive = false;
        let newDealerCard = randomNumber();
        dealerCards.push(newDealerCard)
        dealerSum += newDealerCard;
        setTimeout(function(){dealerEl.textContent = dealerCards},800);
    }
    if(dealerSum > 21){
        isAlive = false;
        setTimeout(function(){displayMessage.textContent = "Dealer Bust: You Win!"},800);
        youWin = true;
        return;
    }
    if(dealerSum === 21){
        isAlive = false;
        setTimeout(function(){displayMessage.textContent = "Dealer Blackjack"},800);
        return;
    }
    if(dealerSum > 16){
        isAlive = false;
        if(dealerSum>sum) setTimeout(function(){displayMessage.textContent = "You Lose"},800);
        if(dealerSum<sum) setTimeout(function(){displayMessage.textContent = "You Win"},800);
        youWin = true;
        if(dealerSum === sum) setTimeout(function(){displayMessage.textContent = "Push"},800);
        return;}
    }
}
// Betting ----------------------------
    betEl.textContent = "Bet: ";
function incrementBet(betAmount){
    if(!isAlive){
    (hasBet = true);
    betTotal.push(betAmount);
    betSum = 0;
    for(let i = 0; i <betTotal.length; i++)
    betSum += betTotal[i];
   betEl.textContent = "Bet: $" + betSum;
   playerEl.textContent = playerName + ": $" + (playerChips-betSum);
    }
}

//General Parameters
playerChips = [600];
playerEl.textContent = playerName + ": $" + playerChips;
function start(){
    if(!hasBet){ 
        displayMessage.textContent = "Please place bet";
        return;}
        isAlive = true;
        isInGame = true;
       // if (isInGame){document.querySelector(".goButton").onclick = null};
    let firstCard = randomNumber();
    let secondCard = randomNumber();
    cards = [firstCard, secondCard];
    for (let i = 0; i<cards.length; i++){
        displayCards.textContent += " " + cards[i] + " ";
    }
    sum = cards[0] + cards[1];
    //dealer setup
    let dealerFirstCard = randomNumber();
    let dealerSecondCard = randomNumber();
    dealerCards = [dealerFirstCard, dealerSecondCard];
    dealerEl.textContent = "? "+dealerCards[0];
    dealerSum = dealerCards[0] + dealerCards [1];
   
    if (dealerSum === 21 && sum === 21){
        dealerEl.textContent = dealerCards[1] + " " + dealerCards[0];
        setTimeout(function(){displayMessage.textContent = "Push!"},500);
        isAlive = false;
        setTimeout(function(){actionButtonThree.textContent = "Reset"},500);
        return;
    }
    if(dealerSum === 21 && sum !== 21){
        isAlive = false;
        setTimeout(function(){dealerEl.textContent = "Dealer Blackjack :("},500);
        setTimeout(function(){actionButtonThree.textContent = "Reset"},500);
        return;

    }
  renderGame()
}
function renderGame(){
    sumMessage.textContent = "Sum: ...";
    setTimeout(function(){sumMessage.textContent = "Sum: " + sum},500);
    {
        if (sum < 21) {
            isAlive = true;
            message = ("Hit?");
            setTimeout(function() {actionButtonOne.textContent = "Hit"},500)
            setTimeout(function() {actionButtonTwo.textContent = "Stand"},500)
            displayMessage.textContent = "Checking..."
            setTimeout(function() {displayMessage.textContent = message},500)
            
        }
        if (sum === 21) {
            isAlive = false;
            message = ("BLACKJACK!");
            hasBlackjack = true;
            displayMessage.textContent = "Checking..."
            setTimeout(function() {displayMessage.textContent = message},500)
            
        }
        if (sum > 21) {
            message = ("Bust");
            isAlive = false;
            displayMessage.textContent = "Checking..."
            setTimeout(function() {displayMessage.textContent = message},500)
            
        }
          
              if (!isAlive){
                setTimeout(function(){actionButtonThree.textContent = "Reset"},500)
                setTimeout(function(){actionButtonOne.textContent = " "},500)
                setTimeout(function(){actionButtonTwo.textContent = " "},500)
                }
    };
}



let hit = function hit(){
    if(isAlive){
    let newCard = randomNumber();
    sum += newCard;
    cards.push(newCard);
    renderGame();
    displayMessage.textContent = "Fetching new card...";
   setTimeout(function(){displayCards.textContent +=  newCard + " "},500)
    }
}



function reset(){
    if(!isAlive);
    isInGame = false;
    sum = 0;
    displayCards.textContent = "Cards: ";
    sumMessage.textContent = "Sum: ";
    betEl.textContent = "Bet: ";
    hasBet = false;

    start();
    
    
}


/* To-Do
Fixes

make reset button continuous 
text highlight color = none
1. let Ace = 1 or 11
2. make actual cards
4. create chips/gambling system(add bet button etc. split, raise, double down)
7. add funny stuff (add tik-tok explosion video to screen when blackjack (override muted autoplay?))


*/
