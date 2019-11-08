// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// * Theme Switching 
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

let darkTheme = true;
let body = document.getElementsByTagName("body")[0];

function switchTheme(doTheHandThing) {
    body.classList.add("loaded")
    if (darkTheme) {
        body.classList.add("lightTheme")
        setTimeout(() => {
            if (doTheHandThing) {
                closeTheLights()
            }
        }, 500);
    } else {
        body.classList.remove("lightTheme")
    }
    darkTheme = !darkTheme
}


let h2 = document.getElementById("handyH2");

if (h2) {
    window.onresize = positionHand;
    
    function positionHand() {
        let h2Info = h2.getBoundingClientRect()
        let hand = document.getElementById("hand")
        
        if (h2Info.width + 100 > window.innerWidth) {
            hand.style.top = (h2Info.top - 45) + "px"
            hand.style.left = (h2Info.width - 45) + "px"
        } else {
            hand.style.top = h2Info.top + "px"
            hand.style.left = h2Info.left + h2Info.width + "px"
        }
    }
    positionHand()
}

let closing = false;

function closeTheLights() {
    if (closing || darkTheme) {
        return;
    }
    closing = !closing
    let lightInfo = document.getElementById("themeSwitcher").getBoundingClientRect()
    let hand = document.getElementById("hand")
    
    hand.style.transition = '2s';
    hand.style.left = lightInfo.left + 'px';
    hand.style.top = lightInfo.top + 'px';
    setTimeout(() => {
        positionHand()
        switchTheme()
        closing = !closing
        setTimeout(() => {
            hand.style.transition = '0s';
        }, 2000);
    }, 2000);
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// * Language Switching 
// * Inspired by:
// * https://www.smashingmagazine.com/2014/06/css-driven-internationalization-in-javascript/
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

let currrentLang = 'en'
let main = document.getElementsByTagName('main')[0]
function switchLang() {
    main.classList.add("loaded")
    main.style.opacity = 0;
    setTimeout(() => {
        if (document.documentElement.lang == "fr") {
            document.documentElement.lang = "en"    
        } else {
            document.documentElement.lang = "fr"
        }
        main.style.opacity = 1;   
        main.classList.remove("loaded") // else theme switching gets weird...
        positionHand()
    }, 250);
}

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
    var m = addZeroIfNeeded(today.getMonth()+1);
    var d = addZeroIfNeeded(today.getDate());

    document.getElementById('time').innerHTML = d + "/" + m + "/" + y;
    t = setTimeout(function() {
        startTime()
    }, 5000);
}
startTime();

function funnyGuy() {
    document.getElementById("jokeP").innerHTML += "😛"
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