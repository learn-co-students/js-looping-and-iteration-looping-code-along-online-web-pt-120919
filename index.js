// Code your solutions in this file
function writeCards( namesArray, event ) {
    // writecards witht two arguments: array of string names, and event name
    let thankYouCards = []
    // array of string names
    for ( let i = 0; i < namesArray.length; i++ ) {
        // loop that starts at 0 and increments at the end of each loop
        // namesArray.length; i++ - condition halts the loop after the last name in the array is printed out in the loop body
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
      // Inside the loop, create a custom message for each name provided by the array, and thanking that person for their gift
    }
    return thankYouCards
  }
  
  function countDown( startingNumber ) {
      // write a function, countDown
    while ( startingNumber > 0 ) {
        //that takes in any positive integer,
      console.log( startingNumber );
      startingNumber -= 1;
      // and starting from that number, counts down to zero using the console log
    }
    console.log( startingNumber );
  }
   