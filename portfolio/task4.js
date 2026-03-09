let time = 2400;
let timer;

function updateDisplay(){

let minutes = Math.floor(time/60);
let seconds = time % 60;

if(seconds < 10){
seconds = "0" + seconds;
}

document.getElementById("timer").innerHTML = minutes + ":" + seconds;

}

function startTimer(){

timer = setInterval(function(){

if(time > 0){
time--;
updateDisplay();
}
else{
clearInterval(timer);
document.getElementById("message").innerHTML="Time is up!";
}

},1000);

}

function pauseTimer(){
clearInterval(timer);
}

function resetTimer(){

clearInterval(timer);
time = 2400;
updateDisplay();
document.getElementById("message").innerHTML="";

}

updateDisplay();