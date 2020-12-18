/**
* scripts.js
* iamkiambuthi. 2020.
* MIT LICENSE
*/

/*
* TODO
* =====
* 1. Delete Btn not working.
* 2. Push the last item above the bottom div.
*
*/
window.onload = function() {
	const body = document.querySelector("#root");
	var taskList = [];

	var getRank = function() {
		var rank = taskList.length;
		rank += 1;

		return rank;
	}

	var getGenesis = function() {
		var DateTime = new Date().toDateString();

		return DateTime;
	}

	function createTask(tLabel) {
		// task object.

		var task = new Object();
		task.label = tLabel;
		task.rank = getRank();
		task.dateCreated = getGenesis();

		// add to the list.
		taskList.push(task);
		return task;
	}

	var createTaskInputItem = function() {
		/**
		* Creates a DOM element to handle task input.
		* 
		* layout
		* =======
		* task-input-item
		*
		* <tii-wrapper>
		* 	<tii-section>
		* 		<tii-header></tti-header>
		*
		* 		<tii-body>
		*			<tii-input></tii-input>
		* 			<tii-button></tii-button>
		* 		</tii-body>
		*
		* 		<tii-footer></tii-footer>
		* 	</tii-section>
		* </tii-wrapper>
		*/

		var wrapper = document.createElement("div");
		wrapper.className = "tii-w";

		var taskInputItem = document.createElement("div");
		taskInputItem.className = "tii-s";

		var taskInputItemHeader = document.createElement("div");
		taskInputItemHeader.className = "tii-h";
		taskInputItemHeader.innerHTML = "Add a Task";

		var taskInputItemBody = document.createElement("div");
		taskInputItemBody.className = "tii-b";

		var taskInput = document.createElement("input");
		taskInput.className = "tii-input";
		taskInput.placeholder = "Enter task name";

		var taskCreate = document.createElement("button");
		taskCreate.className = "tii-button";
		taskCreate.innerHTML = "create";

		var taskInputItemFooter = document.createElement("div");
		taskInputItemFooter.className = "tii-f";

		taskInputItemBody.appendChild(taskInput);
		taskInputItemBody.appendChild(taskCreate);

		taskInputItem.appendChild(taskInputItemHeader);
		taskInputItem.appendChild(taskInputItemBody);
		taskInputItem.appendChild(taskInputItemFooter);

		wrapper.appendChild(taskInputItem);

		return wrapper
	}

	var updateDisplay = function(arr, element) {
		/**
		* Creates a DOM element to display output.
		* 
		* task-display-wrapper
		*
		* FIX: instead of creating the entire element each and every time.
		* only create whats needed.
		*
		* layout
		* =======
		* <td-w>
		* 	<td-s>
		*		<td>
		* 			<tr-w>
		*				<tr></tr>
		* 			</tr-w>
		*
		* 			<tl-w>
		* 				<tl></tl>
		* 				<tdi></tdi>
		*			</tl-w>
		* 			
		* 			<td-w>
		*				<td></td>
		* 			</td-w>
		* 		</td>
		*   </td-s>
		* </td-w>
		*/
		var wrapper = document.createElement("div");
		wrapper.className = "td-w";

		var taskDisplaySection = document.createElement("div");
		taskDisplaySection.className = "td-s";

		var taskDisplay = document.createElement("div");
		taskDisplay.className = "td";

		var taskRankWrapper = document.createElement("div");
		taskRankWrapper.className = "tr-w";

		var taskRank = document.createElement("div");
		taskRank.className = "tr";

		var taskLabelWrapper = document.createElement("div");
		taskLabelWrapper.className = "tl-w";

		var taskLabel = document.createElement("div");
		taskLabel.className = "tl";

		var taskDateItem = document.createElement("div");
		taskDateItem.className = "tdi";

		var taskDeleteWrapper = document.createElement("div");
		taskDeleteWrapper.className = "td-w";

		var taskDelete = document.createElement("button");
		taskDelete.className = "td-btn";
		taskDelete.id = "delBtn";
		taskDelete.innerHTML = "delete";

		taskRankWrapper.appendChild(taskRank);
		taskLabelWrapper.appendChild(taskLabel);
		taskLabelWrapper.appendChild(taskDateItem);
		taskDeleteWrapper.appendChild(taskDelete);

		taskDisplay.appendChild(taskRankWrapper);
		taskDisplay.appendChild(taskLabelWrapper);
		taskDisplay.appendChild(taskDeleteWrapper);

		taskDisplaySection.appendChild(taskDisplay);


		for (var i=0; i < arr.length; i++) {
			// insert the values.
			taskRank.innerHTML = arr[i].rank;
			taskLabel.innerHTML = arr[i].label;
			taskDateItem.innerHTML = arr[i].dateCreated;
		}
		element.appendChild(taskDisplaySection);
	}

	var item = createTaskInputItem();
	body.appendChild(item);


	// adding an item.
	var btn = item.querySelector(".tii-button");

	btn.onclick = function() {
		t = item.querySelector(".tii-input").value;
		task = createTask(t);
		updateDisplay(taskList, body);

	}
}



