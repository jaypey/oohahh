var timer = setInterval(changeImage, 5000)
var num = 2;
var nbimage = 8;

function changeImage(){
    if(num < nbimage){
        document.getElementById("legif").src="gifs/kermit"+ num +".gif";
        console.log("yep");
        num++;
    }
    else if(num = nbimage){
        num = 1;
    }
}