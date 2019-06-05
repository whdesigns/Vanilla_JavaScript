//.......................G U E S S I N G  G A M E...................//


//assigning the correct guess
var secretNumber = 4;




//Asking user for their guess
var stringGuess = prompt("Please guess a number!");
//Making sure the guess is saved as a number and NOT string
var guess = Number(stringGuess);




//Checking if the guess is accurate
if (guess === secretNumber) {
    alert("Well done! You guessed right.");
}



//Checking if the guess is higher than the answer
else if (guess > secretNumber) {
    alert("Too high. Guess again!");
}



//Check if guess is lower than the answer. 
else {
    alert("Too low. Guess again!");
}
