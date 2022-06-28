var Questions = [ {
    q: "What are the main differences between let and const?",
    a: [{ text: "let cannot be reassigned, const can be reassigned", isCorrect: false },
        { text: "let is functional scope, while const is block scope", isCorrect: false },
        { text: "let can be reassigned, const cannot be reassigned", isCorrect: true },
        { text: "let is block scope, while const is functional scope", isCorrect: false }
    ]
},
{
    q: "For strict equality comparisons, we should use:",
    a: [{ text: "=>", isCorrect: false,},
        { text: "=", isCorrect: false },
        { text: "==", isCorrect: false },
        { text: "===", isCorrect: true }
    ]
},
{
    q: "JavaScript is a ___ -side programming language.",
    a: [{ text: "Client", isCorrect: false },
        { text: "Server", isCorrect: false },
        { text: "Both", isCorrect: true },
        { text: "Neither", isCorrect: false }
    ]
},
{
    q: "Which of the following type of variable is visible only within a function where it is defined?",
    a: [{ text: "global variable", isCorrect: false },
        { text: "local variable", isCorrect: true },
        { text: "Both", isCorrect: false },
        { text: "Neither", isCorrect: false }
    ]
},
{
    q: "Which of the following function of Array object extracts a section of an array and returns a new array?",
    a: [{ text: "shift()", isCorrect: false },
        { text: "reverse()", isCorrect: false },
        { text: "slice()", isCorrect: true },
        { text: "some()", isCorrect: false }
    ]
}]

var start = document.getElementById('start');
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');

op1.innerText = Questions[0].a[0].text;
op2.innerText = Questions[0].a[1].text;
op3.innerText = Questions[0].a[2].text;
op4.innerText = Questions[0].a[3].text;

op1.value = Questions[0].a[0].isCorrect;
op2.value = Questions[0].a[1].isCorrect;
op3.value = Questions[0].a[2].isCorrect;
op4.value = Questions[0].a[3].isCorrect;

var selected = "";
var secondsLeft = 60;
var questionNum = 0;


function timer() {
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+secondsLeft;
        secondsLeft--
        if (secondsLeft < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

start.addEventListener("click",function() {
    var questionContainer = document.querySelector(".question-container")
    var optionContainer = document.querySelector(".option-container")
    questionContainer.setAttribute("style", "display: flex") 
    optionContainer.setAttribute("style", "display: flex")
    start.setAttribute("style", "display: none")
    timer()
    Quiz()
})
var question = document.getElementById("question");



function Quiz() {
        var currentQues = Questions[0].q
        question.innerText = currentQues


op1.addEventListener("click", function() {
   selected = op1.value;
   if (selected == true) {
    currentQues++   
       }
   else if (selected == false) {
    currentQues++
    secondsLeft = secondsLeft-15

   }
})

op2.addEventListener("click", function() { 
    // console.log("hello")
    selected = op2.value;
    if (selected === true) {
        questionNum++
        console.log("hello")
       }
    if (selected === false) {
        questionNum++
        secondsLeft = secondsLeft-15
       }
})
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
})
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
}