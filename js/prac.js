// 1. Выведите в консоль ваше имя.
console.log('Rita'); // done

//2. Выведите в консоль номер месяца в котором вы родились. Изучите чем отличается вывод числа и строки.

console.log(4); //done, не обособляется число ковычками в отличие от сроки

//3.Выведите в консоль строку: 'Добро '+'пожаловать '+' на курс'
console.log("Добро " + "пожаловать " + "на курс"); //done

//4. С помощью alert выведите число 2019. После срабатывания кода - закомментируйте его, чтобы не мешал для дальнейшей разработки.
//alert(2019); done

//5. С помощью alert выведите результат операции: 2019 - 200
// let a = 2019;
// let b = 200;
// alert(a-b); Done

//6. Создайте на странице div с id=one. С помощью document.getElementById запишите в данный элемент текст 'Hello World'.
    document.getElementById('one').innerHTML = 'Hello World';// Done

//7.Создайте на странице div с id=two. С помощью document.getElementById запишите в данный элемент результат умножения 12 на 12. Умножение можно сделать с помощью знака звездочки ( цифра 8).
    document.getElementById('two').innerHTML = 12*12;// Done

//8.Создайте div с классом one. С помощью document.querySelector запишите в данный элемент текст 'Hello World'.
    document.querySelector('.one').innerHTML = "Hello World"; // Done

//9.Создайте следующую верстку на странице:<h2>Hello <span>everyone</span></h2>. Замените с помощью querySelector текст everyone на world.
    document.querySelector('span').innerHTML = 'world'; //Done

//10.Создайте пустой div c классом three. С помощью querySelector запишите внутрь div заголовок h3 с произвольным текстом
    document.querySelector('.three').innerHTML = '<h3>Good morning<h3>';// Done

//11.Создайте пустой div c классом four. С помощью querySelector запишите внутрь div заголовок h4 с произвольным текстом и параграф p с произвольным текстом. Подсказка, чтобы дописывать внутрь элемента используейте не innerHTML = , а innerHTML += (плюс равно без пробела).
    document.querySelector('.four').innerHTML += '<h4>Title<h4> <p>Part 1<p>'; //Done

// 12.Создайте div с классом five. Получите его в переменную a. С помощью innerHTML запишите внутрь переменной a число 3.1415. Изучите как в JS пишутся дроби - через точку или через запятую!
   // let a = document.querySelector('.five');
   // a.innerHTML = 3.1415; // Done, дробь пишеться через точку, если указать "," дробная часть не будет учитываться

// 13. Создайте div с классом seven. Получите его в переменную div7. С помощью innerHTML запишите в него строку:<img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt=""> Обратите внимание. Вам придется вставить строку, которая уже содержит кавычки. Главное чтобы кавычки чередовались. Поэтому при вставке оберните данную строку одинарными кавычками.
    let div7 = document.querySelector('.seven');
    div7.innerHTML =
  '<img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">'; //Done, появилось изображение

//14.Создайте две переменных z1 = 6, z2 = 3. Создайте div, класс присвойте самостоятельно и выведите в него умножение z1 на z2.
    let z1 =6;
    let z2= 3;
    document.querySelector('.eight').innerHTML = z1*z2; //Done  

//15.Создайте две переменных y1 = 6, y2 = 3. Создайте div, класс присвойте самостоятельно, выведите в него деление y1 на y2
    let y1 = 6;
    let y2 = 3;
    document.querySelector('.nine').innerHTML = y1/y2; //Done

//16.Создайте две переменные x1='Hello', x2 = 5. Создайте div, класс присвойте самостоятельно, выведите в него сумму x1 + x2. Изучите результат операции.
    let x1 = 'Hello';
    let x2 = 5;
    document.querySelector('.ten').innerHTML = x1 + x2;// Done, result: Hello5 - конкатенация строк произошла

//17. Создайте div с классом test-1. Получите его в переменную d1. Выведите эту переменную в консоль. Изучите вывод.
    let d1 = document.querySelector('.text-1');
    console.log(d1); // result: null - отсутствие какого-либо объектного значения

//18.Создайте div.test-2. Получите его в переменную d2. Выведите эту переменную в консоль. Присвойте d2 значение 5 (d2 = 5). Выведите переменную в консоль. Изучите вывод.
    let d2 = document.querySelector('.test-2');
    d2 = 5;
    console.log(d2);//Done,result: 5, присвоили зачение

//19.Создайте div c классом s3 и div с классом s4. Получите div.s3 в переменную divS3. Выведите в консоль divS3. Теперь получите в эту же переменную divS3 блок div c классом s4. Выведите переменную divS3 в консоль. Изучите что изменилось.
    let divS3 = document.querySelector(".s3");
    console.log(divS3); //result:  <div class="s3"></div>
    divS3 = document.querySelector(".s4");
    console.log(divS3);// Done ; Look result in console

//20.Получите c помощью querySelector тег body. С помощью innerHTML присвойте ему пустую строку (...innerHTML = ''). Изучите что произошло. Закомментируйте этот код.
    //document.querySelector('body').innerHTML = ''; // all deleted

//1. Cоздайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
    let a = 7;
    let b = 9;
    console.log(a*b);// Done, result:63

//2. Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.
    let c = 7;
    let d = 9;
    document.querySelector('.out').innerHTML = c/d;// Done; result: 0.7777777777777778

//3.Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f.
    let e = 3;
    let f = 5;
    document.querySelector('.out2').innerHTML = e + f;// Done; result:8.

//4. Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу результат сложения e1 + f1. Объясните разницу.
    let e1 ='3';
    let f1 = 5;
    document.querySelector(".out3").innerHTML = e1 + f1;// Done; result: 35; произола конкатенация строк, так как в перемеенной e1 указана значение строки

//5.Cоздайте две переменные e2 = 3 и f2 = 0. Выведите на страницу результат деления e2 на f2.
    let e2 = 3;
    let f2 = 0;
    document.querySelector(".out4").innerHTML = e2/f2;//Done; result: Infinity - явялется спецификой языка JS при делении на 0.

//6. Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу результат сложения двух переменных.
    let e3 = 3;
    let f3 = 'Hello';
    document.querySelector(".out5").innerHTML = e3 + f3;//Done: result: 3Hello -произола конкатенация строк, так как в перемеенной f3 указана значение строки

//7.Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу результат умножения двух переменных.
    let e4 = 3;
    let f4 = 'Hello';
    document.querySelector(".out6").innerHTML = e4 * f4;//Done; result: NaN - функция, пытающаяся считать число из строки, терпит неудачу по причине того, что в строке не число

//8.Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.
    let inputIn = document.querySelector(".input-in");
    let button = document.querySelector('button');
    let out7 = document.querySelector('.out7');
    button.onclick = function() {
      //console.log(inputIn.value);
      out7.innerHTML = inputIn.value; //Done;9.По нажатию на кнопку выполняется функция, которая выводит на страницу, что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.
      inputIn.value = ""; //Done; Добавьте очистку input после нажатия кнопки.
    }; //Done

//10.Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.
    let inputIn1 = document.querySelector(".input-in1");
    let button1 = document.querySelector(".b1");
    let out8 = document.querySelector(".out8");
    button1.onclick = function() {
        out8.innerHTML = inputIn1.value * 10; 
    }; //Done

//11.Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь и к нему добавленное число 10
    let inputIn2 = document.querySelector(".input-in2");
    let button2 = document.querySelector(".b2");
    let out9 = document.querySelector(".out9");
    button2.onclick = function() {
        let l1 = +inputIn2.value;
        out9.innerHTML = l1 + 10;
    }; //Done. Но не понятно условие задачи, должно быть +10 или 10 как добавление

//2.Создайте два input и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в консоль строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.
    let names = document.querySelector('.name');
    let surname = document.querySelector('.surname');
    let button3 = document.querySelector('.b3');
    button3.onclick = function () {
        console.log('Hello, '+ names.value +' '+ surname.value);
    }; //Done

//13.Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу.
    let ones = document.querySelector(".ones");
    let twoes = document.querySelector(".twoes");
    let out10 = document.querySelector(".out10");
    let button4 = document.querySelector(".b4");
    button4.onclick = function(){
         let p1 = +ones.value;
         let p2 = +twoes.value
        out10.innerHTML = p1+p2;
    }// Done

//14.Создайте input и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.
    let thing = document.querySelector(".thing");
    thing.value = 'Hello'; // Done

//15.Создайте input и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.
    let y = document.querySelector(".thing1");
    y.style.border = '2px solid red';//Done. рамка стала красной

//16.Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел на страницу.
    let h1 = document.querySelector(".h1");
    let h2 = document.querySelector(".h2");
    let out11 = document.querySelector(".out11");
    let button5 = document.querySelector(".b5");
    button5.onclick = function(){
         let m1 = +h1.value;
         let m2 = +h2.value
        out11.innerHTML = m1+m2;
    };//Done

//17.Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод
    let input11 = document.querySelector(".tt1");
    let button6= document.querySelector(".b6");
        button6.onclick = function(){
            let t= input11.value;
            t = parseInt(t);
            console.log(t);
        }; // Done. ввод 44 = 44, ввод 44ааа = 44, ввод 44.3 = 44, ввод а45 = NaN.Функция parseInt преобразует первый переданный ей аргумент в строковый тип, интерпретирует его и возвращает целое число или значение NaN.Если первый символ строки не может быть преобразован в число, parseInt возвращает значение NaN.

//18.Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод

    let input22 = document.querySelector(".tt2");
    let button7 = document.querySelector(".b7");
    button7.onclick = function () {
    let t = input22.value;
    t = parseFloat(t);
    console.log(t);
    };//Done. ввод 44 = 44 , ввод 44ааа = 44, ввод 44.3 = 44.3 , ввод а45 = NaN.parseFloat разбирает текстовую строку, ищет и возвращает из неё десятичное число. Если функция встретит знак, отличный от (+ или -), цифр(0-9), разделительной точки, или показателя степени, она вернёт значение, предшествующее этому знаку, игнорируя все последующие символы . Допускаются позади и впереди идущие пробелы. Если первый символ не может быть сконвертирован в число, то возвращается NaN.

//19.Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!
    let input33 = document.querySelector(".tt3");
    let input44 = document.querySelector(".tt4");
    let button8 = document.querySelector(".b8");
    let out12 = document.querySelector(".out12");
    button8.onclick = function ()   {
        let o1 = +input33.value;
        let o2 = +input44.value;
        o1 = parseInt(o1);
        o2 = parseInt(o2);
        out12.innerHTML = o1+o2;
    }//Done. При parseInt минус отобрадается корректно в сложении (или вычитании) с результатом "-"

//20.Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.
    let name11 = document.querySelector(".name11");
    let surname22 = document.querySelector(".surname22");
    let age1 = document.querySelector(".age1");
    let work1 = document.querySelector(".work1");
    let out13 = document.querySelector(".out13");
    let button9 = document.querySelector(".b9");
    button9.onclick = function(){
        out13.innerHTML += 'Уважаемый, ' + name11.value +' '+surname22.value+', '+'ваш возраст '+ age1.value +', по професии вы '+ work1.value;
    };//Done

//1.При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.
    document.querySelector(".b-1").onclick = function f1() {
      let i1 = +document.querySelector(".i-1").value;
      let out1 = document.querySelector(".out-1");
      if (i1 == 4) {
        out1.innerHTML = true;
      } else {
        out1.innerHTML = false;
      }
    };// Done

//2.Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.
    let a21 = 44;
    let a22 = 57;
    let out2 = document.querySelector(".out-2");
    document.querySelector('.b-2').onclick = function f2() {
        if(a21<a22) {
            out2.innerHTML = a22;
        } else  {
            out2.innerHTML = a21;
        }
    }; //Done.Остались вопросы по офрмлению html ???

//3. Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должна прочитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в out-3 большее число.Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111
 
    document.querySelector('.b-3').onclick = function f3() {
        let i31 = document.querySelector(".i-31").value;
        let i32 = document.querySelector(".i-32").value;
        let out3 = document.querySelector(".out-3");
            if (i31<i32){
                out3.innerHTML = i32;
            }
            else if (i31>i32){
                out3.innerHTML = i31;
            }
            else {
                out3.innerHTML = i31 == i32;
            }
    };//Done

//4.Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.
    document.querySelector('.b-4').onclick = function f4(){
        let i4 = document.querySelector(".i-4").value;
        let out4 = document.querySelector(".out-4");
            if (i4 < 2005) {
            out4.innerHTML = 1;
            } else {
            out4.innerHTML = false;
            }
    };//Done

//5.Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.
    document.querySelector(".b-5").onclick = function f5() {
      let i5 = document.querySelector(".i-5").value;
      let out5 = document.querySelector(".out-5");
      if (i5 < 0) {
        out5.innerHTML = 'm'
      } else {
        out5.innerHTML = false;
      }
    };//Done

//6.Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в .out-6 слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю - четное, нет -нечетное.
    document.querySelector(".b-6").onclick = function f6() {
      let i6 = document.querySelector(".i-6").value;
      let out6 = document.querySelector(".out-6");
      if (i6 % 2 == 0) {
        out6.innerHTML = "even";
      } else if(i6 % 2 != 0){
        out6.innerHTML = 'odd';
      }
    };//Done. '%' - Бинарный оператор. Оператор возвращает целый остаток от деления левого операнда на правый. Возвращаемое значение всегда получает знак делимого, а не делителя. Бинарным называется оператор, который применяется к двум операндам. Тот же минус существует и в бинарной форме

//7.Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в out-7. Для возведения в степень можно использовать **, или Math.pow.
    document.querySelector(".b-7").onclick = function f7() {
         let i71 = document.querySelector(".i-71").value;
         let i72 = document.querySelector(".i-72").value;
         let out7 = document.querySelector(".out-7");
            out7.innerHTML= i71 ** i72;
    }; //Done

//8. Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если   число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.
      document.querySelector(".b-8").onclick = function f8() {
        let select = document.getElementById("s-8").value;
         let out8 = document.querySelector('.out-8');
            switch (select) {
           case (select == 1):
            out8.innerHTML = "one";
              break;
            case (select == 2):
              out8.innerHTML = "two" ;
            break;
           case (select == 3):
                out8.innerHTML = 'three';
                break;
            default:
               out8.innerHTML = false;
           }
      }; //Задача не решена, разобраться с switch case. Получается решить без switch case или if-else
    
// 9. Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в .out-9 номер подъезда, в котором находится квартира.
   // -если от 1 до 32 - то вывести цифру 1
    //-если от 33 до 43 - то вывести 2
    //-если от 44 до 64 - то 3.
    //-В противном случае, вывести 0.
      document.querySelector('.b-9').onclick = function f9 () {
        let i9 = document.querySelector ('.i-9').value;
        let out9 = document.querySelector(".out-9");
        if (i9 <= 32){
            out9.innerHTML = '1';
        }
        else if (i9 >= 33 && i9 <=43) {
            out9.innerHTML = '2';
        }
        else if (i9 >= 44 && i9 <=64 ){
            out9.innerHTML = '3';
        }
        else {
            out9.innerHTML = '0';
        }
      };//Done

//10.Дан select s-100. По нажатию кнопки, выведите value выбранного option в out-10.
document.querySelector(".b-10").onclick = function f10() {
        let select = document.querySelector(".s-100");
        let out10 = document.querySelector('.out-10');
        out10.innerHTML = select.value;
}; // Done,не получается решить способом if-else, надо ли?

//11.Дан select s-110. По изменению состояния select (событие onchange) выведите value выбранного option в out-11.
   function myFunction() {
        let select = document.querySelector(".s-110").value;
        let out111 = document.querySelector(".out-11");
        out111.innerHTML = select;
   };//Done. Атрибут onchange запускает момент, когда изменяется значение элемента.   onchange происходит, когда элемент теряет фокус.  событие onChange также работает с элементами <select>

//12.12.Дан input i-120. По нажатию кнопки получите значение из input в переменную, а затем выведите в out-12 typeof полученной переменной. Typeof позволяет определить тип данных. Обратите внимание, данная задача уже решена, нужно убрать комментарии и изучить работу.
   document.querySelector('.b-12').onclick = function f12() {
        let i120 = document.querySelector(".i-120").value;
        let out12 = document.querySelector(".out-12");
       out12.innerHTML = typeof i120;
   };//Done, но отобрадет при лююбом типе ввода данных строку.Oператор typeof позволяет определить тип параметра (число, строка, объект). Оператор возвращает строку, содержащую тип ('number', 'string', 'object').

//13.Дан input i-130. В отличие от предыдущего задания - input type number. По нажатию кнопки получите значение из input в переменную, а затем выведите в out-13 typeof полученной переменной. Typeof позволяет определить тип данных. Если вы правильно все сделали - то удивительно, но тип данных будет string! Подумайте почему так?
   document.querySelector(".b-13").onclick = function f12() {
     let i130 = document.querySelector(".i-130").value;
     let out13 = document.querySelector(".out-13");
     out13.innerHTML = typeof i130;
   };// Done. Значения всех полей формы, это строки. Тип поля к его значению не имеет отношения, он указывает браузеру какое поле нужно отобразить.

//14.Дан input i-141 и input-142, type=number. Дан select s-143, который содержит две операции - +, -, *, / . Дана кнопка b-14, при нажатии на которую срабатывает функция f14. Функция выводит в out-14 результат операций выбранной в 3-м select к числам введенным в первом и втором input. Например выбрано 1 13 +, нужно вывести результат операции 1+13 т.е. 14
   document.querySelector('.b-14').onclick = function f14 () {
        let i141 = document.querySelector(".i-141").value;
        let i142 = document.querySelector(".i-142").value;
        let out14 = document.querySelector(".out-14");
        let select = document.querySelector(".s-143").value;
        if (select == "+") {
            
            out14.innerHTML += i141 + i142;
        }
        else if(select == "-") {
            out14.innerHTML = i141 - i142;
        }
        else if (select == "*") {
            out14.innerHTML = i141 * i142;
        }
        else if (select == "/") {
            out14.innerHTML = i141 / i142;
        }

   };//Done. Но при выполнении первого условия происходит не сложение, а конкатенация строк.

//Дан select s-151 и s-152, каждый из которых содержит 1 и 0. Дан select s-153, который содержит две операции - && и || . Дана кнопка b-15, при нажатии на которую срабатывает функция f15. Функция выводит в out-15 результат логических операций выбранных в 3 select к числам выбранным в первом и втором select. Например выбрано 1 1 &&, нужно вывести результат операции 1&&1 т.е. 1 или 0.
   document.querySelector('.b-15').onclick = function f15 () {
        let s151 = document.querySelector(".s-151").value;
        let s152 = document.querySelector(".s-152").value;
        let s153 = document.querySelector(".s-153").value;
        let out15 = document.querySelector(".out-15");
        if (s151 + s152 + s153 == "11&&") {
          out15.innerHTML = 1;
        } else if (s151 + s152 + s153 == "10&&") {
          out15.innerHTML = false;
        } else if (s151 + s152 + s153 == "00&&") {
          out15.innerHTML = 0;
        } else if (s151 + s152 + s153 == "01&&") {
          out15.innerHTML = false;
        }
   };//Done. по анологии с логическим оператором ||

//1. Создайте button.b-1 - при нажатии на него выводите alert с номером задачи.
    document.querySelector ('.bb1').onclick = function f111() {
    alert('Task #1');
    };//Done

//2. Создайте input.b-2 type=button - при нажатии на него выводите alert с номером задачи. Номер задачи просто пропишите вручную.
    document.querySelector('.bb2').onclick = function f222() {
        alert ('Task #2');
    };//Done

//3.Создайте p.p-3 - при нажатии на него выводите alert с номером задачи.
    document.querySelector(".p-1").onclick = function f333() {
        alert("Task #3");
    };//Done

//4. Создайте input(checkbox).i-4 и button.b-4 - при нажатии на кнопку выводите true если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-4
     document.querySelector(".bb4").onclick = function f444() {
        let i4 = document.querySelector(".ii-4");
        let out4 = document.querySelector(".out44");
        if (i4.checked) {
            out4.innerHTML = true;
        }
        else {
            out4.innerHTML = false;
        }
     };//Done

//5.Создайте input(checkbox).i-5 и button.b-5. Для checkbox добавьте value="task-5" - при нажатии на кнопку b-5 выводите value checkbox если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-5.
      document.querySelector(".bb5").onclick = function f555() {
        let i5 = document.querySelector(".ii-5");
        let out5 = document.querySelector(".out55");
            if (i5.checked) {
            out5.innerHTML = i5.value;
            } else {
            out5.innerHTML = false;
            }
      };//Done

//6.Создайте input(hidden).i-6 и button.b-6 - при нажатии на кнопку выводите value из input в div.out-6.
      document.querySelector(".bb6").onclick = function f666() {
             let i6 = document.querySelector(".ii-6");
             let out6 = document.querySelector(".out66");
             out6.innerHTML = i6.value;
     };//Done. в out6 выведен value - правильно ли это

//7.Создайте input(password).i-7 и button.b-7 - при нажатии на кнопку выводите в div.out-71 value прописанное в input. В .out-72 выводите 1 если длина пароля больше или равна 6 или 0 если меньше. Для подсчета количества символов в строке используйте length.
      document.querySelector(".bb7").onclick = function f777() {
        let i7 = document.querySelector(".ii-7");
        let out71 = document.querySelector(".out71");
        let out72 = document.querySelector(".out72");
            if (i7.value.length >= 6) {
              //length- подсчета количества символов
              out72.innerHTML = 1;
            } else {
              out71.innerHTML = 0;
            }
      };//Done

//8.8.Создайте div.out88 и кнопку .bb8. При нажатии кнопки создавайте внутри div.out88 элемент input.i-81 и кнопку .b81(innerHTML). Добавьте на созданную кнопку событие клик и запуск функции f81. Функция должна в .out-81 выводить value созданного input.i-81.
      document.querySelector('.b81').onclick = function f81 () {
        let out81 = document.querySelector('.out81');
        let input81 = document.querySelector(".i-81");
        out81.innerHTML = input81.value;
      } //не понятны условия и непонятно верно ли решено
        
//9.Создайте один input(radio).r-9 и button.b-99 - при нажатии на button если radio.r-9 выбран (активен, checked) выводите в .out-99 - value прописанное в r-9, либо 0 если не активен.
      document.querySelector('.b-99').onclick = function f8881 () {
        let out = document.querySelector(".out-99");
        let radio = document.querySelector(".r-9");
        if(radio.checked) {
            out.innerHTML = radio.value;
        }
        else {
            out.innerHTML = 0;
        }
      }//Done

//10.>Создайте input(color).i-10o и button.b-100 - при нажатии на кнопку окрашивайте div.out-100 выбранным цветом (имеется ввиду.style.background = )
      document.querySelector('.b-100').onclick = function f01 () {
        document.querySelector(".out-100").style.backgroundColor.innerHTML = document.querySelector(".i-100").value;
      }// не работает .style.background 

//11.Создайте input(color).i-111 и input(color).i-112- два элемента и button.b-111 - при нажатии на кнопку присвойте цвет изпервого input в value второго. 
      document.querySelector('.b-111').onclick = function f02 () {
        document.querySelector(".i-112").value = document.querySelector(".i-111").value;
      }//Done

//12.Создайте input(date).i-12 и button.b-12 - при нажатии на кнопку выводите на в out-12 выбранную в input дату.
      document.querySelector('.b-121').onclick = function f03 () {
            let out = document.querySelector(".out-121");
            let input = document.querySelector(".i-121");
            out.innerHTML = input.value;
      }//Done

//13.Создайте input(range).i-13. При изменении положения ползунка i-13 выводите значение в out-13. Для события используйте oninput.
      document.querySelector('.i-131').oninput = function () {
        let input131 = document.querySelector(".i-131");
        let out131 = document.querySelector(".out-131");
        out131.innerHTML = input131.value;
      }//Done

//14.Создайте text-area.t-144 и button.b-144 - при нажатии на кнопку выводите на в out-14 текст введенный в t-144.
      document.querySelector('.b-144').onclick = function () {
        let out = document.querySelector(".out-144"); 
        let t = document.querySelector(".t-144");
        out.innerHTML = t.value;
      }//Done

//15.Создайте text-area.t-155, input.i-155 и button.b-15 - при нажатии на кнопку выводите текст из input.i-15 в textarea.t-15 и на страницу в out-155.
      document.querySelector('.b-155').onclick = function () {
        let out = document.querySelector(".out-155"); 
        let t = document.querySelector(".t-155");
        let input = document.querySelector(".i-155");
        t.innerHTML = input.value;
        out.innerHTML = t.value;
      }//Done

//16.Создайте select.s-166 и button.b-166 - при нажатии на кнопку выводите в out-166 value выбранного option из s-166.
        document.querySelector('.b-166').onclick = (event) =>{
            event.preventDeafault;
               let out = document.querySelector(".out-166");
               let s = document.querySelector(".s-166");
               out.innerHTML = s.value;
        }//Done

//17.Создайте select.s-177. Добавьте ему событие onchange, при наступлении которого запускается функция f177. Функция должна выводить в out-177 value выбранного в select option.
        document.querySelector(".s-177").onchange = function f177() {
            let out = document.querySelector(".out-177");
            out.innerHTML = document.querySelector(".s-177").value;
        };//Done

//18.Создайте select.s-188 и input.i-188. Добавьте на select событие onchange, при наступлении которого запускается функция f188. Функция должна выводить в input i-188 value выбранного в select option.
        document.querySelector(".s-1888").onchange = function f18() {
            let s1888 = document.querySelector(".s-1888");
            let i1888 = document.querySelector(".i-1888");
            i1888.value = s1888.value;
        };//Done

//19.Создайте форму. В ней input(text).i-191 и input(password).i-192 - и кнопку button.b-199. По нажатию кнопки выводите значение text и password в out-199 через пробел. Обратите внимание на хитрость. Мы,кнопку сейчас повесили за пределами формы. Чуть позже мы рассмотрим почему это делали.
        document.querySelector('.b-199').onclick = function () {
            let i191 = document.querySelector(".i-191").value;
            let i192 = document.querySelector(".i-192").value;
            let out199 = document.querySelector(".out-199");
            out199.innerHTML = i191 + ' ' + i192;
         }  //Done

//20.Создайте форму .f-200. В ней input(text) и input(password) - и кнопку button.b-200. По нажатию кнопки выводите значение из input text и password в out-200 через пробел. Используйте form.elements
        document.querySelector('.b-200').onclick = function () {
            let form = document.querySelector(".f200");
            let out = document.querySelector(".out-200");
            out.innerHTML = form.elements.f200.value;

        }// не сделано

//1.Кнопка bb-1 запускает функцию t11. Функция должна выводить в outt-1 строку вида: 1 2 3 4 5 6 7 8 9 ... 49 50 от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.
     document.querySelector('.bb-1').onclick = function t11() {
        let out = document.querySelector('.outt-1');
        for(let i=0; i<51; i++) {
              out.innerHTML += i + " ";
        }
      
     }//Done
     
//2.Кнопка bb2 запускает функцию t12. Функция должна выводить в outt-2 строку вида: 2 4 6 ... 122 от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла
     document.querySelector(".bb-2").onclick = function t112() {
       let out = document.querySelector(".outt-2");
       for (let i = 0; i < 123; i=i+2) {
            if (i <=1) continue;
            out.innerHTML += i + " ";
       }; 
     }; //Done

//3.Кнопка bb-3 запускает функцию t33. Функция должна выводить в outt-3 строку вида:   25 24 23 22 . . 7   от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла.
     document.querySelector(".bb-3").onclick = function t33() {
       let out = document.querySelector(".outt-3");
       for (let i = 25; i >=0; i--) {
        if (i <7) continue;
        out.innerHTML += i + " ";
       }
     }; //Done

//4.Кнопка bb-4 запускает функцию t14. Функция должна выводить в outt-14 строку вида: 77_74_71_68_65_62_ ... _38_35_ от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.
     document.querySelector(".bb-4").onclick = function t14() {
       let out = document.querySelector(".outt-4");
       for (let i = 77; i >=0; i--) {
            if (i <35) continue;
            out.innerHTML += i + "_";
       }
     }; //Done

//5.Кнопка bb-5 запускает функцию t15. Функция должна выводить в outt-5 строку вида:1_*2_**3_*4_** ... 17_*  от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла.
    document.querySelector(".bb-5").onclick = function t15() {
       let out = document.querySelector(".outt-5");
       for (let i = 1; i <18; i++) {
        if (i%2) {
            out.innerHTML  += i + "_*";
        }
        else {
            out.innerHTML += i + "_**";
        }
       }
    };//Done

//6.Кнопка bb-6 запускает функцию t16. Функция должна выводить в outt-6 строку вида: ****** ******  ******  Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.  Количество строк (итераций, повторений) цикла вводит пользователь в i-6.
    document.querySelector(".bb-6").onclick = function t16() {
        let out = document.querySelector(".outt-6");
        for (let i = 0; i <3; i++) {
            out.innerHTML += "****** <br>"
       }
    };//Done

//7.Есть input i-17 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт). По нажатию   кнопки bb-7 должна запускаться функция t177, которая выводит в outt-7 числа от введенного пользователем до нуля включительно. Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:   4 3 2 1 0.  Задача решается с помощью цикла.
    document.querySelector(".bb-7").onclick = function t177() {
        let out = document.querySelector(".outt-7");
        let input =document.querySelector(".i-177");
        for (let i = input.value; i >=0; i--) {
            out.innerHTML += i + ' ';
       }
    };//Done

//8.Есть input i-811 и i-812 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).   Считаем, что второе число всегда больше первого. По нажатию кнопки bb-8 должна запускаться функция t18, которая выводит в  outt-8 числа от первого введенного до второго включительно, с шагом 1. Разделитель пробел. Если пользователь ввел 4 и 8 и   нажал кнопку, мы получим:    4 5 6 7 8.   Задача решается с помощью цикла.
    document.querySelector(".bb-8").onclick = function t187() {
        let out = document.querySelector(".outt-8");
        let input =document.querySelector(".i-811");
        let input2 =document.querySelector(".i-812");
        for (let i = input.value; i <= input2.value; i++){
            out.innerHTML += i + " ";
        }
    };//Done

//9.Есть input i-91 и i-92 куда пользователь может ввести числа. По нажатию кнопки bb-9 должна запускаться функция t19,   которая выводит в outt-9 числа от меньшего введенного до большего включительно, с шагом 1. Разделитель пробел. Если   пользователь ввел 4 и 8 и нажал кнопку, мы получим:   4 5 6 7 8   если ввел 8 и 6, то получим  6 7 8.  Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл
    document.querySelector(".bb-9").onclick = function t199() {
        let out = document.querySelector(".outt-9");
        let input =document.querySelector(".i-9991").value;
        let input2 = document.querySelector(".i-9992").value;
            if (input < input2) {
                for(let i = input; i <= input2; i++){
                    out.innerHTML  += i + " ";
                }
            }
            else {
                for(let i = input2; i<= input; i++){
                    out.innerHTML  += i + " ";
                }
            }
        };//Done

//10.Кнопка bb-10 запускает функцию t110. Функция должна выводить в outt-10 четные годы от 1950 до 2000 включительно.   Разделитель - пробел. Задача решается через цикл, а let out = document.querySelector(".out-10");
    document.querySelector('.bb-10').onclick = function t10() {
        let out = document.querySelector(".outt-10");
        for (let i = 1950; i <= 2000; i=i+2){
            out.innerHTML += i + " ";
            
    } 
    };//Done

//11.Кнопка bb-11 запускает функцию t111. Функция должна: получить все div.div-11 перебрать их с помощью цикла. Обращение к div   выглядит так elem[i] вывести в out-11 содержимое каждого блока. Разделитель - пробел. В результате должно получиться   так:   one 3 4 two
      document.querySelector(".bb-11").onclick = function t1111() {
        let out = document.querySelector(".outt-11");
        let elem = document.querySelectorAll("div.div-11"); // все дивы
        for (let i = 0; i < elem.length; i++) {
          console.log(elem);
          out.innerHTML += elem[i].textContent + " "; //node - узел со свойствами
        }
      };//Done

//12.Кнопка bb-12 запускает функцию tt12. Функция должна: получить все div.div-12 перебрать их с помощью цикла. Обращение к div   выглядит так elem[i] применить к каждому elem[i].style.background = ‘orange’
document.querySelector(".bb-12").onclick = function tt12() {
        let elem = document.querySelectorAll("div.div-12"); // все дивы
        for (let i = 0; i < elem.length; i++) {
            elem[i].style.background = 'orange';
        }
      };//Done

//13.Кнопка bb-13 запускает функцию t13. Функция должна: получить все input.ii-13 перебрать их с помощью цикла. Обращение к   элементу выглядит так elem[i] применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2,   третьего - 3...
      document.querySelector(".bb-13").onclick = function tt13() {
        let elem = document.querySelectorAll("input.ii-13"); // все дивы
        for (let i = 0; i < elem.length; i++) {
            if (elem[i]) {
                console.log(elem[i].value);
            } 
        }
    }; //Done

//14.Кнопка bb-14 запускает функцию tt14 Функция должна: получить все input.ii-14 перебрать их с помощью цикла. Обращение к   элементу выглядит так elem[i] вывести в outt-14 value выбранного. Проверить выбран ли элемент можно с помощью   elem[i].checked
        document.querySelector(".bb-14").onclick = event =>{
        event.preventDeafault;
        let out = document.querySelector(".outt-14");
        let r = document.querySelectorAll("input.ii-14"); // все дивы
        for (let i = 0; i < r.length; i++) {
            if (r[i].checked) {
                out.innerHTML = r[i].value;
            }
        }
    };//Done но выбирается все пукнты сразу - не сбрасывается

//15.Кнопка bb-15 запускает функцию tt15 Функция должна выводить следующую последовательность в outt-15: 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10. Для вывода использовать цикл.
     document.querySelector(".bb-15").onclick = function tt15() {
        let out = document.querySelector(".outt-15");
        for(let i=0;i <11; i++) {
            out.innerHTML += 10 - i+' ';
            out.innerHTML += i + " ";
        }
     };//Done