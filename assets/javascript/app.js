$(document).ready(function() {
    //Load Firebase dependencies
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDP-2P7R_uS9kElyDOtp_LcxbokjUQTas4",
        authDomain: "rps-6f750.firebaseapp.com",
        databaseURL: "https://rps-6f750.firebaseio.com",
        projectId: "rps-6f750",
        storageBucket: "",
        messagingSenderId: "1076858570398",
        appId: "1:1076858570398:web:763c226e0b61801c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //Establish variables
    var database = firebase.database();
    console.log("TEST")
        //Listen for unique user, generate an instance of the game
        //indicate that user is now waiting for a second user
        //When second user arrives, start game
        //Allow each player to seperately pick Rock, Paper or Scissors withOUT the other player being able to tell what's being picked
        //When both players have picked a hand, countdown 3 seconds (or similar amount of time) and display results
    var rpsCheck = function(playerOneChoice, playerTwoChoice) {
        if (playerOneChoice === playerTwoChoice) {
            return "Tie!"
        }
        if (playerOneChoice === "rock") {
            if (playerTwoChoice === "paper") {
                return "Player 2 Wins!"
            } else {
                return "Player 1 Wins!"
            }
        }
        if (playerOneChoice === "paper") {
            if (playerTwoChoice === "scissors") {
                return "Player 2 Wins!"
            } else {
                return "Player 1 Wins!"
            }
        }
        if (playerOneChoice === "scissors") {
            if (playerTwoChoice === "rock") {
                return "Player 2 Wins!"
            } else {
                return "Player 1 Wins!"
            }
        }
    }
    $("#playerOneButton").click(function() {
            var playerOne;
        })
        // Offer a quit and a rematch button
    console.log(rpsCheck("rock", "paper"))
        //Hide player options on screen
    $(".playerone>.choices").hide();
    $(".playertwo>.choices").hide();

})