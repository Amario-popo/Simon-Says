const color1 = document.querySelector('.color1');   // Green   
const color2 = document.querySelector('.color2');   // Blue
const color3 = document.querySelector('.color3');   // Red
const color4 = document.querySelector('.color4');   // Yellow
const countValue = document.getElementById("count");
const colorPart = document.querySelectorAll(".color-part");
const container = document.querySelector(".container");
const startButton = document.querySelector("#start");
const result = document.querySelector("#result");
const wrapper = document.querySelector(".wrapper");

// function to start the game
// function startgame() {

// count at start of game
let count = 0

// data dictionary for the colorpanels
const colorDict = {
    "color1": {
        on: "#40d712",
        off: "#266513",
        playSound: (muted = false) => {
            const audio = new Audio('../audio/bajajajo.mp3')
            audio.muted = muted
            audio.play()
        }
    },
    "color2": {
        on: "#105be9",
        off: "#0A275D",
        playSound: (muted = false) => {
            const audio = new Audio('../audio/hah.mp3')
            audio.muted = muted
            audio.play()
        }
    },
    "color3": {
        on: "#e20f0f",
        off: "#660C0C",
        playSound: (muted = false) => {
            const audio = new Audio('../audio/kys1.mp3')
            audio.muted = muted
            audio.play()
        }
    },
    "color4": {
        on: "#fdd600",
        off: "#786607",
        playSound: (muted = false) => {
            const audio = new Audio('../audio/ladudu.mp3')
            audio.muted = muted
            audio.play()
        }
    }
}

const randomColor = () => {
    const colors = [
        color1,
        color2,
        color3,
        color4
    ];
    return colors[parseInt(Math.random() * colors.length)]
}

const seq = [randomColor()];
let seqGuess = [...seq];

const change = (color) => {
    return new Promise(resolve => {
        let colorClass = color.className.split(" ")

        color.style.backgroundColor = colorDict[colorClass[0]].on
        // colorDict[colorClass[0]].playSound()

        setTimeout(() => {
            color.style.backgroundColor = colorDict[colorClass[0]].off
            setTimeout(() => {
                resolve();
            }, 250);
        }, 1000)
    })
};

let enableClick = false;
const colorClicked = colorClicked => {
    if (!enableClick) return;
    const correctGuess = seqGuess.shift();
    if (correctGuess === colorClicked){
        if (seqGuess.length === 0) {
            count++
            countValue.innerHTML = count
            // new round
            seq.push(randomColor());
            seqGuess = [...seq]
            startChanging();
        }
    } else {
        window.location.replace("./index.html");
    }
};

const startChanging = async () => {
    enableClick = false;
    for (const color of seq) {
        await change(color);
    }
    enableClick = true; 
}

startChanging();


