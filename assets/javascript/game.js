//Global Variables
//============================================================================================
var wordBank = ['hahaha', 'slipslisp', 'lolligag', 'lolllloooll']
var remainingIncorrectGuesses = 10;
var correctGuesses = [];
var incorrectGuesses = [];
var wins = 0;

//Starting the Game
//============================================================================================
//selects random word
var hangmanWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log('hangmanWord', hangmanWord);

//breaks word into array of individual letters
lettersInWord = hangmanWord.split("");
console.log("split!", lettersInWord, lettersInWord.length);

//links to document
var secretHolderText = document.getElementById("secret-holder-text");
var wrongGuesses = document.getElementById("incorrect-guesses");
var guessesLeft = document.getElementById("remaining-guesses");
var winsDestination = document.getElementById('wins')


//creates an array of hashes matching length of word
var hashes = [];
for (let i = 0; i < lettersInWord.length; i++) {
    hashes.push('-');
}
//turns this into a string that can appear on page
hashesWord = hashes.join('');


//Main code
//============================================================================================

//Sets up the underscore


//when user pushes key
var userGuess;

//detects what key is pushed
document.onkeyup = function(event) {
    //if userGuess is a letter a - z...
    if (event.keyCode >=65 && event.keyCode <=90) {
        //set userGuess and move on with function
        userGuess = event.key;
        console.log('userGuess', userGuess);
    }
    //if user guess is not a letter...
    else {
        //tell user to use letters, end function
        console.log("please select a letter between a - z");
        return;
    }
    
   
    //detects if a key has already been guessed, stops code
    if ((correctGuesses.indexOf(userGuess) > -1) || incorrectGuesses.indexOf(userGuess) > -1) {
        console.log('You already tried that!  Please guess a new letter')
        console.log("incorrectGuesses",incorrectGuesses);
        return;
    }

    //detects if guess is present in word.
        else if (lettersInWord.indexOf(userGuess) !== -1) {
            //loops through all letters
            for (let i=0; i<lettersInWord.length; i++) {
                //if letter matches user guess...
                if (lettersInWord[i] === userGuess) {
                    //insert the guessed letter into the hashes
                    hashesWord = hashesWord.split('');
                    hashesWord[i] = userGuess;
                    hashesWord = hashesWord.join('');
                }
            };
            
            
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

    //updates these text fields
    secretHolderText.textContent = hashesWord;
    wrongGuesses.textContent = incorrectGuesses;
    guessesLeft.textContent = remainingIncorrectGuesses;
    winsDestination.textContent = wins;


    //Victory condition!  If there are no more hashes
    if (hashesWord.indexOf('-') === -1) {
        //all done!
        alert("victory");
        wins++;
        winsDestination.textContent = wins;
    }
    
}


//DOM manipulation
//============================================================================================
//QUESTION: does this need to be in the function?
//should print the hashmarks to page, but is NOT WORKING
