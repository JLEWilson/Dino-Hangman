import DrawHangman from "./drawHangman";

export default class Hangman{
  constructor(array){
    this.dinosaurName = array[0][0].toUpperCase();
    this.outputName = this.nameInUnderscores();
    this.failsRemaining = 9;
    this.guesses = [];
    this.hangman = new DrawHangman();
  }

  nameInUnderscores(){
    const wordArray = this.dinosaurName.split("");
    let outputArray = [];
    wordArray.forEach(letter => {
      outputArray.push("_");
    });
    return outputArray;
  }
  checkForLetter(letter){
    const upperCase = letter.toUpperCase();
    if (this.dinosaurName.indexOf(upperCase) === -1) {
      this.decrementFails();
      this.guesses.push(upperCase);
      
    } else {
      this.replaceLetter(upperCase);
    }
  }
  
  replaceLetter(letter){
    for (let i = 0; i < this.dinosaurName.length; i ++) {
    if (letter === this.dinosaurName[i]) {
      this.outputName[i] = letter;
      }
    }
  }

  decrementFails(){
    this.failsRemaining --;
    this.hangman.draw(this.hangman.draws[this.hangman.step++])
    if (undefined === this.hangman.draws[this.hangman.step]) this.disabled = true;
  }
  winGame(){
    if(this.outputName.includes("_")){
      return false;
    } else {
      return true;
    }
  }
  loseGame(){
    if (this.failsRemaining === 0){
      return true;
    } else {
      return false;
    }
  }
}