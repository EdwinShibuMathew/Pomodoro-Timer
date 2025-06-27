let timeLeft = 60 * 25; // 25 minutes in seconds
let timer;
let isRunning = false;
let isNotResumed = false;

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");

// Update Timer Display
function updateTimerDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  // Change text color if less than 1 minute left
  if (timeLeft <= 60) {
    timerDisplay.classList.add("low-time");
  } else {
    timerDisplay.classList.remove("low-time");
  }
}

// Start Timer
function startTimer() {
  if (!isRunning) {
    isRunning = true;
    isNotResumed = false;
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

// Pause & Resume Timer
function pauseTimer() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
    isNotResumed = true;
    pauseButton.textContent = "Resume";
  } else if (isNotResumed) {
    startTimer();
    pauseButton.textContent = "Pause";
  }
}

// Stop & Reset Timer
function stopTimer() {
  clearInterval(timer);
  isRunning = false;
  isNotResumed = false;
  timeLeft = 25 * 60; // Reset to 2 minutes
  updateTimerDisplay();
  pauseButton.textContent = "Pause";
}

// Event Listeners
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);

// Initialize Timer Display
updateTimerDisplay();
