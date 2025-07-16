let p = document.querySelector("#currentTime");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

if (minutes < 10) {
  `0 {minutes}`;
}
if (hours < 10) {
  `0 {hours}`;
}
p.innerHTML = `${day} ${hours}:${minutes}`;

//
function inputCity(event) {
  event.preventDefault();

  let input = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  if (input.value) {
    h1.innerHTML = `${input.value}`;
  } else {
    h1.innerHTML = null;
    alert("Please type a city");
  }
}
let form = document.querySelector("form");
form.addEventListener("submit", inputCity);
