window.onload = function() {

	const body = document.querySelector("#root");

	var createHeaderElement = function() {
		/**
		* Creates a Header element.
		*
		*/
		
		var headerWrapper = document.createElement("div");
		headerWrapper.className = "header-wrapper";

		var header = document.createElement("header");
		header.className = "header-item";

		var timeWrapper = document.createElement("div");
		timeWrapper.className = "time-wrapper"

		var timeItem = document.createElement("div");
		timeItem.className = "time-item";
		timeItem.id = "time";

		timeWrapper.appendChild(timeItem);
		header.appendChild(timeWrapper);

		headerWrapper.appendChild(header);
		return headerWrapper
	}

	var getDateTime = function() {
		// get current time.

		var dateTime = new Date().toLocaleTimeString();
	
		return dateTime;
	}

	var displayTime = function() {
		// displays current_time onto the DOM.

		const t = document.querySelector("#time");
		t.innerHTML = getDateTime();
		console.log("i run");
	}

	h = createHeaderElement();
	body.appendChild(h);

	setInterval(1, displayTime());
}