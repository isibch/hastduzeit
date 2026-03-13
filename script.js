const envelope = document.querySelector('.envelope');
const screenStart = document.querySelector('.screen-start');
const screenQuestion = document.querySelector('.screen-question');
const screenAnswer = document.querySelector('.screen-answer');

const yesButton = document.querySelector('#yes-button');
const noButton = document.querySelector('#no-button');

const countdown = document.querySelector('#countdown');
const answerContent = document.querySelector('.answer-content');
const gifStage = document.querySelector('.gif-stage');
const finalSong = document.querySelector('#final-song');
const finalGifs = document.querySelectorAll('.final-gif');

let yesScale = 1;

envelope.addEventListener("click", function() {
    
    envelope.classList.add("open");

    setTimeout(function() {
        screenStart.style.display = "none";
        screenQuestion.style.display = "flex";

        setTimeout(() => {
            screenQuestion.classList.add("show");
        }, 10);
}, 500);
});

yesButton.addEventListener("click", function() {
    screenQuestion.style.display = "none";
    screenAnswer.style.display = "flex";

    finalSong.play();

    setTimeout(function() {
        startCountdown();
    }, 2000);
});

noButton.addEventListener("click", function() {
   yesScale = Math.min(yesScale + 0.1, 3);
    yesButton.style.transform = `scale(${yesScale})`;
    
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    
    noButton.style.transform = `translate(${x}px, ${y}px)`; 
}); 

function startCountdown() {
    let count = 5;
    countdown.textContent = count;

    const interval = setInterval(function() {
        count--;
        countdown.textContent = count;

        if (count <= 0) {
            clearInterval(interval);

            document.querySelector('.answer-text').style.display = "none";
            gifStage.style.display = "block";
        }
    }, 1000);
}