// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let hello = 'hello',
    owu = 'owu';
let com = 'com';
let ua = 'ua';
let first = 1;
let second = 10;
let third = 123;
let four = 3.14;
let five = 2.7;
let six = 16;
let seven = true;
let eight = false;
let nine = -999;

console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(first);
console.log(second);
console.log(third);
console.log(four);
console.log(five);
console.log(six);
console.log(seven);
console.log(eight);
console.log(nine);

// alert(hello);
// alert(owu);
// alert(com);
// alert(ua);
// alert(first);
// alert(second);
// alert(third);
// alert(four);
// alert(five);
// alert(six);
// alert(seven);
// alert(eight);
// alert(nine);

document.write(`<div>${hello}</div>`);
document.write(`<div>${owu}</div>`);
document.write(`<div>${com}</div>`);
document.write(`<div>${ua}</div>`);
document.write(`<div>${first}</div>`);
document.write(`<div>${second}</div>`);
document.write(`<div>${third}</div>`);
document.write(`<div>${four}</div>`);
document.write(`<div>${five}</div>`);
document.write(`<div>${six}</div>`);
document.write(`<div>${seven}</div>`);
document.write(`<div>${eight}</div>`);
document.write(`<div>${nine}</div>`);

// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)


let book1 = {
    name : 'harry poter',
    number : 100,
    genre : 'fantasy'
}
console.log(book1);


// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
// автори (тип - масив, кожен елемент масиву - це стрінга)

let book2 = {
    name : 'harry poter',
    number : 190,
    genre : 'fantasy',
    authors :['Lily', 'Jack', 'Steve' ]
}

console.log(book2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Yaroslav',
middleName = 'Oleksandrovych',
lastName = 'Shvydenko';

let myName = firstName + ' ' + middleName + ' ' +  lastName;
console.log(myName);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

// const name = prompt('Enter your name');
// const name1 = prompt('Enter your middleName');
// const name2 = prompt('Enter your age');

// console.log(name);
// console.log(name1);
// console.log(name2);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// - Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт


const books = [
    book1 = {
        name: 'book_first',
        pages: 200,
        genre: 'Драма',
        author: 'Scott Evens'
    },
    book2 = {
        name: 'book_second',
        pages: 300,
        genre: 'Фантастика',
        author: 'Lily'
    },
    book3 = {
        name: 'book_third',
        pages: 200,
        genre: 'Фентезі',
        author: 'Molly'
    },
]

console.log(books);