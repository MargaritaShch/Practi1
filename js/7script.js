// let f1 = document.querySelector('.f-1'); //получили кнопку

// function one() {
//     console.log('work');
// }

// // //функция может быть вызывна
// // // 1 Способ:
// one()
// f1.onclick = one; //без круглых скобок

// // //анонимная функция - можно вывести только один раз
// // //стрелочная функция - это аналог анонимной
//      f1.onclick = () => {
//      console.log('Hello');
//  }

//  console.log(1+one()); // резульат: NaN 
//  console.log(one()); // результат: undefined

//  function two () {
//      console.log('work 22222');
//     return 54;// метка функции прекратить свою работу. Если функция выполняется в каком то выражении, то вместо функции подставить то что указано в return, т.е. вызвратить значение.
//  }

//  two();
//  console.log(1+two());

// let a = 8;
// let b = 9;

//  function multi(){
//      console.log(a*b);
//      return a*b;
//  }
// let c1 = multi();
//  let c2 =10*multi();
//  console.log(c1,c2); // c1=72; c2=720

// // // 2 Способ:
//  function multi2(x=3, y=4)// x и y записанные внутри скобок это параметры
//  {
//      return x*y;
// //     //если после return написан код, он не будет выполняться
// //     //если нужно выйти раньше функции уазываем return true или return false
// }
//  console.log(multi2(4, 5));
//  console.log(multi2(20, 5));
//  console.log(multi2(20, a));
//  console.log(multi2());// результат: 12
//  console.log(multi2(10))//результат: 40, т.е. 10 подставилось под х

// document.querySelector('.f-2').onclick = function(){
//     console.log('++++');
//  }

//  document.querySelector(".f-2").onclick =  () => {
//     console.log('arrow');
//    console.log("++++");
//  }

// //в стрелочных способах существует много способов сокращения записей
// //если два параметра
//function(a,b){

 //}
//(a,b) => {

 //}

// // если один параметр
 //function(d){

 //}
//d => {

// }

// //есть return
//  function(){
//      return 56*a;
//  }
//  (a) => 'Hello'*a;

//1. Напишите функцию t1, которая при нажатии кнопки выводит в out-1 переменную a1.
let out = document.querySelector(".out-1");
let a1 = 8;
function t1(){
   out.innerHTML = a1;
}
document.querySelector('.b-1').onclick = t1;

//2.Изменим задачу 1. Сейчас она только выводит переменную в заранее заданный блок. Давайте сделаем так, чтобы функция, была более гибкой. Пусть теперь функция t2 возвращает переменную a2. Поскольку функция возвращает переменную, то имя функции со скобками (вызов функции) можно встраивать в выражения. Обратите внимание, как изменился вызов функции.
let a2 = 8;
let out2 = document.querySelector('out-2');
 function t2(){
    out2.innerHTML = a2;
 }
 document.querySelector('.b-2').onclick = () => {
    document.querySelector('.out-2').textContent = f2();
 }

 //Наша предыдущая функция, сильно все еще зависима от внешних переменных. Давайте сделаем ее более универсальной. Пусть функция t3 принимает 2 параметра и выводит их произведение. Допишите код функции так, чтобы она возвращала произведение двух чисел, переданных ей в качестве параметра a, b. Протестируем функцию на двух примерах, с помощью кнопок b3-1 и b3-2.
 function t3(a,b){
    return a*b;
 }
 document.querySelector('.b-3-1').onclick = function(){
    document.querySelector('.out-3-1').textContent = t3(3,4)
 }
  document.querySelector('.b-3-2').onclick = function(){
    document.querySelector('.out-3-2').textContent = t3(5,6)
  }
  //Напишите функцию t4 которая принимает ваш год рождения и вычисляет ваш возраст.
  let  input = 1993
  function t4(c){
    return 2022 - c;
  }
  