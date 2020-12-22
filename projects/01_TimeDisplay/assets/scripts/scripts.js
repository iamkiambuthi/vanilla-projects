// Wait for document to load.
window.onload = function() {
	const timeItem = document.querySelector(".time-display");
	const hoursItem = document.querySelector(".hours-item");
	const minutesItem = document.querySelector(".minutes-item");
	const secondsItem = document.querySelector(".seconds-item");

	function displayTime() {
		// get the date and time.
		const dateTime = new Date();

		hour = dateTime.getHours();
		minute = dateTime.getMinutes();
		seconds = dateTime.getSeconds();
		
		// insert into DOM
		hoursItem.innerHTML = hour;
		minutesItem.innerHTML = minute;
		secondsItem.innerHTML = seconds;
	}

	setInterval(displayTime, 1000);
}