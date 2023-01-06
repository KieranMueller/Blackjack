function randomNumber(){
    let randomNumber = Math.floor((Math.random()*13)+1)
    if (randomNumber === 1) return 11;
    if(randomNumber > 10) return 10;
    return randomNumber
};
// Variables
let cards = [];
let hasBet = false;
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = " ";
let dealerCards = [];
let newDealerCard = randomNumber();
let betTotal = [];
let dealerSum = 0;
let playerName = "Jasper";
let playerChips = 600;
let displayMessage = document.getElementById("message");
let sumMessage = document.getElementById("sum");
let displayCards = document.querySelector(".cards");
let dealerEl = document.querySelector(".dealerCards");
let betEl = document.querySelector(".bet");
let actionButtonOne = document.querySelector(".actionButtonOne");
let actionButtonTwo = document.querySelector(".actionButtonTwo");
let actionButtonThree = document.querySelector(".actionButtonThree");
let playerEl = document.querySelector(".playerObject");
function start(){
    renderGame()
}

//stand
function stand(){
    if(isAlive){
        if (dealerSum <= 16)
        dealerCards.push(newDealerCard);
        console.log(dealerCards);
    }
}

// Betting!
    function incrementBetOne(){
    hasBet = true;
    if(!isAlive){
    let betAmount = 1;
    let betSum = 0;
    betTotal.push(betAmount);
    for (let i = 0; i < betTotal.length; i++){
        betSum += betTotal[i]
    }
    betEl.textContent = "Bet: $"+betSum;
}
}
function incrementBetFive(){
    hasBet = true;
    if(!isAlive){
   let betAmount = 5;
    let betSum = 0;
    betTotal.push(betAmount);
    for (let i = 0; i < betTotal.length; i++){
        betSum += betTotal[i]
    }
    betEl.textContent = "Bet: $"+betSum;
}
}
function incrementBetTen(){
    hasBet = true;
    if(!isAlive){
   let betAmount = 10;
    let betSum = 0;
    betTotal.push(betAmount);
    for (let i = 0; i < betTotal.length; i++){
        betSum += betTotal[i]
    }
    betEl.textContent = "Bet: $"+betSum;
}
}

//General Parameters
playerEl.textContent = playerName + ": $" + playerChips;
function start(){
    if(!hasBet){ 
        displayMessage.textContent = "No freebies - Please place bet";
        return;}
    document.querySelector(".playButton").onclick = null;
    isAlive = true;
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
    dealerEl.textContent = "Dealer: " + " " + "? " + dealerCards[0];
    dealerSum = dealerCards[0] + dealerCards [1];
   
    if (dealerSum === 21 && sum === 21){
        dealerEl.textContent = dealerCards[1] + " " + dealerCards[0];
        setTimeout(function(){displayMessage.textContent = "Push!"},500);
        isAlive = false;
        setTimeout(function(){actionButtonThree.textContent = "Reset"},500);
        return;
    }
    if(dealerSum === 21 && sum !== 21){
        (!isAlive);
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
    if(!isAlive) document.location.reload()
}

/* To-Do
Fixes
- i can hit play blackjack button multiple times

1. let Ace = 1 or 11
2. make actual cards
3. create a dealer/bank
4. create chips/gambling system(add bet button etc. split, raise, double down)
5. give functionality to stand button
6. add age verification
7. add funny stuff (add tik-tok explosion video to screen when blackjack (override muted autoplay?))


*/
