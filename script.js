// Задание 1 

let a = 1;
let b = 1;
let c, d;
//c = ++a; alert(c); 2 префиксальная форма инкримента увеличивает переменную, а затем возвращает ее значение в a. Так что в a попадёт значение i после увеличения.
//d = b++; alert(d);  1 постфиксальная же форма инкремента a++ отличается от префиксной ++b тем, что возвращает старое значение, бывшее до увеличения.
//c = (2+ ++a); alert(c);  5 на момент произведение операции сложения в переменной а лежит 3
//d = (2+ b++); alert(d);  4 здесь же в b лежит 2, т.к. это описано работой постфиксальной формы
//alert(a); // 3 на момент вывода переменных a и b после 2-х инкрементов лежат равные значения не зависимо от формы инкремента.
//alert(b); // 3
// Задание 2

a = 2;
let x = 1 + (a *= 2);
alert ("x = " + x);

// Задание 3 

a = +prompt ("Введи число a");
b = +prompt ("Введите число b");
if ((a >= 0) && (b >= 0)) {
    c = a - b;
    alert ("Разность чисел: " + c);
} else if ((a < 0) && (b < 0)) {
    c = a * b;
    alert ("Произведение чисел: " + c);
} else /*(((a < 0) && (b > 0)) || ((a > 0) && (b < 0)))*/ {
    c = a + b;
    alert ("Сумма чисел: " + c);
}

// Задание 4 

a = +prompt ("Введи число от 1 до 15", 14);
switch (a) {
    case 1: alert(a++);
    case 2: alert(a++);
    case 3: alert(a++);
    case 4: alert(a++);
    case 5: alert(a++);
    case 6: alert(a++);
    case 7: alert(a++);
    case 8: alert(a++);
    case 9: alert(a++);
    case 10: alert(a++);
    case 11: alert(a++);
    case 12: alert(a++);
    case 13: alert(a++);
    case 14: alert(a++);
    case 14: alert(a++);

    case a >= 15: alert("Конец");
    break;

    default: alert("Неправильное число");
}

// Задание 5

a = +prompt("Введи число a: ");
b = +prompt("Введи число b: ");
let itog;

function summa(a, b) {
    return a + b;
}
itog = summa(a, b);
alert("Сумма: " + itog);

function raznost(a, b) {
    return a - b;
}
itog = raznost(a, b)
alert("Разность: " + itog);

function delenie(a, b) {
    return a / b;
}
itog = delenie(a, b)
alert("Частное: " + itog);

function umnojenie(a, b) {
    return a * b;
}
itog = umnojenie(a, b)
alert("Произведение: " + itog);

// Задание 6 

a = +prompt("Введи число a: ");
b = +prompt("Введи число b: ");
c = prompt("Введи название операции c большой буквы: ");

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "Сложение": 
            return arg1 + arg2;
        
        case "Вычитание": 
            return arg1 - arg2;

        case "Частное": 
            return arg1 / arg2;

        case "Произведение": 
            return arg1 * arg2;
    }
}

itog = mathOperation(a, b, c);
alert("Итог: " + itog);

// Задание 7
/*

null - литерал, несет под сабой "пустое" значение, нежели числовой 0

При переводе null в число получаеться 0, однако так или иначе null не равно 0. Как и undefined, null равны между собой и не равны чему бы то ни было ещё. Это жёсткое правило буквально прописано в спецификации языка.

*/

// Задание 8

let val;
let pow;

function power(val, pow) {
    if (pow != 1) {
      return val * power(val, pow - 1);
    } else {
      return val;
    }
  }
  
  alert( power(2, 3) );