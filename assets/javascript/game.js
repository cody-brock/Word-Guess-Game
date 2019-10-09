//Global Variables
//============================================================================================
var wordBank = ['hahaha', 'slipslisp', 'lolligag', 'lolllloooll']
var remainingIncorrectGuesses = 8;
var correctGuesses = [];
var incorrectGuesses = [];
var underScore = [];

//Starting the Game
//============================================================================================
//selects random word - WORKS
var hangmanWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log('hangmanWord', hangmanWord);

//breaks word into array of individual letters
lettersInWord = hangmanWord.split("");
console.log("split!", lettersInWord);

//creates the hashes - WORKS
var hashMarks = [];
function createHashMarks() {
    for (let i = 0; i < lettersInWord.length; i++) {
        hashMarks.push('-');
    }
    return hashMarks;
}

console.log('hashmarks', createHashMarks());


//Main code
//============================================================================================

//Sets up the underscore


//when user pushes key
var userGuess;

document.onkeyup = function(event) {
    //if userGuess is a letter a - z
    if (event.keyCode >=65 && event.keyCode <=90) {
        userGuess = event.key;
        console.log('userGuess', userGuess);
    }
    else {
        console.log("please select a letter between a - z");
        return;
    }
    //detects what key is pushed
   

    //detects if a key has already been guessed
    if ((correctGuesses.indexOf(userGuess) > -1) || incorrectGuesses.indexOf(userGuess) > -1) {
        console.log('You already tried that!  Please guess a new letter')
        console.log("incorrectGuesses",incorrectGuesses);
        return;
    }

    //detects if guess is present in word.
        else if (lettersInWord.indexOf(userGuess) !== -1) {
            lettersInWord.forEach(function(element) {

            });
            
            
            correctGuesses.push(userGuess);

            console.log('Eureka!');
            console.log(correctGuesses);

        }
    
    //if user guess is incorrect
    else if (lettersInWord.indexOf(userGuess) === -1) {
        //decrease remaining guesses
        remainingIncorrectGuesses--
        //push to incorrectGuesses
        incorrectGuesses.push(userGuess);
        console.log("remainingIncorrectGuesses",remainingIncorrectGuesses);
        console.log("incorrectGuesses",incorrectGuesses);
    }
}


//DOM manipulation
//============================================================================================
var underScore = document.getElementById