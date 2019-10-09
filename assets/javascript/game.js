//creates wordbank
var wordBank = ['hahaha', 'slipslisp', 'lolligag', 'lolllloooll']
var remainingIncorrectGuesses = 8;
var correctGuesses = [];
var totalGuesses = [];

//selects random word - WORKS
var hangmanWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log('hangmanWord', hangmanWord);

//creates the hashes - WORKS
var hashMarks = [];
function createHashMarks() {
    for (let i = 0; i < hangmanWord.length; i++) {
        hashMarks.push('-');
    }
    return hashMarks;
}

console.log('hashmarks', createHashMarks());

//when user pushes key
var userGuess;
document.onkeyup = function(event) {
    //detects what key is pushed
    userGuess = event.key;
    console.log('userGuess', userGuess);

    if (correctGuesses.indexOf(userGuess) < 0)
    //detects if guess is present in word.  also discounts duplicates
    for (let i = 0; i<hangmanWord.length; i++) {
        if ((hangmanWord.indexOf(userGuess) !== -1) && ) {
            correctGuesses.push(userGuess);

            console.log('Eureka!');
            console.log(correctGuesses);

        }
    
    //detects if guess is NOT present in word
    else if (hangmanWord.indexOf(userGuess) === -1) {
        remainingIncorrectGuesses--
        console.log(remainingIncorrectGuesses);
    }
}
}
