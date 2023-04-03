console.log(localStorage);
// зберігання в localStorage тільки як строка, тому ключ 'my-data' як строка 
// і значення переводимо в строку (там обєкт) через JSON.stringify()
localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 2 }));


// читаємо тільки через localStorage.getItem() який чекає тільки ключ
//  в сонсолі строка
const savedData = localStorage.getItem('my-data');
console.log('savedData', savedData);

// тепер розпарсимо щоб отримати обєкт
const parsedData = JSON.parse(savedData);
console.log('parsedData', parsedData);
