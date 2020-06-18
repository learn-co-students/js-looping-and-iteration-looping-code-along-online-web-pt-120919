// Code your solutions in this file
const array = []
function writeCards(names, event){for (let i = 0; i < names.length; i++){
   array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
 }
 return array;}
 writeCards(names, event);

 function countDown(int){
 while(int > -1) {console.log(int--);}}