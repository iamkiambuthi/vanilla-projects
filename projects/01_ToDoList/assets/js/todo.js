/** 
 * vanilla script: todo.js 
 * iamkiambuthi 
 * 2020. 
 */

const bdy = document.querySelector("#root");
tasksQ = [];

// task-output.
// waits for an input event then updates.
var createTaskList = function() {
	/**
	* Build a DOM Element to handle output.
	*/
	
	wrapper = document.createElement("div");
	wrapper.className = "task-list-wrapper";

	listItem = document.createElement("ul");
	listItem.className = "task-list";

	wrapper.appendChild(listItem);

	return wrapper;

}

var addTaskListItem = function(element, item) {
	l = document.createElement("li");
	l.innerHTML = item;
	element.appendChild(l);
}

// task-input.
// throws an click event.
var createTaskItem = function() {
	/**
	* Build a DOM Element to handle task input.
	*/
	// issa wrap.
	wrapper = document.createElement("div");
	wrapper.className = "task-item"


	// item-wrapper
	miniWrapper = document.createElement("div");
	miniWrapper.className = "item-wrapper";

	// task-label.
	taskLabel = document.createElement("label");
	taskLabel.className = "task-label";
	taskLabel.innerHTML = "task ";

	// task-input.
	taskInput = document.createElement("input");
	taskInput.className = "task-input";
	taskInput.type = "text";
	taskInput.placeholder = "task label";

	// task-btn.
	taskBtn = document.createElement("button");
	taskBtn.className = "create-btn";
	taskBtn.innerHTML = "create";

	labelItem = miniWrapper.appendChild(taskLabel);
	labelItem.appendChild(taskInput);

	// the create-btn
	submitItem = wrapper.appendChild(taskBtn);

	wrapper.appendChild(labelItem);
	wrapper.appendChild(submitItem);

	return wrapper;

}

var createTask = function(task) {
	tasksQ.push(task);
	console.log(tasksQ);
}

var taskItem = createTaskItem();
var taskList = createTaskList();

bdy.appendChild(taskItem);
bdy.appendChild(taskList);


var btn = taskItem.querySelector(".create-btn");
var ls = taskList.querySelector(".task-list");

btn.onclick = function() {
	taskLabel = taskItem.querySelector(".task-input").value;
	addTaskListItem(ls, taskLabel);
	createTask(taskLabel);
}




