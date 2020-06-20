// Code your solutions in this file
for (let age = 30; age < 40; age++) {
  console.log(`"I'm ${age} years old. Happy birthday to me!"`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}

wrapGifts(gifts);

function writeCards(names, event) {
  let thankful_messages = [];
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    thankful_messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return thankful_messages;
}

function countDown(num) {
  let i = 0;
  while (num >= i) {
    console.log(num);
    num--;
  }
}
