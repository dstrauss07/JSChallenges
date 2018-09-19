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
    ans4 = document.getElementById('ans4');


var questionSets = [];
var i = 0;



var questionOne = {
    money: 100,
   question : "Which is <em>NOT</em> a famous Jazz Drummer?",
   ans1 : "Buddy Rich",
   ans1c : "wrong",
   ans2 : "Gene Krupa",
   ans2c : "wrong",
   ans3 : "Neal Peart",
   ans3c : "correct",
   ans4 : "Max Roach",
   ans4c : "wrong",
}


questionSets.push(questionOne);

var PageWrite = function PageWrite(){
  moneyArea.innerHTML = questionSets[i].money;
  winningsArea.innerHTML = 0;
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
    }

