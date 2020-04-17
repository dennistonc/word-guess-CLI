var Letter = require("./letter.js");

function Word(wholeWord) {
    this.wordLetters = [];

    for (var i = 0; i < wholeWord.length; i++) {
        var letter = new Letter(wholeWord[i]);
        this.wordLetters.push(letter);
    }

    this.log = function() {
        wholeAnswer = "";
        for (var i = 0; i < this.wordLetters.length; i++) {
            wholeAnswer += this.wordLetters[i] + " ";
        }
        console.log(wholeAnswer);
    };

    this.userGuess = function(input) {
        for (var i = 0; i < this.wordLetters.length; i++) {
            this.wordLetters[i].guess(input);
        }
    };
}

module.exports = Word;

