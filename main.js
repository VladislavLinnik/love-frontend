const audio = new Audio('audio.mp3');
const controlBtn = document.querySelector('#controlBtn');
const image = document.querySelector('#image');
const INTERVAL = 200;
let INTERVAL_ID;
let isPlaying;
let index = 1;

controlBtn.addEventListener("click", switchState);
audio.loop = true;

function switchState() {
    if (!isPlaying) {
        play();
    } else {
        pause();
    }
}

function play() {
    controlBtn.classList.toggle('isPlaying');
    isPlaying = !isPlaying;
    audio.play();
    changeImages();
}

function pause() {
    controlBtn.classList.toggle('isPlaying');
    isPlaying = !isPlaying;
    audio.pause();
    clearInterval(INTERVAL_ID);
}

function changeImages() {
    INTERVAL_ID = setInterval(() => {
        if (index < 12) {
            ++index;
        } else {
            index = 1;
        }
        image.src = `images/${index}.jpeg`;
    }, INTERVAL);
}