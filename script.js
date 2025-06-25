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
    .padStart(2, "0")}`;
  // changes colour if time left is less than or equal to a minute
  if (timeLeft <= 60) {
    timerDisplay.classList.add("low-time");
  } else {
    timerDisplay.classList.remove("low-time");
  }
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    isPaused = false;
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimerDisplay();
      } else {
        clearInterval(timer);
        isRunning = false;
        alert("Time's up! Take a short break.");
      }
    }, 1000);
  }
}
// Pause & Resume timer
function pauseTimer() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
    isPaused = true;
    pauseButton.textContent = "Resume";
  } else if (isPaused) {
    startTimer();
    pauseButton.textContent = "Pause";
  }
}
// Stop & reset timer
function stopTimer() {
  clearInterval(timer);
  isRunning = false;
  isPaused = false;
  timeLeft = 25 * 60;
  updateTimerDisplay();
  pauseButton.textContent = "Pause";
}

// event listeners for each button
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);

//initialize timer display
updateTimerDisplay();
