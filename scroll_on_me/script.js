'use strict';
function setup(){
  let aantal = 0
  let resetText = "..."
  let button = document.getElementById('button0');
  let text = document.getElementById('text');

    text.addEventListener('wheel', function(){
      aantal +=1
      document.getElementById('text').innerHTML = aantal
  })
  button.addEventListener('click', function(){
    document.getElementById('text').innerHTML = resetText
  })
}
window.addEventListener("DOMContentLoaded", setup);
