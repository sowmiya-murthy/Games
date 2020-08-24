$(function(){
    var gamePattern = [];
    var buttonColours  = ["red", "blue", "green", "yellow"];
    var userClickedPattern = [];
    var level = 0;
    var flag = true;

    function nextSequence(){
        userClickedPattern = [];
        var randomNumber = Math.floor(Math.random()*4);
        var randomChosenColour = buttonColours[randomNumber];
        gamePattern.push(randomChosenColour);
        $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        playSound(randomChosenColour);
        level++;
        $("h1").text("Level "+level);
    }

    $(".btn").click(function(event){
        var userChosenColour = event.currentTarget.id;
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length-1);
    });

    $(document).keypress(function(event) {
        if (flag) {
          $("h1").text("Level " + level);
          nextSequence();
          flag = false;
        }
      });

    function animatePress(currentColour){
        $("#"+currentColour).addClass("pressed");
        setTimeout(function () {
            $("#"+currentColour).removeClass("pressed");
        }, 100);
    }
    
    function playSound(name){
        var blue = new Audio("sounds/"+name+".mp3");
        blue.play();
    }
    
    function checkAnswer(currentLevel){
        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
            if (userClickedPattern.length === gamePattern.length){
              setTimeout(function () {
                nextSequence();
              }, 1000);
            }
          } else {
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            },200)
            $("h1").text("Game Over, Press Any Key to Restart");
            var wrong = new Audio("sounds/wrong.mp3");
            wrong.play();
            startOver();
          }      
    }

    function startOver(){
        level = 0;
        gamePattern = [];
        flag= true;
    }
});