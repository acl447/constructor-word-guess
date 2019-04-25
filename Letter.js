const inquirer = require("inquirer");


function Letter(character) {


    this.character = character;

    this.letterGuessed = false;

    this.checkLetter = function () {

        inquirer
            .prompt([
                {
                    type: "input",
                    name: "letter",
                    message: "Guess a letter!"
                }
            ])
            .then(answers => {
                let guessedLetter = answers.letter;

                if (guessedLetter === this.character) {

                    this.letterGuessed = true;

                }

            })


    };

    checkLetter();

    this.showLetter = function () {

        if (this.letterGuessed === true) {

            return console.log(this.character);

        }

        else {

            return console.log("_");
        }
    };

  


};

Letter("a");

module.exports = Letter;