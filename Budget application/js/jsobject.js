let options = {
    widht: 1024,
    height: 1024,
    name: 'test'
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
};
// удаление поля объекта
delete options.bool;

console.log(options);

//перебор полей объекта
for (let key in options){
    console.log('Свойство ' + key + ' имеет занчение ' + options[key]);
}

// вывод количества объектов полей
console.log(Object.keys(options).length);



// Массивы
//+++++++++++++++++++++++++++++

let arr = ['first', 2, 3, 'four', 5];

console.log(arr.length);
// arr.pop(); //Последний 
// arr.push('5');
// arr.shift();
// arr.unshift('1');

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass){
//     console.log(i + ': ' + item + ' (массив: ' + mass + ' )');
// });


// console.log(arr);

//Перебор массива с помощью метода for in and for of
//++++++++++++++++++++++++++++++++++++++++++++++++
// let mass = [1, 3, 4, 6, 7];
//Перебирая массив таким образом мы получем номер элемента массива
// for(let key in mass){
//     console.log(key);
// }
//Перебирая массив таким образом мы получаем значение элемента массива
// for(let key of mass){
//     console.log(key);
// }

//Преобразование строки в массив
//+++++++++++++++++++++++++++++++++

// let ans = prompt('',''),
//     arr1 = [];

// arr1 = ans.split(',');
// console.log(arr1);

//Преобразование массива в строку
//++++++++++++++++++++++++++++++++++++

// let arr2 = ['name', 'first', 'rp', 'hello'],
//     i = arr2.join(', ');

// console.log(i);

//Сортировка массива по алфавиту
//++++++++++++++++++++++++++++++++++++
let arr6 = ['name', 'case', 'hello', 'pink'],
    i = arr6.sort();
console.log(i);

//Сортировка массива по числам
//++++++++++++++++++++++++++++++++++

let arr8 = [4, 16, 2, 7, 1],
    intt = arr8.sort(compareNum);
//Важная функция для сортировки имменно по числовым значениям
function compareNum(a,b) {
    return a-b;
}
console.log(intt);

// ООП in JavaScript
//++++++++++++++++++++++++++++++++++++++++++++++++

let soldier = {
    health: 400,
    amor: 100
};

let john = {
    health: 100
};

john.__proto__=soldier;

console.log(john);
console.log(john.amor);

