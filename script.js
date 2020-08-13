const todos = [
    'Сделать проектную работу',
    'Полить цветы',
    'Пройти туториал по Реакту',
    'Сделать фронт для своего проекта',
    'Погулять с собакой',
    'Разобраться в замыканиях',
    'Решить задачу на Codewars',
]
const todoListContainer = document.querySelector(".todoList")
const addTodoForm = document.querySelector(".addTodoForm")

const addItemToContainer = todoTitle => {
    const todoElement = document.querySelector("#todoTemplate").content.cloneNode(true)

    todoElement.querySelector(".todo__title").textContent = todoTitle

    todoListContainer.append(todoElement)
}

todos.forEach(addItemToContainer)

document.addEventListener("click", event => {
    const target = event.target

    if (target.classList.contains("control_remove")) {
        const todo = target.closest(".todo")

        todo.remove()

    } else if (target.classList.contains("control_edit")) {
        const todo = event.target.closest(".todo")
        const todoTitle = todo.querySelector(".todo__title").textContent

        addTodoForm.querySelector(".addTodoForm__field_input").value = todoTitle

        todo.classList.add("editing")
    }
})

addTodoForm.addEventListener("submit", event => {
    event.preventDefault()

    const editingTodo = document.querySelector(".editing")

    const todoTitle = addTodoForm.querySelector(".addTodoForm__field_input").value

    if (editingTodo) {
        editingTodo.querySelector(".todo__title").textContent = todoTitle

        editingTodo.classList.remove("editing")
    } else {
        addItemToContainer(todoTitle)
    }

    addTodoForm.reset()
})
