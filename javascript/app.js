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

var rockIsPicked = rock;
var paperIsPicked = paper;
var scissorsIsPicked = scissors;

var win = 0;
var loss = 0;
var tie = 0;
var score= 0;
// console.log("ready to go")

  $(document).ready(function(){

  //when a specific image is clicked, the other two will disappear
    $(".image").click(function() {

    $("#paper").append("#player");
    $("rock, scissors").hide();


  $(".image").click(function() {

      $("#rock").append("#player");
      $("scissors, paper").hide();


  $(".image").click(function() {

      $("#scissors").append("#player");
      $("rock, paper").hide();

    });
  });

  //if/else if for when an image is picked,
  //and adds a tie, loss, or win for any option chosen
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
    }; return false;

  });


    $("#player").on("click", function() {

      var scissors = $('#scissors').val().trim(); 
      var rock = $('#rock').val().trim(); 
      var paper = $('#paper').val().trim(); 

      console.log(scissors)
      console.log(rock)
      console.log(paper)

    $("#firstBox").empty();

      // $("#firstBox").append("<h1>" + name);
      // $("#firstBox").append("<h4>" + email);
      // $("#firstBox").append("<h4>" + age);


      localStorage.setItem("scissors", scissors);
      localStorage.setItem("rock", rock);
      localStorage.setItem("paper", paper);

      return false;
    });


    var restartGame = function(inputEndGame) {

    var restart = $('<button>Restart</button>').click(function() {
      location.reload();
    });
    var gameState = $("<div>").text(inputEndGame);
      $("body").append(gameState);
      $("body").append(restart);
    };

});