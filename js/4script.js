    // document.querySelector('button').onclick = function()  {
    //   console.log(document.querySelector("#one").value);
    //   //присвоение стилей ".style.backgroundColor"
    //   document.querySelector("button").style.backgroundColor =
    //     document.querySelector("#one").value; // окрашиваем кнопку в цвет
    // }

    // //date - появляется календарь
    //  document.querySelector(".date").onclick = function() {
    //    console.log(document.querySelector("#two").value);
    //    document.querySelector(".date").style.backgroundColor =
    //      document.querySelector("#two").value;
    //  };

    //  //range(ползунок)
    //  document.querySelector(".range").onclick = function() {
    //    console.log(document.querySelector("#three").value);
    //    document.querySelector(".range").style.backgroundColor =
    //      document.querySelector("#three").value;
    //  };

    //  document.querySelector("#three").oninput = () => {
    //     console.log(document.querySelector('#three').value); //в консоль сыпятся значения
    //     document.querySelector("span").innerHTML =
    //      document.querySelector("#three").value; // с помощью span отображаем занчение на старнице
    //  };

    //checkbox
    // document.querySelector("#btn-1").onclick = () => {
    //     console.log(document.querySelector("#i2").value);
    //     let myCheckBox = document.querySelector('#i2');
    //     console.log(myCheckBox.checked);
    //     if(myCheckBox.checked) {
    //         console.log('Нажат');
    //     }
    //     else {
    //         console.log("Не нажат");
    //     }
    // }

    // document.querySelector("#btn-2").onclick = (event) => {
    //     event.preventDefault(); // останавливает перезагрузку формы
    //     // let text = document.querySelector('#two');
    //     // console.log(text.value);
    //     // text.value='one';
    //     let form = document.querySelector('form');
    //     console.log(form);
    //     console.log(form.elements.two.value);
    //     console.log(form.elements.three.value);
    // }

    //1.Создайте button.b-1 - при нажатии на него выводите alert с номером задачи.

    document.querySelector('.b-1').onclick = function() {
        alert(click = "Task1");
    }; // выполенено

    //2.Создайте input.b-2 type=button - при нажатии на него выводите alert с номером задачи. Номер задачи просто пропишите вручную
    document.querySelector('.b-2').onclick = function () {
        alert('Task 2');
    } // выполнено

    //3.Создайте p.p-3 - при нажатии на него выводите alert с номером задачи
    document.querySelector('.p-3').onclick = function () {
        alert('Task 3')
    } // выполнено

    //4.Создайте input(checkbox).i-4 и button.b-4 - при нажатии на кнопку выводите true если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-4
    document.querySelector('.b-4').onclick =(event) => {
        let myCheckBox = document.querySelector('.i-4');
        let out = document.querySelector('.out-4');
        //console.log(document.querySelector(".i-4").value);
            if (myCheckBox.checked) {
            out.innerHTML = true;
        }
            else {
                out.innerHTML = false;
            }
    }; // выполнено

    //5.Создайте input(checkbox).i-5 и button.b-5. Для checkbox добавьте value="task-5" - при нажатии на кнопку b-5 выводите value checkbox если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-5
    document.querySelector('.b-5').onclick = function () {
        let myCheckBox = document.querySelector(".i-5");
        let out = document.querySelector(".out-5");
            if(myCheckBox.checked) {
                out.innerHTML = myCheckBox.checked;
            }
            else {
                out.innerHTML = false;
            }

    } // выполнено

    //6.Создайте input(hidden).i-6 и button.b-6 - при нажатии на кнопку выводите value из input в div.out-6.
     document.querySelector('.b-6').onclick = function () {
        let out = document.querySelector(".out-6");
        let hidden = document.querySelector('.i-6').value;
        out.innerHTML = hidden.value;
     } // выполнено но не точно

     //7.Создайте input(password).i-7 и button.b-7 - при нажатии на кнопку выводите в div.out-71 value прописанное в input. В .out-72 выводите 1 если длина пароля больше или равна 6 или 0 если меньше. Для подсчета количества символов в строке используйте length.
     document.querySelector('.b-7').onclick = (event) => {
        event.preventDefault();
        let out71 = document.querySelector('.out-71');
        let out72 = document.querySelector('.out-72');
        let input = document.querySelector('.i-7');
            if(input.value.length >= 6) {
                out71.innerHTML = input.value;
                out72.innerHTML = 1;
            }
            else {
              out71.innerHTML = input.value;
               out72.innerHTML = 0;
            }

     }// выполнено

     //8.Создайте div.out-8 и кнопку .b-8. При нажатии кнопки создавайте внутри div.out-8 элемент input.i-81 и кнопку .b-81 (innerHTML). Добавьте на созданную кнопку событие клик и запуск функции f81. Функция должна в .out-81 выводить value созданного input.i-81.
     document.querySelector('.b-8').onclick = function f81() {
        let out = document.querySelector('.out-81');
        let input = document.querySelector ('.i-81');
        out.innerHTML = input.value;

     }// выполнено(наверное)

     //9.Создайте один input(radio).r-9 и button.b-9 - при нажатии на button если radio.r-9 выбран (активен, checked) выводите в .out-9 - value прописанное в r-9, либо 0 если не активен.
     document.querySelector('.b-9').onclick = function () {
        let radio = document.querySelector(".r-9");
        let out = document.querySelector(".out-9");
        if (radio.checked){
            out.innerHTML = radio.value;
        }
        else {
            out.innerHTML = 0;
        }
     } // done

     
     //10.>Создайте input(color).i-10 и button.b-10 - при нажатии на кнопку окрашивайте div.out-10 выбранным цветом (имеется ввиду.style.background 
     document.querySelector('.b-10').onclick = () => {
       //let input = document.querySelector("#i-10").value; 
        document.querySelector(".out-10").style.backgroundColor =
          document.querySelector("#i-10").value;
     } // не выполнено

     //11.Создайте input(color).i-111 и input(color).i-112- два элемента и button.b-11 - при нажатии на кнопку присвойте цвет из первого input в value второго
     document.querySelector('.b-11').onclick = function () {
        let out1 = document.querySelector('.i-11');
        let out2 = document.querySelector(".i-12");
        out2.value = out1.value;
     } // выполнено

     //12.Создайте input(date).i-112 и button.b-12 - при нажатии на кнопку выводите на в out-12 выбранную в input дату
     document.querySelector('.b-12').onclick = function () {
        let input = document.querySelector('.i-112');
        let out = document.querySelector(".out-12");
        out.innerHTML = input.value;
     } // выполнено

     //13.Создайте input(range).i-13. При изменении положения ползунка i-13 выводите значение в out-13. Для события используйте oninput
     document.querySelector('.i-13').oninput = function () {
        document.querySelector(".out-13").innerHTML =
          document.querySelector(".i-13").value;
     } // выполнено

     //14.Создайте text-area.t-14 и button.b-14 - при нажатии на кнопку выводите на в out-14 текст введенный в t-14
     document.querySelector('.b-14').onclick = function () {
        document.querySelector(".out-14").innerHTML =
          document.querySelector(".t-14").value;
     } // выполнено

     //15.Создайте text-area.t-15, input.i-15 и button.b-15 - при нажатии на кнопку выводите текст из input.i-15 в textarea.t-15 и на страницу в out-15
     document.querySelector('.b-15').onclick = function () {
        document.querySelector(".t-15").innerHTML = document.querySelector(".i-15").value;
        document.querySelector(".out-15").innerHTML =
        document.querySelector(".t-15").value; 
     } // выполнено

     //16.Создайте select.s-16 и button.b-16 - при нажатии на кнопку выводите в out-16 value выбранного option из s-16
     document.querySelector(".b-16").onclick = (event) => {
       event.preventDefault();
       document.querySelector(".out-16").innerHTML =
         document.querySelector(".s-16").value;
     };// выполнено

     //17.Создайте select.s-17. Добавьте ему событие onchange, при наступлении которого запускается функция f17. Функция должна выводить в out-17 value выбранного в select option
     document.querySelector(".s-17").onchange = (event) => {
         event.preventDefault();
         document.querySelector(".out-17").innerHTML =
           document.querySelector(".s-17").value;
     } // выполнено

     //18.Создайте select.s-18 и input.i-18. Добавьте на select событие onchange, при наступлении которого запускается функция f18. Функция должна выводить в input i-18 value выбранного в select option
     document.querySelector(".s-18").onchange = function f18 () {
        let s18 =document.querySelector('.s-18');
        let i18 = document.querySelector('.i-18');
        //let out = document.querySelector(".out");
        i18.innerHTML = s18.value;
        
     };// не выполнено,с input, но выполняется с нахванием input 

     //19.Создайте форму. В ней input(text).i-191 и input(password).i-192 - и кнопку button.b-19. По нажатию кнопки выводите значение text и password в out-19 через пробел. Обратите внимание на хитрость. Мы, кнопку сейчас повесили за пределами формы. Чуть позже мы рассмотрим почему это делали.

     document.querySelector(".b-19").onclick = function () {
        let text = document.querySelector(".i-191").value;
        let password = document.querySelector(".i-192").value;
        let out = document.querySelector(".out-19");
        out.innerHTML = (text + ' '+ password);
     } // выполнено

     //20.Создайте форму .f-20. В ней input(text) и input(password) - и кнопку button.b-20. По нажатию кнопки выводите значение из input text и password в out-20 через пробел. Используйте form.element
     document.querySelector(".b-20").onclick = (event) => {
       event.preventDefault();
       //let text = document.querySelector(".text").value;
       // let password = document.querySelector(".password").value;
       let out = document.querySelector(".out-20");
       let form = document.querySelector("form");
       out.innerHTML = form.elements.one + " " + form.elements.two;
     };// не выполнено

     

    
