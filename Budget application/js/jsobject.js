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