import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jQuery';
import DinoService from './js/dino-service.js';
import Hangman from './js/hangman';



// set up stuff create constructor AFTER getting dino name from API
let promise = DinoService.getDino();
let hangman;
promise.then(function(response){
  const body = JSON.parse(response);
  hangman = new Hangman(body);
  // $('#attempts').html(hangman.failsRemaining);
  $('#outputName').html(hangman.outputName.join(""));
}, (error) => {
  $('#showError').text(`Error retrieving a dinosaur name: ${error}`);
});

//Ui stuff

$("#submit-guess").click(function() {
  const guess = $("#guess-box").val();
  hangman.checkForLetter(guess);
  $("#guess-box").val("");
  // $('#attempts').html(hangman.failsRemaining);
  $('#outputName').html(hangman.outputName.join(""));
  $("#guessed-letters").html(hangman.guesses);
  if (hangman.winGame()) {
    $(".win-game").show();
    $(".game-area").hide();
  }
  if (hangman.loseGame()) {
    $(".lose-game").show();
    $(".game-area").hide();
    $('#outputName').html(hangman.dinosaurName);
  }
});

$(".reset").click(function() {
  location.reload();
  return false;
})