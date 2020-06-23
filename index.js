let array = []

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++){
        array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return array
}


function countDown(number) {
    while (number > -1) {
        console.log(number);
        number --;
    }
}