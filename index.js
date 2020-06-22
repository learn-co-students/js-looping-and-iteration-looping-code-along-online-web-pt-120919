function writeCards(nameArray, eventName) {
    let thanks = []
    for (let i = 0; i < nameArray.length; i++) {
        thanks.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return thanks;
}

function countDown(int) {
    let i = int;
    while(i > 0) {
        console.log(i);
        i--;
    }
    console.log(i)
}

