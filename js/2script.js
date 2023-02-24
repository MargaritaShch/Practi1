// let a = 6;
// let b = 'Hello';

// console.log(a);

// let inputIn = document.querySelector('.input-in'); //input - строка ввода
// let button = document.querySelector ('button'); // button - кнопка
// // let div = document.querySelector('.out');

// button.onclick = function () {
// //то что здесь прописывается, будет выполнено только тогда, когда кнопка будет нажата
//     console.log('WORK!!!');
//     // value - это то что введено в input
//     let b = +inputIn.value;// '+' позволяет преобразаовать в число, без него js будет считать, что вы слепляете строки
//     console.log(b + 10); //'55'+10 = 6610
//     div.innerHTML = b;
//     inputIn.value = '';
// };

// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
//let a = 7;
//let b = 9;
//console.log(a*b); // 63

//Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.
//let c = 7;
//let d =9;
//console.log(c / d);// 0.777...

//Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f.
//let e = 3;
//let f = 5;
//console.log(e + f);// 8

//Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу результат сложения e1 + f1. Объясните разницу.
//let e1 = '3';
//let f1 = 5;
//console.log(e1 + f1); // 35(конкатенация строк)

//Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу результат деления e2 на f2.
//let e2 = 3;
//let f2 = 0;
//console.log(e2 / 0); // Infinity

//Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу результат сложения двух переменных.
//let e3 = 3;
//let f3 = 'Hello';
//console.log(e3 + f3); // 3Hello

//Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу результат умножения двух переменных.
//let e4 = 3;
//let f4 = 'Hello'
//console.log(e4 * f4); // NaN

// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.
//let inputIn = document.querySelector('.input-in');
//let button = document.querySelector('button');
   // button.onclick = function () {
     // console.log(inputIn.value);
      //let v = +inputIn.value;
      //console.log(v + 10); //<=== По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.
      //inputIn.value = ""; //<===  Добавьте очистку input после нажатия кнопки.
   // };


   //Создайте два input и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в консоль строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.
   // let num1 = document.querySelector('.Name');
    //let num2 = document.querySelector('.Rename');
    //let button = document.querySelector('button');
   // button.onclick = function () {
    //let v = num1.value;
    //let m = num2.value;
    //console.log('hello ,' + v + ' ' + m); 
   // }; // hello ,Rita Nguema

  

    //Создайте input и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.
  

    //Создайте input и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.
  // let y = document.querySelector('.three');
   //y.style.border = '2px solid red'; // объект рамки стал красным

   //Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел.
  // let c3 = document.querySelector('.three');
   //let c4 = document.querySelector('.four');
   //let div = document.querySelector ('.out');
   //let button = document.querySelector('button');
   //button.onclick = function() {
   //let b6 = +c3.value;
   //let b7 = +c4.value;
   //div.innerHTML = b6+b7;
    //console.log(b6+b7);
  // };

   //Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

    //let inputIn = document.querySelector('.three');
    //let button = document.querySelector('button');
   //button.onclick = function () {
     //console.log(inputIn.value);
      //let v = +inputIn.value;
      //console.log(v+10);
   //}

  //let t = document.querySelector(".three");
 //t = parseInt(t); // Функция parseInt преобразует строку в целое число.Преобразование произойдет, если только целое число стоит в начале строки, иначе будет выведено NaN.

//Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
   //let t = document.querySelector(".three");
  // t = parseFloat(t); //Функция parseFloat преобразует строку в число с плавающей точкой. Преобразование произойдет, если только целое число стоит в начале строки, иначе будет выведено NaN.

  // Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

   // Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу.
   // let n1 = document.querySelector(".first");
   // let n2 = document.querySelector(".second");
  //  let button = document.querySelector("button");
   // button.onclick = function () {
     // let x = +n1.value;
      //let y = +n2.value;
      //console.log(x + y);
    //}; //46

  //Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.
  let inputIn = document.querySelector('.name').value;
  let b = document.querySelector('.last_name').value;
  let c = +document.querySelector('.age').value;
  let d = document.querySelector('.work').value;
  let button = document.querySelector('button');
  let div = document.querySelector ('.out');
  button.onclick = function () {
         div.innerHTML =
           "Уважаемый, " +
           inputIn +
           " " +
           b +
           ", " +
           "ваш возраст " +
           c +
           " года, " +
           "по професси вы " +
           d;;
   };