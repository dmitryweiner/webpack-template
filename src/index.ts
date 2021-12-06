const todos: TodoList = [];
let idIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    const input: HTMLInputElement | null = document.getElementById("inputString") as HTMLInputElement;
    const form = document.getElementById("form");
    form!.addEventListener("submit", (event: Event) => {
        event.preventDefault();
        todos.push({
            id: idIndex++,
            title: input!.value,
            isDone: false
        });
        renderList(todos);
        input!.value = "";
    });
});

function renderList(todos: TodoList) {
    let result = "";
    for (let todo of todos) {
        result += `<li>${todo.title}</li>`;
    }
    const list = document.getElementById("list");
    if (list) {
        list.innerHTML = result;
    }
}