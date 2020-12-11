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
	// The delete button & its wrapper.
	deleteItemWrapper = document.createElement("div");
	deleteItemWrapper.className = "delete-btn-wrapper";

	deleteItem = document.createElement("button");
	deleteItem.className = "delete-btn";
	deleteItem.innerHTML = "delete";
	deleteItem.id = "deleteBtn";
	
	deleteItemWrapper.appendChild(deleteItem);

	// add delete button inside list item.
	l = document.createElement("li");
	l.className = "task-list-item";
	l.innerHTML = item;
	l.appendChild(deleteItemWrapper);
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
}

var taskItem = createTaskItem();
var taskList = createTaskList();

bdy.appendChild(taskItem);
bdy.appendChild(taskList);


var btn = taskItem.querySelector(".create-btn");
var ls = taskList.querySelector(".task-list");

var updateTaskListBtns = function() {
	const delBtns = taskList.querySelectorAll(".delete-btn");
	delBtns.forEach(item => {
		item.addEventListener("click", event => {
			var i = item.parentNode;
			i.remove();

		})
	});
	console.log(delBtns);

	return delBtns;
}

btn.onclick = function() {
	taskLabel = taskItem.querySelector(".task-input").value;
	addTaskListItem(ls, taskLabel);
	createTask(taskLabel);

	updateTaskListBtns();
}

var removeItem = function() {
	console.log("remove");
}

var delBtnz = updateTaskListBtns();
delBtnz.addEventListener("click", removeItem);

console.log(delBtnz)




