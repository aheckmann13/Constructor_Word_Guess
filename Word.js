var letter = require('./Letter.js');

function Word(word){
    this.letters = [];
    this.word = word;
    this.wordString = function(){
       this.letters.push(new letter(char))
        for (i = 0; i < this.letters.length; i++){
            this.word = this.word + this.letters[i] + ' ';
        }
    }
    // this.callGuess = function(input){
        
        
        
    // }

}
var test2= new Word ()

module.exports = Word;