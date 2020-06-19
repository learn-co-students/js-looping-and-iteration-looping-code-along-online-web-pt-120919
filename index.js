// Code your solutions in this file
function writeCards(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`);
    }
    return newArr;
}

function countDown() {
    let num = 10
    while (num >= 0) {
        console.log(num--)
    }
}
