'use strict';

const todoArr = [
    'To buy clothes',
    'Hangout with hoes',
    'Get breakfast'
];


const form = document.querySelector('form'),
    input = document.querySelector('input'),
    list = document.querySelector('ul'),
    error = document.querySelector('.error');


function formSubmit(submit, line) {
    submit.addEventListener('submit', (e) => {
        e.preventDefault();
        if (line.value.trim() === '') {
            error.style.display = 'block';
        } else {
            todoArr.push(line.value);
            renderTodo(list, todoArr);
        }
        submit.reset();
    });
};

function renderTodo(list, arr) {
    list.innerHTML = '';

    arr.forEach((el) => {
        list.innerHTML += `
            <li class="todo-task">
                ${el}
                <div class="todo-icons">
                    <button class="delete"><i class="fas fa-trash-alt"></i></button>
                    <button class="checked"><i class="fas fa-check"></i></button>
                </div>
            </li>
        `;
    });

    document.querySelectorAll('.checked i').forEach((el) => {
        el.addEventListener('click', () => {
            if (el.classList.contains('green')) {
                el.classList.remove('green');
            } else {
                el.classList.add('green');
            }
        })
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            arr.splice(i, 1);

            renderTodo(list, arr)
        })
    });
};

renderTodo(list, todoArr);
formSubmit(form, input);