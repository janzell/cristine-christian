const end = new Date("Jan 06, 2024 00:00:00").getTime();
const dayEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

const x = setInterval(function () {
  let now = new Date().getTime();
  const difference = end - now;

  if (difference < 0) {
    clearInterval(x);

    dayEl.innerText = 0;
    hoursEl.innerText = 0;
    minutesEl.innerText = 0;
    secondsEl.innerText = 0;
    
    return;
  }

  dayEl.innerText = Math.floor(difference / days);
  hoursEl.innerText = Math.floor((difference % days) / hours);
  minutesEl.innerText = Math.floor((difference % hours) / minutes);
  secondsEl.innerText = Math.floor((difference % minutes) / seconds);
}, seconds);
