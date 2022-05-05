// Все стірлочними!!!!!!!!!
//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array = [1,2,99,100]
// let midle = (item) =>{
//     let sum = 0
//     for (let i=0;i<item.length; i++){
//         sum += item[i]/item.length
//     }
//     return sum
// }
// console.log(midle(array));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let dif = (...x)=>{
//     let min = x[0];
//     let max = x[0];
//     for (let y of x){
//     if(min<y){
//         min = y
//     }
//     if (max>y){
//         max = y
//     }
//     }
//     console.log(max);
//     return min;
// }
// console.log(dif(1,2,3,4,5,6,7,8,-9));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let random = ()=>{
//     let y = [];
//     for (let i = 0; i<15;i++) {
//         y.push(Math.round(Math.random() * 10))
//     }
//     return y
// }
// console.log(random());


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let random = (limit)=>{
//     let y = [];
//     for (let i=0; i<limit;i++){
//         y.push(Math.round(Math.random() * 10))
//     }
//     return y
// }
//
// console.log(random(5));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let y = [1,2,3];
// let revers = (u) => {
//     let x = [];
//     for (let i = u.length - 1; i >= 0; i--) {
//         x.push(u[i])
//     }
//     return x
// }
// console.log(revers(y));

//     Переробити на стрілочні функції з попереднього дз

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let kvadro = (a,b)=>{return a*b}
// console.log(kvadro(10, 20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let round = (r)=>{return 3.14*r**2}
// console.log(round(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let cylinder = (r,h)=>{return 2*3.14*r*h}
// console.log(cylinder(3,10));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = (...d)=>{return d}
// console.log(array(1,2,3,45,6,7,8));
//
// let ar = [1,2,3,4,5,6,6,7]
// let array2 = (d)=>{console.log(d);}
// array2(ar)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let text = (text1) =>{document.write(`<p>${text1}</p>`)}
// text('My name is Yaroslav')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let l = (li)=>{document.write(`<ul>
// <li>${li}</li>
// <li>${li}</li>
// <li>${li}</li>
// </ul>`)}
// l('Hello world')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let s = (li,number)=>{
// for (let i=0; i<number; i++){
//     document.write(`<ul><li>${li}</li></ul>`)
// }
// }
// s('Hello',3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let primat = ['a',1,1,2,3,4,55,true,false];
// let a = (c)=>{
//     for (let v of c){
//         document.write(`<ul><li>${v}</li></ul>`);
//     }
// }
// a(primat)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let array = [
//     {id:1, name: 'Ivan', age: 23},
//     {id:2, name: 'Vasil', age: 27},
//     {id:3, name: 'Petro', age: 24}
// ]
// let f = (t)=>{
//     for (let v of t){
//         document.write(`<div>${v.id},${v.name},${v.age}</div>`)
//     }
// }
// f(array)

// - створити функцію яка повертає найменьше число з масиву

// let array = [3,4,5,6,7,6,-58656,-5656,232,-9]
// let min = (ar) => {
//     let minimal  = ar[0];
//     for (let i=0; i<ar.length;i++){
//         if(ar[i] < minimal){
//             minimal = ar[i]
//         }
//     }
//     return minimal
// }
// console.log(min(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array = [1,2,3,4,5,6]
// let sum = (s)=>{
//     let a = 0;
//     for (let y of s){
//         a +=y;
//     }
//     return a;
// }
// console.log(sum(array));

// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.

let array = [
    {id:2, name:'Ivan', state:true},
    {id:2, name:'Petro', state:true}
]

let change  = (ar)=>[ar[0],ar[1]] = [ar[1],ar[0]];
console.log(change(array));