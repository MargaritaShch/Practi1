console.log('Hello!') //строки берем в кавычки - ''/"" разницы между ковычками нет
console.log("world");
console.log("123");
console.log(333);
console.log ('hello' + ' '+ 'world'); //конкатенация строк(слепление строк)
console.info('Hello')// метод console.info - выводит текст на консоль в виде информационного сообщения.  
// alert('hello'); //вывод всплывающих окона
// alert("hi"); 

document.getElementById('out').innerHTML = 'Hello';//getElementById - этот метод применяется когда нужно получить элемент по id; innerHTML - это свойство с помощью которое можно заменить содержимое; = - это значение присваивания 
document.getElementById("out").innerHTML = 2023;
document.getElementById("out").innerHTML = '<b>2020<b>'; //<b> - это жирны шрифт

document.querySelector(".header").innerHTML = 25; //обращаемяс к заголовку <h2 class="header">Hello</h2>; querySelector - получает элемент со страницы (первый который встретит) по селектору в css
document.querySelector('#one').innerHTML= 777; // к id обращаемся через '#'
document.getElementById('one').innerHTML= 888; // тоже обращение к id - решетка не требуется

let b; // var a -  устарело
let a = document.querySelector("#one");// внутрь а получили параграф
let c;
c = document.querySelector(".header");

a.innerHTML = 9999; // new! - нельзя так называть элемент
c.innerHTML = 6666

console.log('Rita')
console.log(4)

// alert(2022)
// alert(2019-200)

document.getElementById('two').innerHTML = 'Hello, World!';
document.getElementById('three').innerHTML = 12*12;
document.querySelector('.one').innerHTML = 'Hello World!';
document.querySelector('span').innerHTML = 'world';

//Создайте пустой div c классом four. С помощью querySelector запишите внутрь div заголовок h3 с произвольным текстом.
document.querySelector('.four').innerHTML = '<h3>My name is Rita<h3>';

//Создайте пустой div c классом five. С помощью querySelector запишите внутрь div заголовок h4 с произвольным текстом и параграф p с произвольным текстом. Подсказка, чтобы дописывать внутрь элемента используейте не innerHTML = , а innerHTML += (плюс равно без пробела).
document.querySelector('.five').innerHTML += '<h4> I am 29 years old <h4> <p>I basaed in Moscow<p>';

//Создайте div с классом six. Получите его в переменную d. С помощью innerHTML запишите внутрь переменной a число 3.1415. Изучите как в JS пишутся дроби - через точку или через запятую!
let d;
d = document.querySelector(".six");
d.innerHTML = 3.1415;

//Создайте div с классом seven. Получите его в переменную div7. С помощью innerHTML запишите в него строку: <img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">
 let div7;
 div7 = document.querySelector('.seven');
 div7.innerHTML = 'https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">';

 // Создайте две переменных z1 = 6, z2 = 3. Создайте div, класс присвойте самостоятельно и выведите в него умножение z1 на z2.
 let z1 = 6;
 let z2 = 3;
 document.querySelector('.eight').innerHTML = z1*z2;

 //Создайте две переменные x1='Hello', x2 = 5. Создайте div, класс присвойте самостоятельно, выведите в него сумму x1 + x2. Изучите результат операции.
 let x1 = 'Hello'
 let x2 = 5
 document.querySelector('.nine').innerHTML= x1+x2;

 //Создайте div с классом test-1. Получите его в переменную d1. Выведите эту переменную в консоль. Изучите вывод.
 let d1;
 d1 = document.querySelector('.test-1');
 console.log(document.querySelector('.test-1')); // null

//Создайте div.test-2. Получите его в переменную d2. Выведите эту переменную в консоль. Присвойте d2 значение 5 (d2 = 5). Выведите переменную в консоль. Изучите вывод.
let d2;
d2 = document.querySelector('.test-2');
console.log(d2);//<div class="test-2"> </div>
d2 = 5;
console.log(d2); // 5

//Создайте div c классом s3 и div с классом s4. Получите div.s3 в переменную divS3. Выведите в консоль divS3. Теперь получите в эту же переменную divS3 блок div c классом s4. Выведите переменную divS3 в консоль. Изучите что изменилось.

let divS3;
divS3 = document.querySelector('.s3');
console.log(divS3); // null

divS3 = document.querySelector('.s4')
console.log(divS3); //null

//Получите c помощью querySelector тег body. С помощью innerHTML присвойте ему пустую строку (...innerHTML = ''). Изучите что произошло. Закомментируйте этот код.
// document.querySelector('body').innerHTML = ''//результат = исчезло все
