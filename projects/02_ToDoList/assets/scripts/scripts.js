/* styles.css @iamkiambuthi 2021. */
window.onload = function() {
	const todoForm = document.querySelector(".todo-form");
	const taskElement = document.querySelector(".todo-tasks");
	let taskList = [];

	function createTaskItem(taskLabel) {
		/* Create an li element with a delete btn */
		const element = document.createElement("li");
		element.className = "task-item"
		const taskLabelItem = document.createElement("div");
		taskLabelItem.className = "task-label"
		const taskDeleteItem = document.createElement("button");
		taskDeleteItem.innerHTML = "remove";
		taskDeleteItem.className = "task-delete";

		element.appendChild(taskLabelItem);
		element.appendChild(taskDeleteItem);

		taskLabelItem.innerHTML = taskLabel;
		taskElement.appendChild(element);
	}

	function updateDOM() {
		/* Add an event listener to all delete buttons. */
		const deleteBtns = document.querySelectorAll(".task-delete");

		for (let i = 0; i < deleteBtns.length; i++) {
			deleteBtns[i].onclick = function() {
				// Remove task item from the list.
				taskItem = this.parentElement;
				taskItem.parentNode.removeChild(taskItem);
			}
		}
	}


	todoForm.addEventListener("submit", function(e) {
		// Prevent form from being sumitted.
		e.preventDefault();
		// Retreive the value of the input field.
		const taskName =this.taskLabel.value;
		if (taskName != ""){
			createTaskItem(taskName);
			updateDOM();
		} else {
			const errDisplayField = document.querySelector(".error-field");
			errDisplayField.innerHTML = "Enter a task name to create one";

		}
		
		
	});
}



