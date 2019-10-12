# Word-Guess-Game

**Intro**
Welcome to my Word-Guess-Game!

My theme is Happy Birthday.  I'm not sure why, it just felt right.


**How it works**
When the page is loaded, there are instructions to press any letter to start.  Once a button is pressed, the instructions disappear.  

My code detects what type of key is pressed - if it's a-z, it accepts it as a guess, otherwise it notifies the player to use a-z.  It also converts from upper to lower case.  As correct guesses accumulate, the hash markers turn to the correct letters.  As incorrect guesses accumulate, they are added to the incorrect guesses array.  Duplicate guesses are ignored.  

Once there are no more hashes, the victory conditions are met and an alert appears.  The wins tally is incremented, and (per instructions) the game restarts.  If you run out of guesses, then the losing conditions are met.  The victory tally is not incremented, and the game restarts.


**Other notes**
Per the bonus instructions, I've organized my game code as an object (for the most part).

I've left fairly detailed notes within my code to help follow the logic of my program, and the lack thereof.

I've also included a javascript file where the code is not in an object, which is how I originally wrote it.  The script source line is commented out on the index.html page.

