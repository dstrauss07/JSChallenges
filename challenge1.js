"use strict";

var fizzBox = document.getElementById("fizz-box");
var startButton = document.getElementById("start-button");


var startCounting = function StartCounting(){
  //  alert("hello");
  var i = 0;

 while(i<101){
 //  setInterval(function(){
    if(i % 3 != 0 && i % 5 != 0  ){
        fizzBox.innerHTML += "<span class='text-warning'>" + i + "<br></span>";}
    if(i%3 != 0 && i % 5 ===0){
        fizzBox.innerHTML += "<span class='text-primary'> boom <br> </span>";}
    if(i%3 === 0 && i % 5 != 0){
        fizzBox.innerHTML += "<span class='text-success'> Fizz <br> </span>";}
    if(i%3 === 0 && i % 5 === 0 && i!=0){
        fizzBox.innerHTML += "<span class='text-danger'> Fizz Boom Super Extreme!!!! <br> </span>";}
       i++;
  //  },2000);
 }

}

startButton.addEventListener("click",function(){
    startCounting();
})