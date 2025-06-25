let timeLeft = 25 * 60;
let timer;
let isRunning = false;
let isPaused = false;

let timerDisplay = document.getElementById("timer");
let pauseButton = document.getElementById("pause");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

function updateTimerDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")};
    // changes colour if time left is less than or equal to a minute
    if(TimeLeft <= 60){
        timeDisplay.classList.add("low-time")
    }
    else{  
        timeDisplay.classList.remove("low-time")
    }
}

function startTimer() {}

function pauseTimer() {}

function stopTimer() {}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);

updateTimerDisplay();
