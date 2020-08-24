var drums = document.querySelectorAll(".drum").length;
for (var count = 0;count < drums;count++){
    document.querySelectorAll(".drum")[count].addEventListener("click",function(event){
        event.currentTarget.classList.add("active");
        setTimeout(function() {
            if(document.querySelector(".drum.active")!== null)
            document.querySelector(".drum.active").classList.remove("active");
        }, 100);
        playsound(event.currentTarget.textContent);
        buttonAnimation(event.currentTarget.textContent);
        });
    document.addEventListener("keypress",function(event){
        if(document.querySelector("."+event.key) !== null){
            document.querySelector("."+event.key).classList.add("active");
        }
        setTimeout(function() {
            if(document.querySelector(".drum.active")!== null)
            document.querySelector(".drum.active").classList.remove("active");
        }, 100);
        playsound(event.key);
        buttonAnimation(event.key);
    });
}
function playsound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var bass = new Audio("sounds/kick-bass.mp3");
            bass.play();
            break;
        default:
            console.log("Not a valid key")
            break;
    }
}
function buttonAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function() {
        if(document.querySelector(".pressed")!== null)
        document.querySelector(".pressed").classList.remove("pressed"); 
    }, 100);
}