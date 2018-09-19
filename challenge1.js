"use strict";

var fizzBox = document.getElementById("fizz-box");
var startButton = document.getElementById("start-button");


var startCounting = function StartCounting(){
//alert("hello");
  var i = 0;
/*   var sleep = function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  } */

 while(i<101){
    if(i % 3 != 0 && i % 5 != 0  ){
        fizzBox.innerHTML += "<span class='text-warning'>" + i + "<br></span>";
       }
    if(i%3 != 0 && i % 5 ===0){
        fizzBox.innerHTML += "<span class='text-primary'> boom <br> </span>";
        }
    if(i%3 === 0 && i % 5 != 0){
        fizzBox.innerHTML += "<span class='text-success'> Fizz <br> </span>";
    }
    if(i%3 === 0 && i % 5 === 0 && i!=0){
        fizzBox.innerHTML += "<span class='text-danger'> Fizz Boom Super Extreme!!!! <br> </span>";
        }
       i++;
     /* sleep(1000); */
 }

}

startButton.addEventListener("click",function(){
    startCounting();
})

