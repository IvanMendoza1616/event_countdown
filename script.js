const hdays = document.getElementById("hdays");
const hhours = document.getElementById("hhours");
const hminutes = document.getElementById("hminutes");
const hseconds = document.getElementById("hseconds");

const cdays = document.getElementById("cdays");
const chours = document.getElementById("chours");
const cminutes = document.getElementById("cminutes");
const cseconds = document.getElementById("cseconds");

const today = new Date();
let halloweenDate = new Date(today.getFullYear(), 9, 31, 0, 0, 0);
let christmasDate = new Date(today.getFullYear(), 11, 25, 0, 0, 0);

if (halloweenDate.getTime() - today.getTime() < 0) {
  halloweenDate.setFullYear(today.getFullYear() + 1);
}

if (christmasDate.getTime() - today.getTime() < 0) {
  christmasDate.setFullYear(today.getFullYear() + 1);
}

setInterval(updateTime, 1000);

function updateTime() {
  let [halloweenDays, halloweenHours, halloweenMinutes, halloweenSeconds] = getRemainingTime(halloweenDate);
  let [christmasDays, christmasHours, christmasMinutes, christmasSeconds] = getRemainingTime(christmasDate);

  hdays.innerHTML = format(halloweenDays);
  hhours.innerHTML = format(halloweenHours);
  hminutes.innerHTML = format(halloweenMinutes);
  hseconds.innerHTML = format(halloweenSeconds);

  cdays.innerHTML = format(christmasDays);
  chours.innerHTML = format(christmasHours);
  cminutes.innerHTML = format(christmasMinutes);
  cseconds.innerHTML = format(christmasSeconds);
}

function format(number) {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
}

function getRemainingTime(date) {
  const daysInMilliseconds = 24 * 60 * 60 * 1000;
  const hoursInMilliseconds = 60 * 60 * 1000;
  const minutesInMilliseconds = 60 * 1000;
  const currentDate = new Date();
  let remainingTime = date.getTime() - currentDate.getTime();

  if (remainingTime < 0) {
    return [0, 0, 0, 0];
  }

  let remainingDays = Math.floor(remainingTime / daysInMilliseconds);
  let remainingHours = Math.floor((remainingTime % daysInMilliseconds) / hoursInMilliseconds);
  let remainingMinutes = Math.floor((remainingTime % hoursInMilliseconds) / minutesInMilliseconds);
  let remainingSeconds = Math.floor((remainingTime % minutesInMilliseconds) / 1000);

  return [remainingDays, remainingHours, remainingMinutes, remainingSeconds];
}
