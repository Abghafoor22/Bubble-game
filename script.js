var timer = 1;
var score = 0;
var randomHit;

// var br = "<br>"

function incressScore(){
    score += 10
    document.querySelector("#score").textContent = score;
}

function getNewHit() {
    randomHit = Math.floor(Math.random() * 10);
    document.querySelector('#hit').textContent = randomHit
}


function makeBubble() {
    var bubbles = ""
    for (let i = 1; i <= 126; i++) {
        var ramdomNum = Math.floor(Math.random() * 10);

        bubbles += ` <div class="bubble">${ramdomNum}</div>`
    }

    document.querySelector(".pbtm").innerHTML = bubbles
}

function runTimer() {
    var timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('#timer').textContent = timer
        } else {
            clearInterval(timerInterval)
            document.querySelector('.pbtm').innerHTML = `
                <h1>Game Over</h1>
               
                <h3>Your Score is ${score}</h3>
                `;
        }
    }, 1000);

}

document.querySelector('.pbtm').addEventListener('click',function(dets){
    var bubbleNum = Number(dets.target.textContent)
    console.log(bubbleNum);
    if (bubbleNum === randomHit) {
        incressScore()
        getNewHit()
        makeBubble()
    }
})
getNewHit()
runTimer()
makeBubble()
// incressScore()