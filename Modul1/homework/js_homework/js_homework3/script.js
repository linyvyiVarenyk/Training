/* Теоретичні питання
// Описати своїми словами у кілька рядків, навіщо у програмуванні потрібні цикли. - Цикли можуть полегшити роботу з діями, які необхідно повторювати на сайті декілька разів.
//     Опишіть у яких ситуаціях ви використовували той чи інший цикл в JS. - while - доцільно використовувать, коли кільькість ітерацій невизначена; for - доцільно використовувать коли кількість ітерацій визначена.
//     Що таке явне та неявне приведення (перетворення) типів даних у JS? - Явне перетворення типів даних відбувається, коли ми самі хочемо їх перетворити (нам це необхідно). Неявне перетворення типів відбувається автоматично з окремими типами даних.
//
//     Завдання
//     Реалізувати програму на Javascript, яка знаходитиме всі числа кратні 5 (діляться на 5 без залишку) у заданому діапазоні. Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.
//
//     Технічні вимоги:
//     Отримати за допомогою модального вікна браузера число, яке введе користувач.
//     Вивести в консолі всі числа, кратні 3, від 0 до введеного користувачем числа. Якщо таких чисел немає - вивести в консоль фразу "Sorry, no numbers"
// складно вивести кількість цих цифр
// Обов'язково необхідно використовувати синтаксис ES6 (ES2015) для створення змінних.
// Необов'язкове завдання підвищеної складності
// Перевірити, чи введене значення є цілим числом. Якщо ця умова не дотримується, повторювати виведення вікна на екран, доки не буде введено ціле число.
//     Отримати два числа, m і n. Вивести в консоль усі прості числа (http://ru.math.wikia.com/wiki/%D0%9F%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE) в діапазоні від m до n (менше із введених чисел буде m, більше буде n). Якщо хоча б одне з чисел не відповідає умовам валідації, зазначеним вище, вивести повідомлення про помилку і запитати обидва числа знову. */

let enterNumber = prompt("Enter your number");

if (enterNumber >= 5) {
    for (let i = 0; i <= enterNumber; i++) {
        if (i % 5 === 0) console.log(i);
    }
} else console.log("Sorry, no numbers.")





