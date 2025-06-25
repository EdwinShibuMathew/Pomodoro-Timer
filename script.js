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
  let seconds = timeleft % 60;
  timerDisplay.textContent;
}

function startTimer() {}

function pauseTimer() {}

function stopTimer() {}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);

updateTimerDisplay();
