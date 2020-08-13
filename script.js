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

todos.forEach(todo => {
    const templateTodo = `
        <article class="todoList__item todo">
            <h5 class="todo__title todo__title_theme_dark">${todo}</h5>

            <div class="todo__controls">
                <button type="button" class="todo__control control control_edit" />
                <button type="button" class="todo__control control control_duplicate" />
                <button type="button" class="todo__control control control_remove" />
            </div>
        </article>
    `

    todoListContainer.insertAdjacentHTML("beforeend", templateTodo)
})
