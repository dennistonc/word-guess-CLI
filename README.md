# Word Guess CLI App

### Week 11 Homework
**About This Homework**

This app is a CLI word guessing game that receives user input using `inquirer` npm packages, and through Node.js we can play the game.

Index.js contains the logic for the course of the game. `index.js` depends on `word.js` which depends on `letter.js`. Both word.js and letter.js contain constructors which are then exported to index.js respectively. 

  
**How it Works**

To start, the user uses node and types `node index.js`. The game then asks in the command line to pick a letter to start.
![Starting Point](/images/CLI-1-start.png)

Once letter is picked and entered, a prompt will show up showing the remaining guesses. It will also display correct/incorrect/invalid guesses. 
![Correct and Incorrect Choices Displayed](/images/CLI-2-correct-incorrect.png)

If correct, the corresponding blanks will fill in with the correct letters; if not, no letters will populate on the blanks.
![Correct Guess and Win! Option to Exit or Play Again](/images/CLI-3-win.png)

Once the user has won or lost, there is an option to play again or exit.
![Invalid Option, Incorrect Guess, and Loss! Option to Exit or Play Again](/images/CLI-4-invalid-lose.png)


