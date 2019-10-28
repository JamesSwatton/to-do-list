loadEvents();

function loadEvents() {
    console.log(document.querySelector('form'));
    document.querySelector('form').addEventListener('submit', submit);
}

function submit(event) {
    event.preventDefault();
    let input = event.target.task.value;
    console.log(input);
}
