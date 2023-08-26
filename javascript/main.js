// Homework

// 3.  Самое длинное имя в списке
// Отправляем функции три аргумента с разными именами
// Функция возвращает максимально длинное имя
// max_name('Alex', 'George', 'Michael')

// console.log(`Задание 1 (самое длинное имя)`);

// function max_name(name_1, name_2, name_3) {
//   let max_name = name_1;
//   if (name_2.length > max_name.length) {
//     max_name = name_2;
//   }
//   if (name_3.length > max_name.length) {
//     max_name = name_3;
//   }
//   return max_name;
// }
// console.log(max_name("Alex", "George", "Michael"));

// //  5. Создать функцию которая делает пропорции не в зависимости от каких  либо цифр
// console.log(`Задание 2 (пропорция)`);

// function proportion(n, p) {
//   n = +prompt(`Number!`);
//   p = +prompt(`Number for proportion!`);
//   if (n >= p) {
//     console.log((p * 100) / n + "%");
//   } else {
//     console.log(`Error`);
//   }
// }
// proportion();

// // Создать цикл который будет выводить цифры фибоначчи и должно остановиться на той цифре которую напишите в промпте
// console.log("Задание 3 (фибоначчи)");

// let pr = +prompt("Число, на котором нужно остановиться");
// let f = [0, 1];

// for (let i = 2; i < pr; i++) {
//   f.push(f[i - 1] + f[i - 2]);
// }
// console.log(f);

// Function min()
function min(a, ...b) {
  if (typeof a === "number") {
    return Math.min(a, ...b);
  } else if (Array.isArray(a)) {
    return Math.min(...a, ...b);
  } else if (typeof a === "object") {
    let arr = [a, ...b];

    let nums = arr.map((item) => Object.values(item)).flat(Infinity);

    return Math.min(...nums);
  }
}

min(1, 2);
min([1, 2]);
min({ a: 1, b: 2 }, { a: -1, b: 2 });
min({ a: 1, b: 2 });

// Функция flat()
function flatten(arr) {
  let temp = [];
  for (let item of arr) {
    if (!Array.isArray(item)) {
      temp.push(item);
    } else {
      temp.push(...flatten(item));
    }
  }
  return temp;
}
let array = [1, 2, 3, 4, "Anisa", ["bot", 1, 70], [(5, true, undefined)]];

// Функция sort()
function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length - i; k++) {
      if (arr[k] > arr[k + 1]) {
        let temp = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = temp;
      }
    }
  }
  return arr;
}
let arr = [4, 6, 7, 1, 2, 3, 8, 9];
let arr2 = ["hello", "bye", "hey", "see you"];
console.log(sort(arr));
