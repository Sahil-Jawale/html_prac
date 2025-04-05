var num = document.querySelectorAll(".drum").length;

for(var i= 0; i< num; i++ ){
    document.querySelectorAll("button")[i].addEventListener("click", click);
}


    document.addEventListener("keydown", function(KeyboardEvent){
        makesound(KeyboardEvent.key);
        button_animation(KeyboardEvent.key)
    });




function click(){
    // this.style.color = "blue";
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();
    var button_innerHTML = this.innerHTML;
    makesound(button_innerHTML);
    button_animation(button_innerHTML);

   
}

function makesound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;


        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;


        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    
    
        

        default:
            break;
    }       
}

function button_animation(current_key){
    var active_button = document.querySelector("." + current_key);

    if (active_button){
        active_button.classList.add("pressed");
    

    setTimeout(function(){
        active_button.classList.remove("pressed");

        }, 100);
    }       
}