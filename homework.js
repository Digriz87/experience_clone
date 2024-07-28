function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * 901) + 100; // Генерация случайного числа от 100 до 1000
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    let evenPercentage = (evenCount / count) * 100;
    let oddPercentage = (oddCount / count) * 100;

    console.log(`Количество сгенерированных чисел: ${count}`);
    console.log(`Четных чисел: ${evenCount}`);
    console.log(`Нечетных чисел: ${oddCount}`);
    console.log(`Процентное соотношение четных и нечетных: ${evenPercentage.toFixed(2)}% четных, ${oddPercentage.toFixed(2)}% нечетных`);
}


checkProbabilityTheory(1000);