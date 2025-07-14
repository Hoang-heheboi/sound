const audio = new Audio('GetOut.mp3');
document.getElementById("button1").onclick = function() {
audio.currentTime = 0;
    audio.play();
}