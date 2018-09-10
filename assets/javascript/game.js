$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var blue = 0;
    var clear = 0;
    var purple = 0;
    var red = 0;
    var targetNumber = "";
    var counterNumber = 0;
    var newGame = true;
    var crystalUpperLimit = 12
    var crystalLowerLimit = 1

    var targetNumberText = $("#target-number-text");
    var winsText = $("#wins-text");
    var lossesText = $("#losses-text");
    var counterText = $("#counter-text");
    var crystal = $(".crystal");
    var gameMessage = $("#game-message");

    function pickNumbers() {
        if (newGame) {
            // pick random numbers
            targetNumber = Math.floor(Math.random() * 101 + 19);
            blue = Math.floor(Math.random() * crystalUpperLimit - crystalLowerLimit) + crystalLowerLimit;
            clear = Math.floor(Math.random() * crystalUpperLimit - crystalLowerLimit) + crystalLowerLimit;
            purple = Math.floor(Math.random() * crystalUpperLimit - crystalLowerLimit) + crystalLowerLimit;
            red = Math.floor(Math.random() * crystalUpperLimit - crystalLowerLimit) + crystalLowerLimit;

            // display targetNumber
            targetNumberText.text("Target: " + targetNumber);

            console.log("target: " + targetNumber + " | blue: " + blue + " | clear: " + clear + " | purple: " + purple + " | red: " + red);

            newGame = false;
            counterText.html("<h2>Total Score: </h2>")
            gameMessage.html("");
        }
    }

    // on-click of crystal
    crystal.on("click", function () {

        // assign random numeric values to crystals and target number
        pickNumbers();
    })

    function printCounter() {
        counterText.html("Total Score: " + counterNumber);
    }

    $("#blue-crystal").on("click", function () {
        counterNumber = counterNumber + blue;
        console.log(counterNumber);
        printCounter();
    });

    $("#clear-crystal").on("click", function () {
        counterNumber = counterNumber + clear;
        console.log(counterNumber);
        printCounter();
    });

    $("#purple-crystal").on("click", function () {
        counterNumber = counterNumber + purple;
        console.log(counterNumber);
        printCounter();
    });

    $("#red-crystal").on("click", function () {
        counterNumber = counterNumber + red;
        console.log(counterNumber);
        printCounter();
    });

    crystal.on("click", function() {
        if (counterNumber > targetNumber) {
            losses++;
            lossesText.text("Losses: " + losses);
            reset();
            gameMessage.html("<h2>You lose. Try again!</h2>")
        };
        
        if(counterNumber === targetNumber) {
            wins++;
            winsText.text("Wins: " + wins);
            reset();
           gameMessage.html("<h2>Winner!</h2>")
        }
    });

    function reset() {
        newGame = true;
        counterNumber = 0;
    };
});