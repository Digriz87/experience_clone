// Создаем объект с услугами и их стоимостью
var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

// Метод для вычисления общей стоимости услуг
services.price = function() {
    var total = 0;
    for (var key in this) {
        if (typeof this[key] === 'string' && this[key].includes('грн')) {
            total += parseFloat(this[key]);
        }
    }
    return total + " грн";
};

// Метод для нахождения минимальной стоимости услуги
services.minPrice = function() {
    var min = Infinity;
    for (var key in this) {
        if (typeof this[key] === 'string' && this[key].includes('грн')) {
            var price = parseFloat(this[key]);
            if (price < min) {
                min = price;
            }
        }
    }
    return min + " грн";
};

// Метод для нахождения максимальной стоимости услуги
services.maxPrice = function() {
    var max = -Infinity;
    for (var key in this) {
        if (typeof this[key] === 'string' && this[key].includes('грн')) {
            var price = parseFloat(this[key]);
            if (price > max) {
                max = price;
            }
        }
    }
    return max + " грн";
};

// Добавляем новую услугу
services['Розбити скло'] = "200 грн";

// Проверяем методы
console.log("Общая стоимость: " + services.price());
console.log("Минимальная стоимость: " + services.minPrice());
console.log("Максимальная стоимость: " + services.maxPrice());
