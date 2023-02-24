//for
//for(старт; работаем пока верно; счетчик){}
// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }// i = 1 и т.д. до 4 включительно > 
//работаем дальше

//неверный цикл, мы его перскочим
// for (let i = 0; i==5; i++) {
//   console.log(i);
// }

// бесконечный цикл - 'это когда перемнная меньше нуля
//for (let i = 0; i >= 0; i++) {
 // console.log(i);
//}

// for(let i = 0; i < 6; i = i +2) {
//     console.log(i)
// }

//выйти из цикла заранее
// for (let i = 0; i < 6; i = i + 1) {
//     if (i == 4) break; //break - останавливает круг цикла
// }// важны логика, в кансоль выводить надо после всех условий

// for (let i = 0; i < 6; i = i + 1) {
//   console.log('**************');
// }// ответ: 6 раз выполнится условие вывода



// //приминение событий к элементу
// function two() {
//     console.log('work!!!');
// }

// let b = document.getElementsByClassName ('one');// по классу one сразу у всех элементов
// let c = document.getElementsByTagName ('div')// по классу div cразу у всех элементов
// console.log(b);
// console.log(c);

// for(let i =0; i < b.length; i++) {
//   b[i].style.border = '3px solid black'
// }
// document.querySelector('button').onclick = () => {
//   let r = document.querySelectorAll('input[type = "radio"]');
//   console.log(r);
//   for(let i = 0; i < r.length; i++) {
//     if(r[i].checked) {
//         console.log(r[i].value);
//     }
//   }
// };

// let out =' '
// for (let i=0; i<10; i++) {
//   if (i==6) continue;// continue - прервывает круг цикла,пропускает значение i
//   out += i + ' ';
//   //if (i==6) break;
  
// }
// document.querySelector('#out').innerHTML = out;


//1. Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида: 1 2 3 4 5 6 7 8 9 ... 49 50 от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.

// let out = document.querySelector('.out-1');
// document.querySelector(".b-1").onclick = function t1() {
//   for (let i = 0; i <=50; i++) {
//     out.innerHTML += i + " ";
//   }
// }; // выполнено

//2. 2. Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида: 2 4 6 ... 122 от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла.
 
// let out2 = document.querySelector(".out-2");
// document.querySelector(".b-2").onclick = function t2() {
//   for (let i = 0; i <= 122; i=i+2) {
//     if (i <=1) continue;
//     out2.innerHTML += i + " ";
//   }
// }; // выполнено

// //3.Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида: 25 24 23 22 . . 7  от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла.
// let out3 = document.querySelector(".out-3");
// document.querySelector(".b-3").onclick = function t3() {
//   for (let i = 0; i <= 25; i = i + 7) {
//     if (i<=6) continue;
//     out3.innerHTML += i + " ";
//   }
// }; // answer: 7 14 21

// //4.Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида: 77_74_71_68_65_62_ ... _38_35_ от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.
// let out4 = document.querySelector(".out-4");
// document.querySelector(".b-4").onclick = function t4() {
//   for (let i = 0; i <= 77; i = i + 3) {
//     if (i ) continue;
//     out4.innerHTML += i + "_";
//   }
// };// answer: 9_12_15_18_21_24_27_30_33_36_39_42_45_48_51_54_57_60_63_66_69_72_75_

// //5.Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида: 1_*2_**3_*4_** ... 17_*  от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла.
// let out5 = document.querySelector(".out-5");
// document.querySelector(".b-5").onclick = function t5() {
//   for (let i = 0; i <= 17; i++) {
//     if (i % 2==0){
//        out5.innerHTML += i + "_**";
//     }
//     else {
//        out5.innerHTML += i + "_*";
//     };
//   };
// };// выполнено

// //6. Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида: ****** ****** ******  Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.Количество строк (итераций, повторений) цикла вводит пользователь в i-6.
// let a = "******<br>";
// let out6 = document.querySelector(".out-6");

// document.querySelector(".b-6").onclick = function t6() {
//   let num = +document.querySelector('.i-6').value;
//   for (let i = 1; i <= num; i++) {
//     out6.innerHTML += a;
//   };
// } // выполнено


// //7. Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт). По нажатию кнопки b-7 должна запускаться функция t7, которая выводит в out-7 числа от введенного пользователем до нуля включительно. Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим: 4 3 2 1 0. Задача решается с помощью цикла.
// // let out7 = document.querySelector('.out-7');
// // let num1;
// // document.querySelector(".b-7").onclick = function t7() {
// //   let num1 = document.querySelector(".i-7").value;
// //  for (let num1 = 1; num1 <= 0; i--) {
// //     out7.innerHTML = num1;
// //   }
// // }; // не выполнено

// //8.Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).Считаем, что второе число всегда больше первого. По нажатию кнопки b-8 должна запускаться функция t8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1. Разделитель пробел. Если пользователь ввел 4 и 8 и нажал кнопку, мы получим: 4 5 6 7 8. Задача решается с помощью цикла
// function t8() {
// let inp1 = document.querySelector(".i-81").value,
// inp2 = document.querySelector(".i-82").value,
// out = document.querySelector(".out-8");
//     for (let i = inp1; i <= inp2; i++) {
// out.textContent += i + " ";
//    }
//  }

// document.querySelector(".b-8").onclick = t8;// не выполнено, решение не понятно

//9.Есть input i-91 и i-92 куда пользователь может ввести числа. По нажатию кнопки b-9 должна запускаться функция t9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1. Разделитель пробел. Если пользователь ввел 4 и 8 и нажал кнопку, мы получим:4 5 6 7 8,если ввел 8 и 6, то получим 6 7 8. Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл.
// document.querySelector('.b-9').onclick = function t9 () {
//     let inp1 = document.querySelector('.i-91').value;
//     let inp2 = document.querySelector('.i-92').value;
//     let out = document.querySelector('.out-9');
//       if (inp2 > inp1) {
//         for (let i = inp1; i <= inp2; i++){
//           out.innerHTML += ' '+ i;
//         }
//       } else {
//           for (let i = inp2; i <= inp1; i++){
//           out.innerHTML += ' '+ i; 
//         }
//     }
// } // выполнено

//10. Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2)

let out = document.querySelector(".out-10");
document.querySelector('.b-10').onclick = function t10() {
   
for (let i = 1950; i <= 2000; i=i+2){
      out.innerHTML += i + " ";
    
  } 
} //Done

 
//11. Кнопка b-11 запускает функцию t11. Функция должна: получить все div.div-11 перебрать их с помощью цикла. Обращение к div выглядит так elem[i] вывести в out-11 содержимое каждого блока. Разделитель - пробел. В результате должно получиться так: one 3 4 two
  
  document.querySelector(".b-11").onclick = function t11 () {
    let out11 = document.querySelector(".out-11");
    let elem = document.querySelectorAll('div.div-11');// все дивы
   for (let i = 0; i < elem.length; i++) {
      console.log(elem);
      out11.innerHTML += elem[i].textContent + " ";//node - узел со свойствами  
  }
}

////несколько элементов
// let div = document.querySelectorAll('.one')
// console.log(div);
//div.style.background = 'red';
//как перебрать элемент div(массив)
// for (let i = 0; i < div.length; i = i + 1) {
//   console.log(div[i]);
//   div[i].style.background = 'red';
//   //присвоеить событие элементу 
//   div[i].onclick = two;
// }//div[i] - это нам дает возможность обратиться к каждому элементу, в итоге к каждому элементу применился стайл.

//12.Кнопка b-12 запускает функцию t12. Функция должна: получить все div.div-12 перебрать их с помощью цикла. Обращение к div выглядит так elem[i] применить к каждому elem[i].style.background = ‘orange’

document.querySelector('.b-12').onclick = function t12 () {
    let elem = document.querySelectorAll('div.div-12')
    for(let i=0; i <elem.length; i++) {
    console.log(elem[i]);
    elem[i].style.background = 'orange';
    }
} // выполнено

//13.Кнопка b-13 запускает функцию t13. Функция должна: получить все input.i-13 перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i] применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

document.querySelector('.b-13').onclick = function t13 () {
    let elem = document.querySelectorAll('input[id = "13"]');
    for (let i = 0; i < elem.length; i++){
      if(elem[i]) {
     console.log(elem[i].value);
    }
  }
} // выполнено

//14.Кнопка b-14 запускает функцию t14 Функция должна: получить все input.i-14 перебрать их с помощью цикла. Обращение кэлементу выглядит так elem[i] вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.

document.querySelector('.b-14').onclick = function t14() {
      let elem = document.querySelectorAll('input[type ="radio"]');
      let out14=document.querySelector('.out-14');
      for(let i=0; i<elem.length; i++){
        if(elem[i].checked) {
          out14.innerHTML = elem[i].value;
        }
      }
} // выполнено, разобраться  с checked

//15.Кнопка b-15 запускает функцию t15 Функция должна выводить следующую последовательность в out-15: 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10. Для вывода использовать цикл.

document.querySelector('.b-15').onclick = function t15() {
    let out15 = document.querySelector('.out-15')
    for(i=0; i<11; i++){
      out15.textContent += 10 -i+ ' ';
      out15.textContent += i+ " ";
    }
    
}// выполнено

