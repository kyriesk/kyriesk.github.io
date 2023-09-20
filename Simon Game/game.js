
let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let toggle = false;
let level = 0;

$(document).keypress(function(event) {
    if (!toggle) {
        $("#level-title").text("level " + level)
        nextSequence();
        toggle = true;
    }
})

$(".btn").click(function () {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1)
});


function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] !== userClickedPattern[currentLevel]) {
        playSound("wrong");

        $("body").addClass("game-over");

        setTimeout(function() {
            $("body").removeClass("game-over");
        },200);

        $("h1").text("Game Over, Press Any Key to Restart");

        startOver();
    } 

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            },1000);
        };
}

function nextSequence() {



    level++;
    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    userClickedPattern = [];
}

function startOver() {
    gamePattern = [];
    level = 0;
    toggle = false;
}

function playSound(name) {

    var audio = new Audio("sounds/" + name +".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColour).removeClass('pressed');
      }, 100);
}



