// - Знайти та вивести довижину настипних стрінгових значень
// let string =  'hello world';
// let string2 = 'lorem ipsum';
// let string3 = 'javascript is cool';
//
// console.log(string.length);
// console.log(string2.length);
// console.log(string3.length);

// - Перевести до великого регістру наступні стрінгові значення
// let s = ['hello world', 'lorem ipsum', 'javascript is cool']
// console.log(s[0].toUpperCase());
// console.log(s[1].toUpperCase());
// console.log(s[2].toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// let d = ['HELLO WORLD','LOREM IPSUM','JAVASCRIPT IS COOL']
// console.log(d[0].toLowerCase());
// console.log(d[1].toLowerCase());
// console.log(d[2].toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
//
// let replaceAll = str.replaceAll(' d', 'd')
//     .replaceAll('ing   ','ing')
// document.write(replaceAll);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let stringToarray = (s)=> {return s.split(' ')};
// console.log(stringToarray(str));

//
//
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//  let n = [10,8,-7,55,987,-1011,0,1050,0];
// let c = n.map((s)=>{
//     return (s.toString())
// })
// console.log(c);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// let sortNums = nums.sort((b,a)=>{
//  return a - b
// })
// console.log(sortNums);

// let nums = [11,21,3];
// function sortNums(ar,direction){
//     ar.sort((a,b)=>{
//         if (direction === 'ascending'){
//             return a-b
//         }
//         if (direction === 'descending'){
//             return b-a
//         }
//     })
//     return ar
// }
//
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));

// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// function sortFilter (array){
//     let sort = array.sort((a,b)=>b.monthDuration - a.monthDuration)
//     let filter = array.filter(value =>value.monthDuration>5)
//     console.log(sort);
//     console.log(filter);
// }
// sortFilter(coursesAndDurationArray);


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

// let deckOfCards = [
//     {value: 6, cardSuit: 'spade', color: 'black'},
//     {value: 6, cardSuit: 'diamond', color: 'red'},
//     {value: 6, cardSuit: 'heart', color: 'red'},
//     {value: 6, cardSuit: 'clubs', color: 'black'},
//
//     {value: 7, cardSuit: 'spade', color: 'black'},
//     {value: 7, cardSuit: 'diamond', color: 'red'},
//     {value: 7, cardSuit: 'heart', color: 'red'},
//     {value: 7, cardSuit: 'clubs', color: 'black'},
//
//     {value: 8, cardSuit: 'spade', color: 'black'},
//     {value: 8, cardSuit: 'diamond', color: 'red'},
//     {value: 8, cardSuit: 'heart', color: 'red'},
//     {value: 8, cardSuit: 'clubs', color: 'black'},
//
//     {value: 9, cardSuit: 'spade', color: 'black'},
//     {value: 9, cardSuit: 'diamond', color: 'red'},
//     {value: 9, cardSuit: 'heart', color: 'red'},
//     {value: 9, cardSuit: 'clubs', color: 'black'},
//
//     {value: 10, cardSuit: 'spade', color: 'black'},
//     {value: 10, cardSuit: 'diamond', color: 'red'},
//     {value: 10, cardSuit: 'heart', color: 'red'},
//     {value: 10, cardSuit: 'clubs', color: 'black'},
//
//     {value: 'ace', cardSuit: 'spade', color: 'black'},
//     {value: 'ace', cardSuit: 'diamond', color: 'red'},
//     {value: 'ace', cardSuit: 'heart', color: 'red'},
//     {value: 'ace', cardSuit: 'clubs', color: 'black'},
//
//     {value: 'jack', cardSuit: 'spade', color: 'black'},
//     {value: 'jack', cardSuit: 'diamond', color: 'red'},
//     {value: 'jack', cardSuit: 'heart', color: 'red'},
//     {value: 'jack', cardSuit: 'clubs', color: 'black'},
//
//     {value: 'queen', cardSuit: 'spade', color: 'black'},
//     {value: 'queen', cardSuit: 'diamond', color: 'red'},
//     {value: 'queen', cardSuit: 'heart', color: 'red'},
//     {value: 'queen', cardSuit: 'clubs', color: 'black'},
//
//     {value: 'king', cardSuit: 'spade', color: 'black'},
//     {value: 'king', cardSuit: 'diamond', color: 'red'},
//     {value: 'king', cardSuit: 'heart', color: 'red'},
//     {value: 'king', cardSuit: 'clubs', color: 'black'},
//
//     {value: 'joker', color: 'black'},
//     {value: 'joker', color: 'red'},
// ]


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

// let Cards = (array) => {
//     let s =  array.reduce((accum, x) => {
//         if (x.value === 'ace' && x.cardSuit === 'spade') {
//             accum.spadeBlackAce.push(x)
//         }
//         if (x.value === 6) {
//             accum.six.push(x)
//         }
//         if (x.cardSuit === 'heart') {
//             accum.heart.push(x)
//         }
//         if (x.cardSuit === 'diamond') {
//             accum.diamonds.push(x)
//         }
//         if (x.cardSuit === 'clubs' && x.value !== 6 && x.value !== 7 && x.value !== 8) {
//             accum.clubs.push(x)
//         }
//         return accum
//     }, {spadeBlackAce: [], six: [], heart: [], diamonds: [], clubs:[]})
//     console.log(s);
// }
// Cards(deckOfCards);