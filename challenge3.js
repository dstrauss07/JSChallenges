//alert ("hello");
"use strict";
var moneyArea = document.getElementById('money-area'),
    successArea = document.getElementById('success-area'),
    winningsArea = document.getElementById('winnings-area'),
    stageArea = document.getElementById('stage-area'),
    questionNum = document.getElementById('question-num'),
    question = document.getElementById('question'),
    ans1 = document.getElementById('ans1'),
    ans2 = document.getElementById('ans2'),
    ans3 = document.getElementById('ans3'),
    ans4 = document.getElementById('ans4'),
    quizBox = document.getElementById('quiz-box');


var questionSets = [];
var i = 0;
var c = 0;



var questionOne = {
    money: 100,
   question : "Which is <em>NOT</em> a famous Jazz Drummer?",
   ans1 : "Buddy Rich",
   ans1c : "wrong btn btn-success",
   ans2 : "Gene Krupa",
   ans2c : "wrong btn btn-danger",
   ans3 : "Neal Peart",
   ans3c : "correct btn btn-info",
   ans4 : "Max Roach",
   ans4c : "wrong btn btn-warning",
};

var questionTwo = {
    money: 1000,
   question : "Who was a drummer for the Experience?",
   ans1 : "Jon Bonham",
   ans1c : "wrong btn btn-success",
   ans2 : "Mitch Mitchell",
   ans2c : "correct btn btn-danger",
   ans3 : "Neal Peart",
   ans3c : "wrong btn btn-info",
   ans4 : "Elvin Jones",
   ans4c : "wrong btn btn-warning",
};

var questionThree = {
    money: 10000,
   question : "What is a common time signature use for a Waltz",
   ans1 : "4/4",
   ans1c : "wrong btn btn-success",
   ans2 : "6/8",
   ans2c : "wrong btn btn-danger",
   ans3 : "half time",
   ans3c : "wrong btn btn-info",
   ans4 : "3/4",
   ans4c : "correct btn btn-warning",
};

var questionFour = {
    money: 100000,
   question : "What is another name for how fast a song is played",
   ans1 : "tempo",
   ans1c : "correct btn btn-success",
   ans2 : "Punkishness",
   ans2c : "wrong btn btn-danger",
   ans3 : "tembre",
   ans3c : "wrong btn btn-info",
   ans4 : "scale",
   ans4c : "wrong btn btn-warning",
};

var questionFive = {
    money: "ONE MILLION",
   question : "What do you call someone who enjoys hanging out with real musicians?",
   ans1 : "a Drummer",
   ans1c : "wrong btn btn-success",
   ans2 : "a guitar player",
   ans2c : "correct btn btn-danger",
   ans3 : "a bass player",
   ans3c : "correct btn btn-info",
   ans4 : "a lead singer",
   ans4c : "correct btn btn-warning",
};


questionSets.push(questionOne,questionTwo,questionThree,questionFour,questionFive);

var PageWrite = function PageWrite(){
  moneyArea.innerHTML = questionSets[i].money;
  winningsArea.innerHTML = c;
  stageArea.innerHTML = i+1 + " / " + questionSets.length;
  question.innerHTML = questionSets[i].question;
  ans1.innerHTML = questionSets[i].ans1;
  ans1.className = questionSets[i].ans1c;
  ans2.innerHTML = questionSets[i].ans2;
  ans2.className = questionSets[i].ans2c;
  ans3.innerHTML = questionSets[i].ans3;
  ans3.className = questionSets[i].ans3c;
  ans4.innerHTML = questionSets[i].ans4;
  ans4.className = questionSets[i].ans4c;
};

var YouLose = function YouLose(){
   quizBox.className = "d-none";
   successArea.className="col-8 text-center text-success";
   successArea.innerHTML = "WRONG! <br> Congratulations You Won " + c + " dollars! <br> <a href='\index3.html'> Play Again? <a>"
}

var YouWin = function YouWin(){
    quizBox.className = "d-none";
    successArea.className="col-8 text-center text-success";
    successArea.innerHTML = "Damn Son!  You Really know about dem Drums! <br> You Won " + c + " dollars! <br> You Are a DRUMMERAIRE! <br><a href='\index3.html'> Play Again? <a>"
 }
 


var correctAnswer = document.getElementsByClassName("btn");

var AnswerFunction = function AnswerFunction(){
   // alert("hi");
   if (this.classList.contains("correct")){
    c = questionSets[i].money;
    i++;
    if (i<questionSets.length){
        PageWrite();
    }
    else{
        YouWin();
    }
    }  
    else {
        YouLose();
    }
}



for (var j=0; j< correctAnswer.length;j++){
    correctAnswer[j].addEventListener("click",AnswerFunction);
} 