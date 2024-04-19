document.getElementById('add-task-button').addEventListener('click', function() {
  const input = document.getElementById('new-task-input');
  const taskText = input.value.trim();
  if (taskText) {
      addTask(taskText);
      input.value = ''; // Clear the input after adding
  }
});

function addTask(text) {
  const container = document.getElementById('tasks-container');
  const taskElement = document.createElement('div');
  taskElement.textContent = text;
  container.appendChild(taskElement);
}

//storage 

function saveTasks() {
  const tasks = [];
  document.querySelectorAll('#tasks-container div').forEach(taskElement => {
      tasks.push(taskElement.textContent);
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(addTask);
}

window.onload = function() {
  loadTasks();
  document.getElementById('add-task-button').addEventListener('click', saveTasks);
};

