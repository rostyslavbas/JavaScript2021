// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let array = ['a', 'b', 'c'];

// for (let i = 1; i < 4; i++) {
//     array.push(i)

// }
// console.log(array)

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let array = [1, 2, 3];
// array = [3, 2, 1];

// console.log(array);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let array = [1, 2, 3];

// for (let i = 4; i < 7; i++) {
//     array.push(i)
// };

// console.log(array);
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let array = [1, 2, 3];

// for (let i = 4; i < 7; i++) {
//     array.unshift(i)
// }
// console.log(array)

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// const array = ['js', 'css', 'jq'];
// console.log(array.shift());

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// const array = ['js', 'css', 'jq'];
// console.log(array.pop());

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// let array = [1, 2, 3, 4, 5];

// for (let i = 0; i < 3; i++) {
//     array.shift()
// }
// console.log(array)

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// let array = [1, 2, 3, 4, 5];

// for (let i = 0; i < 3; i++) {
//     array.pop()
// }

// console.log(array);


// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//     Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри
// let array = [1, 2, 3, 4, 5];

// let array2 = ['a', 'b', 'c'];

// let holder = [];



// for (let i = 0; i < 2; i++) {
//     holder.unshift(array.pop())
// }

// for (let i = 0; i < 3; i++) {
//     array.push(array2[i])
// }

// for (let i = 0; i < 2; i++) {
//     array.push(holder[i])
// }

// console.log(array);



// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//     Підказка. Працюйте по принципу задачі вище.
// let array = [1, 2, 3, 4, 5];
// let array2 = ['a', 'b', 'c', 'e'];
// let holder = [];

// for (let i = 2; i < 6; i++) {
//     holder.unshift(array.pop())
// }

// for (let i = 0; i < 2; i++) {
//     array.push(array2[i])
// }

// for (let i = 0; i < 3; i++) {
//     array.push(holder[i])
// }

// for (let i = 2; i < 3; i++) {
//     array.push(array2[i])
// }

// for (let i = 3; i < 4; i++) {
//     array.push(holder[i])
// }

// for (let i = 3; i < 4; i++) {
//     array.push(array2[i])
// }

// console.log(array)

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 1; i < array.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(array[i])
//     }
// }


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let array2 = [];

// for (let i = 0; i < array.length; i++) {
//     array2.push(array[i])
// }

// console.log(array2)

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let array2 = [];

// for (let i = 0; i < 10; i++) {
//     array2.unshift(array.pop())
// }

// console.log(array2)