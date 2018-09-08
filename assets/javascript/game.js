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

    var targetNumberText = $("#target-number-text");
    var winsText = $("#wins-text");
    var lossesText = $("#losses-text");
    var counterText = $("#counter-text");
    var crystal = $(".crystal");


    function pickNumbers() {
        if (newGame) {
            // pick random numbers
            targetNumber = Math.floor(Math.random() * 100);
            blue = Math.floor(Math.random() * 9 + 1);
            clear = Math.floor(Math.random() * 9 + 1);
            purple = Math.floor(Math.random() * 9 + 1);
            red = Math.floor(Math.random() * 9 + 1);

            // display targetNumber
            targetNumberText.text("Target: " + targetNumber);

            console.log("target: " + targetNumber + " | blue: " + blue + " | clear: " + clear + " | purple: " + purple + " | red: " + red);

            newGame = false;
            counterText.html("<h2>Your total score is: </h2>")
        }
    }

    



    // on-click of crystal
    crystal.on("click", function () {

        // assign random numeric values to crystals and target number
        pickNumbers();

        // calculate and display counter value

        // if counter equals target number, tally win and clear value of crystals and target number

        // otherwise, if counter exceeds target number, tally loss and clear value of crystals and target number

        // restart game

    })
    var clearCrystal = $("#clear-crystal");
    var purpleCrystal = $("#purple-crystal");
    var redCrystal = $("#red-crystal");

    $("#blue-crystal").on("click", function () {
        counterNumber = counterNumber + blue;
        console.log(counterNumber);
        counterText.html("Your total score is: " + counterNumber);

    });

    $("#clear-crystal").on("click", function () {
        
    })

})