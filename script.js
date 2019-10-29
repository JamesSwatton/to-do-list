document.addEventListener('DOMContentLoaded', () => {
    loadEvents();
});


function loadEvents() {
    // console.log(document.querySelector('form'));
    document.querySelector('form').addEventListener('submit', submit);
    document.querySelector('#clear').addEventListener('click', clearList);
    document.querySelector('ul').addEventListener('click', deletOrTick);
}

function submit(event) {
    event.preventDefault();
    let task = event.target.task.value;
    console.log(task);
    addTask(task);
}

function addTask(task) {
    let ul = document.querySelector('ul');
    let taskListItem = document.createElement('li');
    taskListItem.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;;
    ul.appendChild(taskListItem);
}

function clearList() {
    document.querySelector('ul').innerHTML = '';
}

function deletOrTick(event) {
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
