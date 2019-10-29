document.addEventListener('DOMContentLoaded', () => {
    loadEvents();
});


function loadEvents() {
    // console.log(document.querySelector('form'));
    document.querySelector('form').addEventListener('submit', submit);
    document.querySelector('#clear').addEventListener('click', clearList);
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
