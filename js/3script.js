    // let a = 19;
    // //правильные записи: >= - больше либо равно; <=; == - равенство; = - присвоение; != - не равно;
    //  if (a != 9) {
    //   //выполнится\отобразиться  если выражение в скобках если true, если нет, то ничего не будет
    //   console.log ('Yes');
    // }
    // else { //else пишется без  условий
    //  console.log('False')
    // }; //  в данной конструкции срабатывает ТОЛЬКО одна часть

    // // пользователю нужно ввести возраст, если он меньше 16 - мы говорим 'Welcome', если меньще 16 мы говорим 'Доступ запрещен'
    // const button = document.querySelector('button');
    // const input = document.querySelector ('.age');

    // // анониманая функция обозначется кратко - ()=>  и только один раз
    // button.onclick = () => {
    // let num = +input.value; //если ъотим видеть число то пищем "+" 
    // if (num >= 16 && num < 60) { // && -"и"
    //     console.log("Welcome!");
    // } else if (num > 60) {
    //     console.log("А ты тут что забыл???");
    // } else {
    //     console.log("Доступ запрещен!");
    // }
    // //SWITCH case (смотреть документацию)
    // switch (num) {
    //     case 15:
    //     console.log("Еще год потерпи :)");
    //     break; // закончить выполнение, если условие верное
    //     case 16:
    //     console.log("Прходи :)");
    //     break;
    //     default: // как else
    //         console.log ('OK')
    // }
    // }

    // //сложные вычисления
    // let b =3;
    // console.log(b == 3 || b == 7); // && - оператор 'и', || - или

    //1.При нажатии кнопки b-1 срабатывает функция f1. Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==). Результат сравнения - true или false выведите в out-1.

    function f1 () {
      //ошибка №1 - сложные имена переменных
      // ошибка №2 - перевод в число
      let a = +document.querySelector(".i-1").value;
      let out = document.querySelector(".out-1");
      //Функция должна прочитать содержимое i-1 и сравнить его с числом 4 (сравнение ==)
      if (a == 4) {
        // ошибка №3 true or false в ковычках
        out.innerHTML = true;
      } else {
        out.innerHTML = false;
      }
    }
        document.querySelector('.b-1').onclick = f1; //При нажатии кнопки b-1 срабатывает функция f1

        //2. Даны две переменные a21 и a22. При нажатии кнопки b-2, запускается функция f2. Функция должна сравнить переменные с помощью if else и вывести в out-2 число, которое больше. Вариант равенства переменных не рассматриваем.
       
        let a21 = 48;
        let a22 = 23;
        function f2 () {
            
            let a = +document.querySelector(".i-2").value;
            let out = document.querySelector(".out-2");
            if (a < a21) {
                out.innerHTML = a21;
            }
            else if (a >= a22 ){
                out.innerHTML = a21;
            }
            else {
                out.innerHTML = a21;
            }
        }
         document.querySelector(".b-2").onclick = f2;

         //3.Даны 2 input - i-31 и i-32, оба - input[type=number]. При нажатии кнопки b-3 срабатывает функция f3. Функция должнапрочитать содержимое i-31 и i-32 в переменные и сравнить их, вывести в out-3 большее число. Проведите самостоятельный тест работы, введите пары чисел 4 и 9, 9 и 22, 5 и 111.

         function f3 () {
            let a = document.querySelector ('.i-31').value;
            let b = document.querySelector('.i-32').value;
            let out = document.querySelector ('.out-3');
                if (a > b) {
                    out.innerHTML = a;
                }
                else if (a < b) {
                    out.innerHTML = b;
                }
                else {
                    out.innerHTML = a==b;
                }
         }
         document.querySelector('.b-3').onclick = f3;

         //4.Создайте на странице input[type=number] с классом i-4, куда пользователь может ввести год своего рождения. Есть кнопка b-4 которая запускает функцию f4. Функция должна вывести в .out-4 число 1 если пользователю больше или равно 18 лет, и 0 если меньше.

         function f4 () {
            let a = document.querySelector('.i-4').value;
            let out = document.querySelector ('.out-4');
            if (a >=18){
                out.innerHTML = 1;
            }
            else {
                out.innerHTML = 0;
            }
         }

         document.querySelector('.b-4').onclick = f4;

         //5/Создайте на странице input[type=number] с классом i-5, куда пользователь может ввести число. Есть кнопка b-5 которая запускает функцию f5. Функция должна вывести в .out-5 символ m если число меньше нуля, 0 если число равно нулю и 1 если больше.

         function f5() {
            let a = document.querySelector('.i-5').value;
            let out = document.querySelector('.out-5');
            if (a < 0) {
                out.innerHTML = 'm';
            }
            else if (a > 0) {
                out.innerHTML = 1;
            }
            else {
                out.innerHTML = 0;
            }
         }

         document.querySelector('.b-5').onclick = f5;

         //6.Создайте на странице input[type=number] с классом i-6, куда пользователь может ввести число. Есть кнопка b-6 которая запускает функцию f6. Функция должна вывести в .out-6 слово even если число четное и odd если нечетное. Для проверки четности используется целочисленный остаток от деления на 2 (оператор %). Если остаток равен нулю - четное, нет - нечетное.
         function f6 () {
            let a =document.querySelector('.i-6').value;
            let out = document.querySelector ('.out-6');
            if (a % 2 == 0) {
                out.innerHTML = 'even';
            }
            else if (a % 2 !=0) {
                out.innerHTML = 'odd';
            }
         }
         document.querySelector('.b-6').onclick = f6;

         //7.7.Даны 2 input - i-71 и i-72, оба - input[type=number]. При нажатии кнопки b-7 срабатывает функция f7. Функция должна число из i-71 возвести в степень i-72, вывести результат в out-7. Для возведения в степень можно использовать **, или Math.pow.
         function f7 () {
            let a =document.querySelector('.i-71').value;
            let b = document.querySelector(".i-72").value;
            let out = document.querySelector('.out-7');
            out.innerHTML= Math.pow(a,b);

         }
         document.querySelector('.b-7').onclick =f7;

         //9.Дан select s-8, который содержит 3 значения: 1, 2, 3. Дана кнопка b-8. При ее нажатии срабатывает функция f8. Функция должна получить выбранное в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’. И если число выбрано - 1, то вывести в out-8 строку one, если 2 - two, если 3 - three.
         function f8 () {
            let select = document.querySelector ('.s-8');
            let a = document.querySelector('.one');
            let b = document.querySelector('.two');
            let c = document.querySelector('.three');
            let out = document.querySelector ('.out-8');
            switch (select) {
                case a: out.innerHTML ='one';
                    break;
                case b: out.innerHTML = 'two';
                    break;
                case c: out.innerHTML = 'three';
                    break;
                default:
                    out.innerHTML = 'error';
            }
         }
         document.querySelector ('.b-8').onclick = f8;

         //9. Создайте на странице input[type=number] с классом i-9, куда пользователь может ввести номер квартиры. Есть кнопка b-9 которая запускает функцию f9. Функция должна вывести в .out-9 номер подъезда, в котором находится квартира. если от 1 до 32 - то вывести цифру 1; если от 33 до 43 - то вывести 2; если от 44 до 64 - то 3; В противном случае, вывести 0
        
         function f9 () {
            let a = document.querySelector('.i-9').value;
            let out = document.querySelector('.out-9');
            if (a >= 1 && a <= 32) {
                out.innerHTML = 1;
            }
            else if (a >= 33 && a <= 43) {
                out.innerHTML = 2;
            }
            else if (a >=44 && a <= 64) {
                out.innerHTML = 3;
            }
            else {
                out.innerHTML = 0;
            }
         }
         document.querySelector('.b-9').onclick = f9;// не решен

         //10.Дан select s-100. По нажатию кнопки, выведите value выбранного option в out-10.
         
        button.onclick = function () {
            let value = document.querySelector('.s-100').value;
            document.querySelector('.out-10').innerHTML;
         }
