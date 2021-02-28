var timer = setInterval(changeImage, 5000)
var num = 2;
var nbimage = 8;
var start = false;

function changeImage(){
    if(start){
        if(num < nbimage){
            document.getElementById("legif").src="gifs/kermit"+ num +".gif";
            console.log("yep");
            num++;
        }
        else if(num = nbimage){
            num = 1;
        }
    }
    else{
        console.log("Nah")
    }
}

function play(){
    var audio = document.getElementById("audio");
    var image = document.getElementById("legif");
    var button = document.getElementById("buttonplay")
    image.style.display = "block";
    button.style.display = "none";
    start = true;
    audio.play();
    console.log("Pressed");
}