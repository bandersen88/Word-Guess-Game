var car = {
    guessWordList: ["Gazorpazorp", "Rick", "Morty"],
    guessWord1: ["G","a","z","o","r","p","a","z","o","r","p"],
    guessWord2: ["R","i","c","k"],
    guessWord3: ["M","o","r","t","y"],
    // dualArray: [
    //     ["Gazorpazorp"],["g","a","z","o","r","p","a","z","o","r","p"],
    //     ["Rick"],["R","i","c","k"],
    //     ["Morty"],["M","o","r","t","y"]
    // ],
    guessWordIndex: 2,

    createCharList: function(x, y) {

        var ul = document.getElementById("guessWordCharList");
        var li = document.createElement("li");

        li.appendChild(document.createTextNode(x));
        ul.appendChild(li);
        li.setAttribute("id", y)
    },

    // function to choose the next word in the list of guess words and create list items for each character
    populateBlanks: function() {

        guessWord = this.guessWordList[this.guessWordIndex];

        alert("Guessword: " + guessWord);

        for (i = 0; i < this.guessWord2.length; i++) {
            this.createCharList("__ ", i);
        }
    },

    checkCharacter: function(x) {

        var textnode = document.createTextNode("Water");

        alert("Keypress: " + x);
        for (i = 0; i < this.guessWord2.length; i++) {
            //alert("i - " + i);
            //alert("keypress - " + x);
            if(this.guessWord2[i] == x) {
                var item = document.getElementById("myList").childNodes[0];
                item.replaceChild(textnode, item.childNodes[0]);
                //document.getElementById("2").node.nodeValue = "rar";
                //document.getElementById(i).childNodes[0].replaceChild(textnode, this.guessWord2[i]);
                //document.getElementById(i).appendChild(document.createTextNode("rar"));
            }
        }
    }

};

document.onkeyup = function(event) {

      var keyPress = event.key;

      console.log(keyPress)

        if (keyPress == "c") {
            car.createCharList();
        } else if (keyPress == "p") {
            car.populateBlanks();
        }

        car.checkCharacter(keyPress);
    }


