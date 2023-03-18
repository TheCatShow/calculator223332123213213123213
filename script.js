// Функция eval - выполняет строку кода.

let btn = document.querySelector('button');
let input = document.querySelector('#input');
let key = document.querySelector('key');
let reset = document.querySelector('#reset');
let result = document.querySelector('#result');
let calc = document.querySelector('#calc');
let display = document.querySelector('#display');

// Обработка кнопок

// Объявить переменную в которую будем передавать выражение из инпута и присвоить ей значение ""

// Перебрать через цикл for of все кнопки, навешивая на каждую из них обработчик клика:
// В функции обработчике к значению в перменной exp прибавить текстовое содержимое кнопки на которую кликнули
// В поле инпут передать переменную exp

// ОБРАБОТКА ЗНАКА =
// Навесить обработчик события кликов на кнопку "="
// В функции обработчик используя функцию eval выполнить строку кода которая содержится в переменной exp
// Вывести результат в инпут
// В переменную exp записать значение ""

// Аналогично выполнить обработку кнопки "C"

result.addEventListener('click', function (event) {
    event.preventDefault();
    display.append(input.value);
})
