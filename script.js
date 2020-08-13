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

addTodoForm.addEventListener("submit", event => {
    event.preventDefault()

    const todoTitle = addTodoForm.querySelector(".addTodoForm__field_input").value

    addItemToContainer(todoTitle)

    addTodoForm.reset()
})
