var fizzBox = document.getElementById("fizz-box"),
    startButton = document.getElementById("start-button");


startButton.addEventListener("click",function(){
    startCounting();
});

var startCounting = setTimeout(function StartCounting(){
    alert("hello");
    for(i=0;i<101;i++){
    if (i % 3  != 0 && i % 5) {
        fizzBox.innerHTML = i;
    }
    else{
        return;
    }
};
},100);


