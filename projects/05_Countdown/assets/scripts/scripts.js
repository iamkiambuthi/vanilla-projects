const dayItem = document.querySelector(".day-item");
const hourItem = document.querySelector(".hour-item");
const minuteItem = document.querySelector(".minute-item");
const secondItem = document.querySelector(".second-item");

/* Learnt how to represent Date objects.
* JS DATE INPUT
* ================
* ISO Date Format -- Y-M-D --"2021-07-31"
* Short Date Format -- M-D-Y -- "07/31/2021"
* Long date Format -- "Jul 31 2021"
*/
const productlaunchDate = '2021-07-31';

function countdown() {
	const launchDate = new Date(productlaunchDate);
	const currentDate = new Date();

	const totalSeconds = (launchDate - currentDate) / 1000;
	const days = Math.floor(totalSeconds / 3600 / 24);
	const hours = Math.floor(totalSeconds / 3600) % 24;
	const minutes = Math.floor(totalSeconds / 60) % 60;
	const seconds = Math.floor(totalSeconds) % 60;

	dayItem.innerHTML = days;
	hourItem.innerHTML = hours;
	minuteItem.innerHTML = minutes;
	secondItem.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);
