/** scripts.js */
window.onload = function() {
	const body = document.querySelector("#root");

	var createSignupForm = function() {
		/**
		* Creates a Basic Form.
		*/
		// form header wrapper.
		var formHeaderWrapper = document.createElement("div");
		formHeaderWrapper.className = "form-header-wrapper";

		var formHeader = document.createElement("h2");
		formHeader.className = "form-header";
		formHeader.innerHTML = "Create an Anon"

		formHeaderWrapper.appendChild(formHeader);
		
		// form-item. username
		var itemWrapper = document.createElement("div");
		itemWrapper.className = "form-item";

		var label = document.createElement("label");
		label.className = "form-label";
		label.innerHTML = "username";

		var inputItem = document.createElement("input");
		inputItem.className = "form-input";

		itemWrapper.appendChild(label);
		itemWrapper.appendChild(inputItem);

		// form-item. password
		var itemWrapper1 = document.createElement("div");
		itemWrapper1.className = "form-item";

		var label1 = document.createElement("label");
		label1.className = "form-label";
		label1.innerHTML = "password";

		var inputItem1 = document.createElement("input");
		inputItem1.className = "form-input";
		inputItem1.type = "password";

		itemWrapper1.appendChild(label1);
		itemWrapper1.appendChild(inputItem1);

		// form-item: submit-btn
		var itemWrapper3 = document.createElement("div");
		itemWrapper3.className = "button-item";

		var submitBtn = document.createElement("button");
		submitBtn.className = "submit-btn";
		submitBtn.innerHTML = "create";

		itemWrapper3.appendChild(submitBtn);

		// form.
		var form = document.createElement("form");
		form.className = "signup-form";
		form.method = "post";

		form.appendChild(formHeaderWrapper);
		form.appendChild(itemWrapper);
		form.appendChild(itemWrapper1);
		form.appendChild(itemWrapper3);

		return form;
	}

	var form = createSignupForm();
	body.appendChild(form);

	var btn  = form.querySelector(".submit-btn");
	btn.onclick = function () {
		console.log("clicked");
	}



} 
