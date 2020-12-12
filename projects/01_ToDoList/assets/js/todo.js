/** 
 * vanilla script: todo.js 
 * iamkiambuthi 
 * 2020. 
 */

// TODO
// somehow this worked, taskQ is useless. save to localstorage and the design is ugly.
// but it worked.

// 1. Add validation to the task input to prevent creation of nameless tasks.
// 2. Write and organize code better.
// 3. add a task class.
// 4. save tasks to localStorage.
const bdy = document.querySelector("#root");

var getDateToday = function() {
	var dateTime = new Date();

	return dateTime;
}

function createTask(tLabel) {
	// A task object.

	var task = new Object;
	task.label = tLabel;
	task.dateCreated = getDateToday();

	task.getGenesis = function() {
		return this.dateCreated;
	}

	return task;
}

var createTaskList = function() {
	/**
	* Build a DOM Element to output the task list.
	*/

	wrapper = document.createElement("div");
	wrapper.className = "task-list-wrapper";

	listItem = document.createElement("ul");
	listItem.className = "task-list";

	wrapper.appendChild(listItem);

	return wrapper;

}

var addTaskListItem = function(element, item) {
	/**
	* Creates the DOM li element to show a task.
	*/

	// task-rank-wrapper.
	var taskRankWrapper = document.createElement("div");
	taskRankWrapper.className = "task-rank-wrapper";

	// task-rank.
	var taskRank = document.createElement("div");
	taskRank.className = "task-rank";

	var taskRankItem = taskRankWrapper.appendChild(taskRank);

	// task-label-wrapper.
	var taskLabelWrapper = document.createElement("div");
	taskLabelWrapper.className = "task-label-wrapper";

	// task-label.
	var taskLabel = document.createElement("div");
	taskLabel.className = "task-label";

	var taskLabelItem = taskLabelWrapper.appendChild(taskLabel);

	// task-delete-wrapper
	var taskDeleteWrapper = document.createElement("div");
	taskDeleteWrapper.className = "delete-btn-wrapper";

	// task-delete
	var taskDelete = document.createElement("button");
	taskDelete.className = "delete-btn";
	taskDelete.innerHTML = "delete";
	taskDelete.id = "deleteBtn";

	taskDeleteItem = taskDeleteWrapper.appendChild(taskDelete);



	// add delete button inside list item.
	l = document.createElement("li");
	l.className = "task-list-item";
	l.innerHTML = item;
	l.appendChild(taskRankItem);
	l.appendChild(taskLabelItem);
	l.appendChild(taskDeleteItem);

	element.appendChild(l);
}

// task-input.
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
	taskInput.required = true;

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
}

btn.onclick = function() {
	taskLabel = taskItem.querySelector(".task-input").value;
	addTaskListItem(ls, taskLabel);
	createTask(taskLabel);

	updateTaskListBtns();
}




