const audio = new Audio('GetOut.mp3');
document.getElementById("button1").onclick = function() {
audio.currentTime = 0;
    audio.play();
}
const audio2 = new Audio('Vineboom.mp3');
document.getElementById("button2").onclick = function() {
    audio2.currentTime = 0;
    audio2.play();
}
const audio3 = new Audio('Rizz.mp3');
document.getElementById("button3").onclick = function() {
    audio3.currentTime = 0;
    audio3.play();
}
const audio4 = new Audio('WompWomp.mp3');
document.getElementById("button4").onclick = function() {
    audio4.currentTime = 0;
    audio4.play();
}
const audio5 = new Audio('sadViolin.mp3');
document.getElementById("button5"). onclick = function() {
    audio5.currentTime = 0;
    audio5.play();
}
const audio6 = new Audio('Bruh.mp3');
document.getElementById("button6").onclick = function() {
    audio6.currentTime = 0;
    audio6.play();
}
const audio7 = new Audio('AirHorn.mp3');
document.getElementById("button7").onclick = function() {
    audio7.currentTime = 0;
    audio7.play();
}
const audio8 = new Audio('IIlumination.mp3');
document.getElementById("button8").onclick = function() {
    audio8.currentTime = 0;
    audio8.play();
}
const audio9 = new Audio('fart.mp3');
document.getElementById("button9").onclick = function() {
    audio9.currentTime = 0;
    audio9.play();
}


 const afbeelding = document.getElementById("myHeart");

afbeelding.addEventListener("click", function () {
  if (afbeelding.src.includes("heart.png")) {
    afbeelding.src = "heartFull.png";
  } else {
    afbeelding.src = "heart.png";
  }
});

const afbeelding1 = document.getElementById("myHeart1");

afbeelding1.addEventListener("click", function () {
  if (afbeelding1.src.includes("heart.png")) {
    afbeelding1.src = "heartFull.png";
  } else {
    afbeelding1.src = "heart.png";
  }
});


const afbeelding2 = document.getElementById("myHeart2");

afbeelding2.addEventListener("click", function () {
  if (afbeelding2.src.includes("heart.png")) {
    afbeelding2.src = "heartFull.png";
  } else {
    afbeelding2.src = "heart.png";
  }
});

 const afbeelding3 = document.getElementById("myHeart3");

afbeelding3.addEventListener("click", function () {
  if (afbeelding3.src.includes("heart.png")) {
    afbeelding3.src = "heartFull.png";
  } else {
    afbeelding3.src = "heart.png";
  }
});
 const afbeelding4 = document.getElementById("myHeart4");

afbeelding4.addEventListener("click", function () {
  if (afbeelding4.src.includes("heart.png")) {
    afbeelding4.src = "heartFull.png";
  } else {
    afbeelding4.src = "heart.png";
  }
});
 const afbeelding5 = document.getElementById("myHeart5");

afbeelding5.addEventListener("click", function () {
  if (afbeelding5.src.includes("heart.png")) {
    afbeelding5.src = "heartFull.png";
  } else {
    afbeelding5.src = "heart.png";
  }
});
 const afbeelding6 = document.getElementById("myHeart6");

afbeelding6.addEventListener("click", function () {
  if (afbeelding6.src.includes("heart.png")) {
    afbeelding6.src = "heartFull.png";
  } else {
    afbeelding6.src = "heart.png";
  }
});
 const afbeelding7 = document.getElementById("myHeart7");

afbeelding7.addEventListener("click", function () {
  if (afbeelding7.src.includes("heart.png")) {
    afbeelding7.src = "heartFull.png";
  } else {
    afbeelding7.src = "heart.png";
  }
});
 const afbeelding8 = document.getElementById("myHeart8");

afbeelding8.addEventListener("click", function () {
  if (afbeelding8.src.includes("heart.png")) {
    afbeelding8.src = "heartFull.png";
  } else {
    afbeelding8.src = "heart.png";
  }
});

getElementById('myHeart').addEventListener('click', () => {
    const targetWindow = document.getElementById('iframeID').contentWindow;
    targetWindow.postMessage('triggerAction', 'https://hoang-heheboi.github.io/Hehe-memes/');
});


window.addEventListener('message', (event) => {
    if (event.origin !== 'https://hoang-heheboi.github.io/sound/') return;
    if (event.data === 'triggerAction') {
   
    }
});

 


