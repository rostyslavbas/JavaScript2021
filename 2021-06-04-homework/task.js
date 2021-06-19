// 1) створити функцію яка приймає масив та виводить його
// function arrayPush(getArray) {
//     return getArray;
// }

// let check = arrayPush([1, 2, 3, 4, 5]);
// console.log(check)

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// function arrayRandom(length, min, max) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random() * (min + max) + min))
//     }
//     return array;
// };
// let check2 = arrayPush(arrayRandom(5, 10, 200));
// console.log(check2)

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function lowestNumber(one, two, three) {
//     let min = three;
//     if (one <= two && one <= three) min = one;
//     if (two <= one && two <= three) min = two;
//     return min;
// }
// let lowest = lowestNumber(4, 10, 900);
// console.log(lowest)

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function biggestNumber(one, two, three) {
//     let max = three;
//     if (one >= two && one >= three) max = one;
//     if (two >= one && two >= three) max = two;
//     return max;
// }
// let biggest = biggestNumber(4, 10, 900);
// console.log(biggest)

// 5) створити функцію яка повертає найбільше число з масиву
// function bigNumArray(array) {
//     let max = array[0];
//     for (let i of array) {
//         if (max < i) max = i;
//     }
//     return max;
// }
// let biggestNum = bigNumArray([1, 6, 9, 23])
// console.log(biggestNum)


// 6) створити функцію яка повертає найменьше число з масиву
// function lowNumArray(array) {
//     let min = array[0];
//     for (let i of array) {
//         if (min > i) min = i;
//     }
//     return min;
// }
// let lowestNum = lowNumArray([1, 6, 9, 23])
// console.log(lowestNum)


// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]


// ============================================================================================

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ] 

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'



// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger';


// function norm(name) {
//     let namee = name.trim().split(' ').slice(0, 1);
//     let Surname = name.trim().split(' ').pop();
//     let nameSurname = namee + ' ' + Surname;

//     return nameSurname
// }
// let xxx = norm(n3);

// console.log(xxx)

// ============================================================================================