console.log("Up and running!")
let cards = ["queen","queen","king","king"];
let cardsInPlay = [];
let cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay);
cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[1]);
if (cardsInPlay.length===2 && cardsInPlay[0]=== cardsInPlay[1]) {
    console.log("user picked twice")
    alert("You found a match!")
}else if (cardsInPlay.length===2&&cardsInPlay[0]!==cardsInPlay[1]) {
    console.log("user picked twice")
    alert("sorry, try again.")
}
