let timerInterval;
let hoursInput = document.getElementById('hours');
let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');
let startButton = document.getElementById('startButton');
let stopButton = document.getElementById('stopButton');
let restartButton = document.getElementById('restartButton');

function startTimer() {
  let hours = parseInt(hoursInput.value);
  let minutes = parseInt(minutesInput.value);
  let seconds = parseInt(secondsInput.value);

  // Validate inputs
  if (hours < 0 || minutes < 0 || seconds < 0) {
    alert('Please enter positive values for hours, minutes, and seconds.');
    return;
  }

  let totalTime = (hours * 3600) + (minutes * 60) + seconds;

  // Disable start button, enable stop button
  startButton.disabled = true;
  stopButton.disabled = false;

  timerInterval = setInterval(function() {
    if (totalTime <= 0) {
      clearInterval(timerInterval);
      // Enable start button, disable stop button
      startButton.disabled = false;
      stopButton.disabled = true;
      // Display time's up message
      hoursInput.value = '00';
      minutesInput.value = '00';
      secondsInput.value = '00';
      alert('Time\'s up!');
    } else {
      let hoursRemaining = Math.floor(totalTime / 3600);
      let minutesRemaining = Math.floor((totalTime % 3600) / 60);
      let secondsRemaining = totalTime % 60;
      hoursInput.value = hoursRemaining.toString().padStart(2, '0');
      minutesInput.value = minutesRemaining.toString().padStart(2, '0');
      secondsInput.value = secondsRemaining.toString().padStart(2, '0');
      totalTime--;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  // Enable start button, disable stop button
  startButton.disabled = false;
  stopButton.disabled = true;
}

function restartTimer() {
  clearInterval(timerInterval);
  hoursInput.value = '0';
  minutesInput.value = '0';
  secondsInput.value = '0';
  // Enable start button, disable stop button
  startButton.disabled = false;
  stopButton.disabled = true;
}
