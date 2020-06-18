function writeCards(names, event) {
  let responses = [];
  for (let i = 0; i < names.length; i++) {
    responses.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return responses;
}

function countDown(number) {
  while(number >= 0) {
    console.log(number);
    number--;
  }
}