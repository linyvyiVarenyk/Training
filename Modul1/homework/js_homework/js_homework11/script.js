/**
 Написати реалізацію кнопки "Показати пароль". Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.

    Технічні вимоги:

    У файлі index.html лежить розмітка двох полів вводу пароля.
    Після натискання на іконку поруч із конкретним полем - повинні відображатися символи, які ввів користувач,
    іконка змінює свій зовнішній вигляд. У коментарях під іконкою - інша іконка, саме вона повинна відображатися замість поточної.
    Коли пароля не видно - іконка поля має виглядати як та, що в першому полі (Ввести пароль)
    Коли натиснута іконка, вона має виглядати, як та, що у другому полі (Ввести пароль)
    Натиснувши кнопку Підтвердити, потрібно порівняти введені значення в полях
    Якщо значення збігаються – вивести модальне вікно (можна alert) з текстом – You are welcome;
    Якщо значення не збігаються - вивести під другим полем текст червоного кольору Потрібно ввести однакові значення

Після натискання на кнопку сторінка не повинна перезавантажуватись
Можна міняти розмітку, додавати атрибути, теги, id, класи тощо. **/


const passwordField = document.querySelector("#password");
const checkPasswordField = document.querySelector("#check-password");
const enterBtn = document.querySelector(".btn");
const formError = document.querySelector('.text-alert');
const form = document.querySelector('.password-form');

form.addEventListener('click', (e) => {
    e.preventDefault()
    if(e.target.tagName === 'I') {
        e.target.classList.toggle( 'fa-eye-slash' );
        let inputId  = e.target.previousElementSibling
        if(inputId.type === "password"){
            inputId.type = 'text'
        } else {
            inputId.type = 'password'
        }
    }
})
enterBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    if(passwordField.value === checkPasswordField.value) {
        formError.innerText = "Успішно"
        formError.style.color = "#32d932"

    } else {
        formError.innerText = "Паролі не співпадають"
        formError.style.color = "#ff0000"
    }

})