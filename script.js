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

const addItemToContainer = todoTitle => {
    const todoElement = document.querySelector("#todoTemplate").content.cloneNode(true)

    todoElement.querySelector(".todo__title").textContent = todoTitle

    todoListContainer.append(todoElement)
}

todos.forEach(addItemToContainer)
