
let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
function checkForMatch(){
    if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
        //will change console.log to alert in final itteration
        console.log("You found a match!")
    } else if (cardsInPlay.length === 2 && cardsInPlay[0] !== cardsInPlay[1]) {
        //will change console.log to alert in final itteration
        console.log("sorry, try again.")
    }

}
function flipCard(cardId) {
    console.log("User flipped "+ cards[cardId]);
    cardsInPlay.push(cards[cardId]);
    checkForMatch();

}
flipCard(0)
flipCard(2)
