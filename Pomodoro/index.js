const countdownEl = document.getElementById("countdown");

var pomodoro = document.getElementById("pomodoro");
var shortBreak = document.getElementById("shortB");
var longBreak = document.getElementById("longB");

pomodoro.addEventListener("click", clickedPomodoro);
shortBreak.addEventListener("click", clickedShortBreak);
longBreak.addEventListener("click", clickedLongBreak);

var startButton = document.getElementById("startBtn");
var stopButton = document.getElementById("stopBtn");
var restartButton = document.getElementById("restartBtn");

var endSound=new Audio("sound/end.wav")


function clickedPomodoro() {
  var k = -1;

  countdownEl.innerHTML = "25:00";
  let minute = 25;
  let time = minute * 60;

  startButton.addEventListener("click", start);
  stopButton.addEventListener("click", stop);
  restartButton.addEventListener("click", restart);

  function start() {
    function updateCountdown() {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;

      if (minutes < 10 && seconds < 10) {
        countdownEl.innerHTML = `0${minutes}:0${seconds}`;
        document.title = `0${minutes}:0${seconds} Pomodoro`;
      } else if (minutes < 10 && seconds >= 10) {
        countdownEl.innerHTML = `0${minutes}:${seconds}`;
        document.title = `0${minutes}:${seconds} Pomodoro`;
      } else if (minutes >= 10 && seconds < 10) {
        countdownEl.innerHTML = `${minutes}:0${seconds}`;
        document.title = `${minutes}:0${seconds} Pomodoro`;
      }

      if (time > 0) {
        time--;
      }
      else{
        endSound.play()
      }
    }
    if (k === -1) {
      k = setInterval(updateCountdown, 1000);
    }
  }
  function stop() {
    clearInterval(k);
    k = -1;
  }

  function restart() {
    document.title = "25:00 Pomodoro";
    clearInterval(k);
    k = -1;
    countdownEl.innerHTML = "25:00";
    time = 1500;
  }
}


function clickedShortBreak() {
  var k = -1;

  countdownEl.innerHTML = "05:00";
  let minute = 5;
  let time = minute * 60;


  startButton.addEventListener("click", start);
  stopButton.addEventListener("click", stop);
  restartButton.addEventListener("click", restart);

  function start() {
    function updateCountdown() {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;

      if (minutes < 10 && seconds < 10) {
        countdownEl.innerHTML = `0${minutes}:0${seconds}`;
        document.title = `0${minutes}:0${seconds} Pomodoro`;
      } else if (minutes < 10 && seconds >= 10) {
        countdownEl.innerHTML = `0${minutes}:${seconds}`;
        document.title = `0${minutes}:${seconds} Pomodoro`;
      } else if (minutes >= 10 && seconds < 10) {
        countdownEl.innerHTML = `${minutes}:0${seconds}`;
        document.title = `${minutes}:0${seconds} Pomodoro`;
      }

      if (time > 0) {
        time--;
      }
      else{
        endSound.play()
      }
    }
    if (k === -1) {
      k = setInterval(updateCountdown, 1000);
    }
  }
  function stop() {
    clearInterval(k);
    k = -1;
  }

  function restart() {
    document.title = "05:00 Pomodoro";
    clearInterval(k);
    k = -1;
    countdownEl.innerHTML = "05:00";
    time = 300;
  }
}


function clickedLongBreak() {
  var k = -1;

  countdownEl.innerHTML = "10:00";
  let minute = 10;
  let time = minute * 60;
  

  startButton.addEventListener("click", start);
  stopButton.addEventListener("click", stop);
  restartButton.addEventListener("click", restart);

  function start() {
    function updateCountdown() {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;

      if (minutes < 10 && seconds < 10) {
        countdownEl.innerHTML = `0${minutes}:0${seconds}`;
        document.title = `0${minutes}:0${seconds} Pomodoro`;
      } else if (minutes < 10 && seconds >= 10) {
        countdownEl.innerHTML = `0${minutes}:${seconds}`;
        document.title = `0${minutes}:${seconds} Pomodoro`;
      } else if (minutes >= 10 && seconds < 10) {
        countdownEl.innerHTML = `${minutes}:0${seconds}`;
        document.title = `${minutes}:0${seconds} Pomodoro`;
      }

      if (time > 0) {
        time--;
      }
      else{
        endSound.play()
      }
    }
    if (k === -1) {
      k = setInterval(updateCountdown, 1000);
    }
  }
  function stop() {
    clearInterval(k);
    k = -1;
  }
  
  function restart() {
    document.title = "10:00 Pomodoro";
    clearInterval(k);
    k = -1;
    countdownEl.innerHTML = "10:00";
    time = 600;
  }
}
