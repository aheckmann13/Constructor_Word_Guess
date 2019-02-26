function Letter(char, input) {
    this.char = char;
    this.input = input;
    this.guessed = false;
    this.charOutput = function () {
        this.check();
        if (this.guessed) {
            console.log(this.char);
        }
        else {
            console.log('_ ');
        }
    }
    this.check = function () {
        if (this.input === this.char) {
            this.guessed = true;
            console.log(this.guessed);
        }
    }
};

// var test = new Letter('e','e');
// test.charOutput();

module.exports = Letter;