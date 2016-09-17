var config = {
    apiKey: "AIzaSyAJS4YQWU5DmESeYueG1qH1NGkjv3DncEY",
    authDomain: "fir-click-counter-7cdb9.firebaseapp.com",
    databaseURL: "https://fir-click-counter-7cdb9.firebaseio.com",
    storageBucket: "fir-click-counter-7cdb9.appspot.com",
  };
  firebase.initializeApp(config);

var database = firebase.database();

var playerOne = player;
var playerTwo = enemy;

var scissorsCount = 0;
var paperCount = 0;
var rockCount = 0;

var score = 0;
var win = 0;
var loss = 0;
var tie = 0;
// console.log("ready to go")


$(document).ready(function() {



//the outcomes if player one picks
  function pickAnImage(result){
    var playerOne = playerTwo[Math.floor(math.random() * playerTwo.length)];

      if ((playerOne == "rock") && (playerTwo == "scissors")){
        win++;

      }else if ((playerOne == "scissors") && (playerTwo == "paper")){
        win++;

      }else if ((playerOne == "paper") && (playerTwo == "rock")){
        win++;

      }else if ((playerOne == "rock") && (playerTwo == "paper")){
        loss++;

      }else if ((playerOne == "paper") && (playerTwo == "scissors")){
        loss++;

      }else if ((playerOne == "scissors") && (playerTwo == "rock")){
        loss++;

      }else if (playerOne == playerTwo){
        tie++;

      }

});