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
            targetNumber = Math.floor(Math.random() * 101) + 19;
            blue = Math.floor(Math.random() * crystalUpperLimit - crystalLowerLimit) + crystalLowerLimit;
            clear = Math.floor(Math.random() * crystalUpperLimit - crystalLowerLimit) + crystalLowerLimit;
            purple = Math.floor(Math.random() * crystalUpperLimit - crystalLowerLimit) + crystalLowerLimit;
            red = Math.floor(Math.random() * crystalUpperLimit - crystalLowerLimit) + crystalLowerLimit;

            // display targetNumber
            targetNumberText.text(targetNumber);

            // display chosen random values in console
            console.log("target: " + targetNumber + " | blue: " + blue + " | clear: " + clear + " | purple: " + purple + " | red: " + red);

            // set new game flag to false so the pickNumbers function does not run
            newGame = false;

            // reset output in counterText and gameMessage
            counterText.html("")
            gameMessage.html("");
        }
    }

    // on-click of crystal
    crystal.on("click", function () {

        // assign random numeric values to crystals and target number
        pickNumbers();
    })

    // create function to print the counterNumber based on crystals clicked
    function printCounter() {
        counterText.html(counterNumber);
    }

    // per crystal, create on click function for tallying counterNumber and print the total
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

    // when any crystal is clicked
    crystal.on("click", function () {

        // check to determine if counterNumber exceeds targetNumber resulting in loss
        if (counterNumber > targetNumber) {

            // increment number of losses and print
            losses++;
            lossesText.text(losses);

            // run reset function
            reset();

            // output message stating loss
            gameMessage.html("<h2>You lose. Try again!</h2>")
        };

        // check to see if counterNumber equals targetNumber, resulting in win
        if (counterNumber === targetNumber) {

            // increment number of wins and print
            wins++;
            winsText.text(wins);

            // run reset function
            reset();

            // output message stating win
            gameMessage.html("<h2>Winner!</h2>")
        }
    });

    // function to reset game after win/loss
    function reset() {

        // return newGame status to true to pick new random numbers
        newGame = true;

        // reset counterNumber to 0
        counterNumber = 0;
    };
});