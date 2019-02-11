var game = {
    guessWordIndex: 0,
    gameIndex: 0,
    gameStarted: false,
    score: 0,
    wordGuessed: false,
    guessWordList: ["Rick", "Snuffles", "Gazorpazorp"],
    hintList: ["The smartest man in the universe", "Mortys Dog's name.", "Planet where the most aggressive creatures in the universe live"],
    guessWordArray: [],
    alphabet: [
        ["a",0],
        ["b",0],
        ["c",0],
        ["d",0],
        ["e",0],
        ["f",0],
        ["g",0],
        ["h",0],
        ["i",0],
        ["j",0],
        ["k",0],
        ["l",0],
        ["m",0],
        ["n",0],
        ["o",0],
        ["p",0],
        ["q",0],
        ["r",0],
        ["s",0],
        ["t",0],
        ["u",0],
        ["v",0],
        ["w",0],
        ["x",0],
        ["y",0],
        ["z",0],
    ],

    createCharList: function(x) {

        var element = document.createElement("div");
        element.className = "blank";
        element.id = x;
        element.appendChild(document.createTextNode('-'));
        document.getElementById('guessWordBox').appendChild(element);

    },

    populateGuessWordArray: function(newSize, guessWord) {

        this.guessWordArray = [];

        for (i = 0; i < newSize; i++) {
            this.guessWordArray.push(guessWord.charAt(i));
        }
    },

    // function to choose the next word in the list of guess words and create list items for each character
    populateBlanks: function() {

        //clear list
        var p = document.getElementById("guessWordBox");
        while(p.firstChild) p.removeChild(p.firstChild);

        val = this.guessWordList[this.guessWordIndex]
        size = val.length;

        this.populateGuessWordArray(size,val);

        for (i = 0; i < size; i++) {
            this.createCharList(i);
        }

        this.populateHint();

        this.guessWordIndex++;
    },

    checkCharacter: function(x) {

        for (i = 0; i < this.guessWordArray.length; i++) {
            if(this.guessWordArray[i].toLowerCase() == x.toLowerCase()) {
                document.getElementById(i).childNodes[0].nodeValue = this.guessWordArray[i]
            }
        }

        this.logCharacterUsed(x);
        this.setAlaphabetClass();
        this.checkWord();

    },

    logCharacterUsed: function(x) {
        
        for(i = 0; i < this.alphabet.length; i++) {
            if(x.toLowerCase() == this.alphabet[i][0]) {
                this.alphabet[i][1] = 1;
            }
        }
        
        console.log(this.alphabet);
    },

    checkWord: function() {

        var p = document.getElementById("guessWordBox");
        var items = p.getElementsByTagName("div");
        this.wordGuessed = true;

        for (i = 0; i < items.length; i++) {
            if (items[i].childNodes[0].nodeValue == "-") {
                this.wordGuessed = false;
            }
        }   

    },

    populateHint: function() {

        document.getElementById("hint").innerHTML = this.hintList[this.guessWordIndex];
    },

    setAlaphabetClass: function () {

        for (i = 0; i < this.alphabet.length; i++) {
            if(this.alphabet[i][1] === 1) {
                var d = document.getElementById(this.alphabet[i][0]);
                d.classList.add("guessed");
            } else {
                var d = document.getElementById(this.alphabet[i][0]);
                d.classList.remove("guessed");
            }
        }

    },

    resetAlphabetArray: function() {

        for(i = 0; i < this.alphabet.length; i ++) {
            this.alphabet[i][1] = 0;
        }
    },

    finished: function() {
        alert("You have finished the game");
    }

};


document.onkeyup = function(event) {

    if (!game.gameStarted) {
        game.populateBlanks();   
        game.gameStarted = true; 
    } else if (game.wordGuessed === true) {
        if (game.guessWordIndex == game.guessWordList.length) {
            game.finished();
        } else {
            game.populateBlanks();
            game.resetAlphabetArray();
            game.setAlaphabetClass();
            game.wordGuessed = false;
        }
    } else {
        var keyPress = event.key;
        game.checkCharacter(keyPress);
        if (game.wordGuessed) {
            
        }
    }
}