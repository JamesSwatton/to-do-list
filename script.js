document.addEventListener('DOMContentLoaded', () => {
    loadEvents();
});

let tasks = [];

function loadEvents() {
    document.querySelector('form').addEventListener('submit', submit);
    document.querySelector('#clear').addEventListener('click', clearList);
    document.querySelector('ul').addEventListener('click', deleteOrTick);
}

function submit(event) {
    event.preventDefault();
    let task = event.target.task.value;
    addTask(task);
}

function addTask(task) {
    let priority = document.querySelector('#priority');
    let ul = document.querySelector('ul');
    if (priority.checked) {
        tasks.unshift(task);
    } else {
        tasks.push(task);
    }
    ul.innerHTML = '';
    renderTaskList(ul, tasks);
}

function renderTaskList(ul, taskArr) {
    for (task of taskArr) {
        let taskListItem = document.createElement('li');
        taskListItem.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
        ul.appendChild(taskListItem);
    }
}

function clearList() {
    document.querySelector('ul').innerHTML = '';
}

function deleteOrTick(event) {
    if (event.target.className == 'delete') {
        deleteTask(event);
    } else {
        tickTask(event);
    }
}

function deleteTask(event) {
    console.log(event.target);
    let taskToRemove = event.target.parentNode;
    let parent = taskToRemove.parentNode;
    parent.removeChild(taskToRemove);
}

function tickTask(event) {
    let task = event.target.nextSibling;
    if (event.target.checked) {
        task.style.textDecoration = "line-through";
    } else {
        task.style.textDecoration = "none";
    }
}
