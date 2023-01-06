function randomNumber(){
    let randomNumber = Math.floor((Math.random()*13)+1)
    if (randomNumber === 1) return 11;
    if(randomNumber > 10) return 10;
    return randomNumber
};
// Variables
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = " ";
let displayMessage = document.getElementById("message");
let sumMessage = document.getElementById("sum");
let displayCards = document.querySelector(".cards");
let actionButtonOne = document.querySelector(".actionButtonOne");
let actionButtonTwo = document.querySelector(".actionButtonTwo");
function start(){
    renderGame()
}

//Functions

//Action Functions


//General Parameters
function start(){
    isAlive = true;
    let firstCard = randomNumber();
    let secondCard = randomNumber();
    cards = [firstCard, secondCard];
    sum = cards[0] + cards[1];
    renderGame()
}
function renderGame(){
    sumMessage.textContent = "Sum: ...";
    setTimeout(function(){sumMessage.textContent = "Sum: " + sum},500);
    displayCards.textContent = ("Cards: " + cards[0] + ", " + cards[1]);
    {
        if (sum < 21) {
            message = ("Hit?");
            setTimeout(function() {actionButtonOne.textContent = "Hit"},500)
            setTimeout(function() {actionButtonTwo.textContent = "Stand"},500)
            displayMessage.textContent = "Checking..."
            setTimeout(function() {displayMessage.textContent = message},500)
            
        }
        if (sum === 21) {
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
    };
}

function hit(){
    let newCard = randomNumber();
    sum += newCard;
    cards.push(newCard);
    console.log(cards);
    renderGame();
    displayMessage.textContent = "Fetching new card...";
    setTimeout(function(){displayCards.textContent += ", " + newCard},500)
}

/* To-Do
1. let Ace = 1 or 11
2. make actual cards
3. create a dealer/bank
4. create chips/gambling system(add bet button etc. split, raise, double down)
5. give functionality to stand button
6. add age verification


*/
