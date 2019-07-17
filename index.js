// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// * Footer Timer Thingy 
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function addZeroIfNeeded(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var y = today.getFullYear();
    var M = addZeroIfNeeded(today.getMonth()+1);
    var d = addZeroIfNeeded(today.getDate());
    var h = today.getHours();
    var m = addZeroIfNeeded(today.getMinutes());
    var s = addZeroIfNeeded(today.getSeconds());

    document.getElementById('time').innerHTML = d + "/" + M + "/" + y + " " + h + ":" + m + ":" + s;
    t = setTimeout(function() {
        startTime()
    }, 500);
}
startTime();

function funnyGuy() {
    document.getElementById("jokeP").innerHTML = " No, not really."
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// * i18n 
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

let i18n = {
    "en" : {
        
    },
    "fr" : {

    }
}

    
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// * Konami Code Party 
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// the 'official' Konami Code sequence
var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
window.addEventListener('keydown', function(e) {
var key = e.code;
var requiredKey = konamiCode[konamiCodePosition];
if (key == requiredKey) {
    console.log("😱")
    konamiCodePosition++;

    if (konamiCodePosition == konamiCode.length) {
    activateCheat();
    konamiCodePosition = 0;
    }
} else {
    konamiCodePosition = 0;
}
});

function activateCheat() {
    document.body.style.animation = "crazyBG 2s infinite";

    var screenWidth = screen.width

    for(var i = 0; i < screenWidth; i+=100) {
        var node = document.createElement("span");
        node.innerHTML = "🎉"
        node.style.animation = "fall 5s infinite linear, rotate 4s infinite linear"
        node.className += "joy"
        node.style.left = i + "px"
        document.body.appendChild(node);       
    }
    var congrats = document.createElement("h1");
    congrats.innerHTML = "¡CONGRATULATIONS!"
    congrats.className += "wow"
    document.body.appendChild(congrats)
}   