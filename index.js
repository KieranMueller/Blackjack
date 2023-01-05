// Variables

let firstCard = 11;
let secondCard = 8;
let cards = [firstCard, secondCard];
let sum = cards[0] + cards[1];
let age = 20;
let hasBlackjack = false;
isAlive = true;
let message = " ";
let displayMessage = document.getElementById("message");
let sumMessage = document.getElementById("sum");
let displayCards = document.querySelector(".cards");
let actionButtonOne = document.querySelector(".actionButtonOne");
let actionButtonTwo = document.querySelector(".actionButtonTwo");


//Functions

//Action Functions

function hit(){
    let card = 1;
    sum += card;
    start();
    displayMessage.textContent = "Fetching new card...";
    setTimeout(function(){displayCards.textContent += ", " + card},500)
}

//General Parameters
function start(){
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
// Age Thing
let ageMessage = " ";
{
    if (age>=21) ageMessage = ("Welcome!")
    if (age<21) ageMessage = ("We noticed you're under 21... Just don't tell your parents.")
}