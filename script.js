const hour = document.querySelectorAll(".hour")[0];
const minute = document.querySelectorAll(".minute")[0];
const second = document.querySelectorAll(".second")[0];
const body = document.querySelectorAll("body")[0];
const button = document.querySelectorAll(".btn");
const time = document.querySelectorAll(".tim");
const clockContainer = document.querySelectorAll(".clock-container")[0];
let hourRot = 0;
let minRot = 0;
let secRot = 0;
let date = new Date();

// functions
// ===============================================================================================================================

function iniHourRotate(iniHour, iniMinute, iniSecond) {
  hourRot = iniHour * 30 + iniMinute * 0.5 + iniSecond * 0.083;
}

function iniMinuteRotate(iniMinute, iniSecond) {
  minRot = iniMinute * 6 + iniSecond * 0.1;
}

function iniSecondRotate(iniSecond) {
  secRot = iniSecond * 6;
}

// initial rotation of clock arrows
function iniTimeRotate() {
  iniHourRotate(date.getHours(), date.getMinutes(), date.getSeconds());
  iniMinuteRotate(date.getMinutes(), date.getSeconds());
  iniSecondRotate(date.getSeconds());
  console.log(date.getHours());
}

// ===============================================================================================================================

// initial rotation of clock arrows
iniTimeRotate();

// further rotation according to the time
setInterval(() => {
  hourRot += 0.00083;
  minRot += 0.01;
  secRot += 0.6;
  hour.style = `rotate: ${hourRot}deg`;
  minute.style = `rotate: ${minRot}deg`;
  second.style = `rotate: ${secRot}deg`;
}, 100);


// execution of different modes
let prevMode;
for (let i = 1; i <= button.length; i++) {
  button[i - 1].addEventListener("click", () => {
    try {
      clockContainer.classList.remove(`mode-${prevMode}-clock`);
      body.classList.remove(`mode-${prevMode}-body`);
      time[0].classList.remove("time");
      time[1].classList.remove("time");
      time[2].classList.remove("time");
    } catch (err) {
      console.log(err);
    }
    prevMode = i;
    clockContainer.classList.add(`mode-${i}-clock`);
    body.classList.add(`mode-${i}-body`);
    if (i === 4) {
      for (let j = 0; j < time.length; j++) {
        time[j].classList.add("time");
      }
    }
  });
}
