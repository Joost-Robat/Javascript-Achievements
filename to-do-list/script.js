//Create your arrays an variables
//get DOM elements
//
let add = document.getElementById('add');
let finish = document.getElementById('finish');
let remove = document.getElementById('remove');
let input = document.getElementById('input');
let listing = document.getElementById('listing');
let finish_list = document.getElementById('finish_list');

var list = [];
var finished_list = [];

add.addEventListener("click", ()=>{
    //handle adding a new todo
    x = input.value;
    list.push(x)
    finished_list.push(false)
    updateListing();

});

finish.addEventListener("click", ()=>{
    //handle finishing a todo

    //make sure your input is seen as a number
    x = input.value;
    //check if input really is a number
    if(isNaN(x)){
        //not a number
        parseInt(x)
        finished_list.splice(x, 1, true)
    }else{
        //is a number
        finished_list.splice(x, 1, true)
    }
updateListing();
});
remove.addEventListener("click", ()=>{
    //handle removing of a todo

    //make sure your input is seen as a number
    x = input.value
    //check if input really is a number
    if(isNaN(x)){
        //not a number
        parseInt(x)
        delete list[x];
        delete finished_list[x];
    }else{
        //is a number
        list.splice(x, 1)
        finished_list.splice(x, 1)
    }
    updateListing();
});
function updateListing(){
 //print list of todo's
 //use loop to step trough the arrays
 let listHTML = ''
 for (let i = 0; i < list.length; i++){
   if (finished_list[i] === true){
     listHTML += '<li class="finished">' + list[i] + '</li>'
   }else{
     listHTML += '<li class="to_do">' + list[i] + '</li>'
   }
 }
 listing.innerHTML = listHTML
 finish_list.innerHTML = finished_list

}
