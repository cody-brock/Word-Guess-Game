//Global Variables
//============================================================================================
var wordBank = ['hahaha', 'slipslisp', 'lolligag', 'lolllloooll']
var remainingIncorrectGuesses = 10;
var correctGuesses = [];
var incorrectGuesses = [];

//Starting the Game
//============================================================================================
//selects random word - WORKS
var hangmanWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log('hangmanWord', hangmanWord);

//breaks word into array of individual letters
lettersInWord = hangmanWord.split("");
console.log("split!", lettersInWord, lettersInWord.length);

//creates the hashes
var secretHolderText = document.getElementById("secret-holder-text")

 var hashes = [];
for (let i = 0; i < lettersInWord.length; i++) {
    hashes.push('-');
}

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
                    console.log(userGuess, i);

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

    secretHolderText.textContent = "look here" + hashesWord;
    
}


//DOM manipulation
//============================================================================================
//QUESTION: does this need to be in the function?
//should print the hashmarks to page, but is NOT WORKING
