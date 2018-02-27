
var wins = 0;
var loses = 0;
var guesses = 9;
var guessed = [];
var computerchoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var computerguess = computerchoices[Math.floor(Math.random() * computerchoices.length)];

document.onkeyup = function(event) {

    var userguess = event.key.toLowerCase();

    if (userguess === computerguess){
        wins++;
        guesses = 9; 
        computerguess = computerchoices[Math.floor(Math.random() * computerchoices.length)];
        guessed = [];
    }

    if (userguess !== computerguess){
        guesses--;
        guessed.push(userguess);
    }

    if (guesses === 0) {
        loses++;
        guesses = 9;
        computerguess = computerchoices[Math.floor(Math.random() * computerchoices.length)];
        guessed = [];
    }
   
    var html = 
        "<h1> The Psychic Game </h1>" +
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + loses + "</p>" +
        "<p>Guesses Left: " + guesses + "</p>" +
        "<p>Your Guesses so far: " + guessed.join(", ") + "</p>";

    document.querySelector("#game").innerHTML = html;

}
