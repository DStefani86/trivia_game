var startButton = document.getElementById('start');
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');
var question = document.getElementById("question");
var selected = "";
var secondsLeft = 60;
var questionNum = 0

var myQuestions = [ {
    q: "What are the main differences between let and const?",
    a1: "let cannot be reassigned, const can be reassigned", 
    a2: "let is functional scope, while const is block scope",
    a3: "let can be reassigned, const cannot be reassigned", 
    a4: "let is block scope, while const is functional scope", 
},
{
    q: "For strict equality comparisons, we should use:",
    a1: "=>",
    a2: "=",
    a3: "==",
    a4: "===", 
    
},
{
    q: "JavaScript is a ___ -side programming language.",
    a1: "Client",  
    a2: "Server",
    a3: "Both", 
    a4: "Neither"
    
},
{
    q: "Which of the following type of variable is visible only within a function where it is defined?",
    a1: "global variable",
    a2: "local variable", 
    a3: "Both",
    a4:  "Neither"
    
},
{
    q: "Which of the following function of Array object extracts a section of an array and returns a new array?",
    a1: "shift()",
    a2: "reverse()", 
    a3: "slice()", 
    a4: "some()"   
}
]

function timer() {
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+secondsLeft;
        secondsLeft--
        if (secondsLeft < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

startButton.addEventListener("click",function() {

    var questionContainer = document.querySelector(".question-container")
    var optionContainer = document.querySelector(".option-container")
    questionContainer.setAttribute("style", "display: flex") 
    optionContainer.setAttribute("style", "display: flex")
    start.setAttribute("style", "display: none")
    timer()
    generateQuiz()
})




function generateQuiz(question) {

    for (let i=0; i < myQuestions.length; i++) {
        question.innerhtml = myQuestions[i].q;
        op1.textContent = myQuestions[i].a[0].text
        op2.textContent = myQuestions[i].a[1].text
        op3.textContent = myQuestions[i].a[2].text
        op4.textContent = myQuestions[i].a[3].text
    }
      
    
}

op1.addEventListener("click", function() {
   var selected = myQuestions[i];
   if (selected === false) {
    
    secondsLeft = secondsLeft-10
   }
}),

op2.addEventListener("click", function() { 
    
    selected = op2.value;
    if (selected === true) {
        questionNum++
        console.log("hello")
       }
    if (selected === false) {
        questionNum++
        secondsLeft = secondsLeft-15
       }
}),
op3.addEventListener("click", function() {   
    // console.log("hello") 
    selected = op3.value;
    if (selected === true) {
        console.log("hello")
        questionNum++
       }
    if (selected === false) {
        console.log("hello")
        questionNum++
        secondsLeft = secondsLeft-15
       }
}),
op4.addEventListener("click", function() {
    // console.log("hello")
    selected = op4.value;
    if (selected === true) {
        questionNum++
       }
    if (selected === false) {
        questionNum++
        secondsLeft = secondsLeft-15
       }
})
