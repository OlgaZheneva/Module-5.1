const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

let tasks = [];

addTaskButton.addEventListener('click', addTask);

function addTask() {
    if (taskInput.value.trim() === '') return;

    const newTask = {
        id: Date.now(),
        text: taskInput.value,
        completed: false
    };
    tasks.push(newTask);
    taskInput.value = '';
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;
        li.className = task.completed ? 'completed' : '';
        
        li.addEventListener('dblclick', () => editTask(task.id));
        li.addEventListener('click', () => toggleTaskCompletion(task.id));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', () => deleteTask(task.id));
        
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

function toggleTaskCompletion(id) {
    const task = tasks.find(task => task.id === id);
    task.completed = !task.completed;
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function editTask(id) {
    const task = tasks.find(task => task.id === id);
    const newText = prompt('Редактировать задачу:', task.text);
    if (newText !== null) {
        task.text = newText.trim() || task.text;
        renderTasks();
    }
}

function showAll() {
    renderTasks();
}

function showCompleted() {
    const completedTasks = tasks.filter(task => task.completed);
    displayFilteredTasks(completedTasks);
}

function showPending() {
    const pendingTasks = tasks.filter(task => !task.completed);
    displayFilteredTasks(pendingTasks);
}

function displayFilteredTasks(filteredTasks) {
    taskList.innerHTML = '';
    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.text;
        li.className = task.completed ? 'completed' : '';
        
        li.addEventListener('dblclick', () => editTask(task.id));
        li.addEventListener('click', () => toggleTaskCompletion(task.id));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', () => deleteTask(task.id));
        
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}
