function optellen(num0, num1){
  let answer0 = num0 + num1;
  console.log("optellen " + answer0);
  plus.innerHTML = answer0;
}
function delendoor(num0, num1){
  let answer1 = num0 / num1;
  console.log("delen " + answer1);
  delen.innerHTML = answer1;
}
'use strict';
  let knop0 = document.getElementById('knop0');
  let plus = document.getElementById('plus');
  let delen = document.getElementById('delen');
  knop0.addEventListener('click', function(){
    let num0 = document.getElementById('num0').value;
    let num1 = document.getElementById('num1').value;

    num0 = parseFloat(num0);
    num1 = parseFloat(num1);

    optellen(num0, num1);
    delendoor(num0, num1);
    if (num0 == 0 || num1 == 0){
      delen.innerHTML = "Voer een ander getal in."
    }
  })
