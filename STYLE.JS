document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskDate = document.getElementById('taskDate');
  const taskList = document.getElementById('taskList');
  const taskText = taskInput.value;
  const taskDateTime = taskDate.value;

  if (taskText === '' || taskDateTime === '') {
    alert('Please enter both a task and date/time.');
    return;
  }

  const listItem = document.createElement('li');
  const taskContent = document.createElement('span');
  taskContent.innerText = `${taskText} - ${new Date(taskDateTime).toLocaleString()}`;
  listItem.appendChild(taskContent);

  const editButton = document.createElement('button');
  editButton.className = 'edit';
  editButton.innerText = 'Edit';
  editButton.addEventListener('click', () => editTask(listItem, taskContent));

  const completeButton = document.createElement('button');
  completeButton.className = 'complete';
  completeButton.innerText = 'Complete';
  completeButton.addEventListener('click', () => {
    listItem.classList.toggle('completed');
  });

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', () => taskList.removeChild(listItem));

  listItem.appendChild(editButton);
  listItem.appendChild(completeButton);
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem); // Append to the bottom of the list

  taskInput.value = '';
  taskDate.value = '';
}

function editTask(listItem, taskContent) {
  const newTask = prompt('Edit task:', taskContent.innerText.split(' - ')[0]);
  const newDate = prompt('Edit date/time (YYYY-MM-DDTHH:MM):', taskContent.innerText.split(' - ')[1]);

  if (newTask !== null && newDate !== null) {
    taskContent.innerText = `${newTask} - ${new Date(newDate).toLocaleString()}`;
  }
}
