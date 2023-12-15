let time = 60;
let score = 0;
let hitrn = 0;


function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").innerHTML = score;
}

function decreaseScore() {
    if (score > 0) {
        score -= 10;
        document.querySelector("#scoreval").innerHTML = score;
    }
    else {
        document.querySelector("#p-btm").innerHTML = "<h1>You've lost! Try Again.</h1>";
    }
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").innerHTML = hitrn;
}

function makeBubble() {
    let clutter = "";

    for (let i = 1; i <= 96; i++) {
        let rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#p-btm").innerHTML = clutter;
}

function runTimer() {
    let timer = setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector("#timerval").innerHTML = time;
        }
        else {
            clearInterval(timer);
            document.querySelector("#p-btm").innerHTML = "<h1>Game Over</h1>";
        }
    }, 1000);
}

document.querySelector("#p-btm").addEventListener("click", (details) => {
    let clickedNum = Number(details.target.innerHTML);
    if (clickedNum == hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
    else {
        makeBubble();
        getNewHit();
        if (score > 0) {
            decreaseScore();
        }
        else {
            document.querySelector("#p-btm").innerHTML = "<h1>You've lost! Try Again.</h1>";
        }
    }
});

makeBubble();
runTimer();
getNewHit();
