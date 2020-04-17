var inquirer = require("inquirer");
var colors = require('colors');
var Word = require("./word.js");

var wordList = [
    "wolf",
    "cat",
    "lizard",
    "possum",
    "alligator",
    "bear",
    "axolotl",
    "deer",
    "rabbit",
    "penguin",
    "owl",
    "duck",
    "panda",
    "whale",
    "shark",
    "mongoose",
    "snake",
    "tiger",
    "rat",
    "dog",
    "chimpanzee",
    "gorilla",
    "boar",
    "kangaroo",
    "alpaca",
    "koala"
    ];

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomWord = wordList[Math.floor(Math.random()*wordList.length)];
var constructWord = new Word(randomWord);
var requireNewWord = false;

var incorrectLetters = [];
var correctLetters = [];
var guessesLeft = 10;

function runGame() {
    if (requireNewWord) {
        var randomWord = wordList[Math.floor(Math.random()*wordList.length)];

        constructWord = new Word(randomWord);

        requireNewWord = false;
    }

    var finishedWord = [];
    constructWord.wordLetters.forEach(completeCheck);

    if (finishedWord.includes(false)) {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "userinput",
                    message: "\nGuess the animal! Press any letter to start!"
                }
            ])
            .then(function (input) {
                if (
                    !alphabet.includes(input.userinput) ||
                    input.userinput.length > 1
                ) {
                    console.log("\nPlease Try Again!\n".yellow);
                    runGame();
                } else {
                    if (
                        incorrectLetters.includes(input.userinput) ||
                        correctLetters.includes(input.userinput) ||
                        input.userinput === ""
                    ) {
                        console.log("\nThis letter was already input!/No letter was input!\n".yellow);
                        runGame();
                    } else {
                        var wordCheckArray = [];

                        constructWord.userGuess(input.userinput);

                        constructWord.wordLetters.forEach(wordCheck);
                        if (wordCheckArray.join("") === finishedWord.join("")) {
                            console.log("\nIncorrect!\n".red);

                            incorrectLetters.push(input.userinput);
                            guessesLeft--;
                        } else {
                            console.log("\nCorrect!\n".green);

                            correctLetters.push(input.userinput);
                        }

                        constructWord.log();

                        console.log("\nGuesses Remaining: ".cyan + guessesLeft);

                        console.log(
                            "Letters Already Guessed: ".cyan + incorrectLetters.join(" ") + "\n"
                        );

                        if (guessesLeft > 0) {
                            runGame();
                        } else {
                            console.log("You Lose!\n".bold.red);

                            restartGame();
                        }

                        function wordCheck(key) {
                            wordCheckArray.push(key.guessedLetter);
                        }
                    }
                }
            });
    } else {
        console.log("You Won!\n".bold.green);

        restartGame();
    }

    function completeCheck(key) {
        finishedWord.push(key.guessedLetter);
    }
}

function restartGame() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "restart",
                message: "What do you want to do?",
                choices: ["Play Again", "Exit"]
            }
        ])
        .then(function (input) {
            if (input.restart === "Play Again") {
                requireNewWord = true;
                incorrectLetters = [];
                correctLetters = [];
                guessesLeft = 10;
                runGame();
            } else {
                return;
            }
        });
}

runGame();