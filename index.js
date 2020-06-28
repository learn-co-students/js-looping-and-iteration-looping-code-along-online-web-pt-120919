const friends = ["Lisa", "Kaitlin", "Jan"]
let occasion = "surprise"
let cards = []

function writeCards(friends, occasion) {
    for (let i = 0; i < friends.length; i++) {
        cards.push(`Thank you, ${friends[i]}, for the wonderful ${occasion} gift!`)
    }

    return cards

}

function countDown(num) {
    let currentNum = num
    while (currentNum >= 0) {
        console.log(currentNum--);
    }
}