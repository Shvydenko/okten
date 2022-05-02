// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function square (a,b){
//     return a * b;
// }
// let h = square(10,20)
// console.log(h);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function round(r){
//     return 3.14 * r**2
// }
// let s = round(20)
// console.log(s);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function Cylinder(r,h){
//     return 2*3.14 * r * h
// }
//
// console.log(Cylinder(10, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент

// array = [1,3,2,4,5,66,44,3]
// function arr(g){
//     for (let x of g){
//         console.log(x);
//     }
// }
// arr(array)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function text (h){
//  return (`<h1>${h}</h1>`)
// }
// document.write(text('weather is good'));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


// function list (a){
//     return (`<ul><li>${a}</li><li>${a}</li><li>${a}</li></ul>`)
// }
// let l = list("My name" ,'is Yaroslav' ,"I am 27 years old")
// document.write(l)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list (a,li){
//     document.write(`<ul>`)
//     for (let i = 0; i<li ; i++){
//         document.write(`<li>${a}</li>`)
//     }
//     document.write(`</ul>`)
// }
// list('Work', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// array = ['a',true,10,90,'b']
//
// function symbols (k){
//     for (let x of k){
//         document.write(`<li>${x}</li>`)
//     }
// }
// symbols(array)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let array = [
//     {id:1, name:'yaroslav', age:25},
//     {id:2, name: 'alexandr', age: 26},
//     {id:3, name: 'pavlo', age: 30},
// ]
//
// function index (y){
//     for (let x of y){
//         document.write(`<div>${x.id}, ${x.name}, ${x.age}</div>`)
//     }
// }
// index(array)

// - створити функцію яка повертає найменьше число з масиву

// let array = [1,2,3,4,5,6,7,77,0,1,-1,-10]
// function min (r) {
//     let min = r[0];
//     for (let i = 0; i < r.length; i++) {
//         if (r[i] < min) {
//             min = r[i];
//         }
//     }
// return min
// }
// console.log(min(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// const array = [1,2,3,4,5,6,78,90]
// function sum (y){
//     let summa = 0;
//     for (let r of y){
//     summa  = summa + r;
//     }
//     return summa
// }
// console.log(sum(array));