// Создаем объект с тремя свойствами
let myObject = {
    name: "Harry",
    age: 30,
    profession: "Wizard"
};

// Добавляем метод getInfo() к объекту
myObject.getInfo = function() {
    for (let key in this) {
        // Проверяем, чтобы ключ не был функцией
        if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {
            console.log(`${key}: ${this[key]}`);
        }
    }
};

// Вызываем метод getInfo(), чтобы вывести свойства объекта
myObject.getInfo();

// Добавляем новое свойство к объекту
myObject.newProperty = "Новое свойство!";

// Снова вызываем метод getInfo(), чтобы убедиться, что новое свойство также выводится
myObject.getInfo();