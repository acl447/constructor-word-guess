function Letter() {

    this.character = "";
    
    this.letterGuessed = false;
    
    this.showLetter = function() {

        if (this.letterGuessed === true) {

            return this.character;
        } else {

            return "_";
        }
    };

    this.checkLetter = function(guessedLetter) {

        if (guessedLetter === this.character) {

            this.letterGuessed = true;


        }


    }


}