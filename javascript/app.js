// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCZkh0DajG2-PJ_CKS1LZIPjuHY1okFV_g",
    authDomain: "rockpaperscissors-6404d.firebaseapp.com",
    databaseURL: "https://rockpaperscissors-6404d.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "770214253444"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var player;
var enemey;

var rock;
var paper;
var scissors;

var win = 0;
var loss = 0;
var tie = 0;
var score= 0;
// console.log("ready to go")

  $(document).ready(function(){



  $("#player").click(function() {

    $("#paper").appendTo("firstBox");
    $("#rock, #scissors").hide("#firstBox");

  });

  $("#player").click(function() {

      $("#rock").appendTo("#firstBox");
      $("#scissors, #paper").hide("#firstBox");
  });

  $("#player").click(function() {

      $("#scissors").appendTo("#firstBox");
      $("#rock, #paper").hide("#firstBox");
  });

  $("button").click(function(){

    var rockIsPicked = function(){

      if (rock == rock){
        tie++
      }else if(rock == paper){
        loss++
      }else if(rock == scissors){
        win++
      }
    };

    var paperIsPicked = function(){

      if (paper == paper){
        tie++
      }else if(paper == scissors){
        loss++
      }else if(paper == rock){
        win++
      }
    };

    var scissorsIsPicked = function(){

      if (scissors == scissors){
        tie++
      }else if(scissors == rock){
        loss++
      }else if(scissors == paper){
        win++
      }
    };


    $("score").on(function() {
    $("#player").html("win");
    $("#player").html("loss");
    $("#player").html("tie");
    });

    //get elements




    // function(errorObject){
    //   console.log("Errors handled: " + errorObject.code)
    // };

    return false;
  });

});
