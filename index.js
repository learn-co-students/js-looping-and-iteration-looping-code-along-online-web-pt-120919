// Code your solutions in this file


function writeCards(arr, card) {

    for (let i = 0; i < arr.length; i++) {
        arr[i] = `Thank you, ${arr[i]}, for the wonderful ${card} gift!`
    }
    return arr
}

function countDown(number) {
    let num = 0;

    while (num <= number) {
        console.log(number)
        number -= 1
    }
}