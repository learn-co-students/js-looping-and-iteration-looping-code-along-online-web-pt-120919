// Code your solutions in this file
const names = ["Lisa", "Kaitlin", "Jan"];
let event = "surprise"
let messages = []

function writeCards(names){
    for (let i = 0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        }

    return messages;
    }

function countDown(n){
    let integer = n;
    while (integer >= 0) {
        console.log(integer--);
    }
}   