// Code your solutions in this file



function writeCards(namesArray) {
    let thankYouCards = []
    for (let i = 0; i < namesArray.length; i++) {
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful surprise gift!`);
    }
    return thankYouCards
}






function countDown(counter) {
    while (counter > 0) {
        console.log(counter);
        counter -= 1;
    }
    console.log(counter);
}