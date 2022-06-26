const Questions = [ {
    id: 0,
    q: "What are the main differences between let and const?",
    a: [{ text: "let cannot be reassigned, const can be reassigned", isCorrect: false },
        { text: "let is functional scope, while const is block scope", isCorrect: false },
        { text: "let can be reassigned, const cannot be reassigned", isCorrect: true },
        { text: "let is block scope, while const is functional scope", isCorrect: false }
    ]
},
{
    id: 1,
    q: "For strict equality comparisons, we should use:",
    a: [{ text: "=>", isCorrect: false,},
        { text: "=", isCorrect: false },
        { text: "==", isCorrect: false },
        { text: "===", isCorrect: true }
    ]
},
{
    id: 2,
    q: "JavaScript is a ___ -side programming language.",
    a: [{ text: "Client", isCorrect: false },
        { text: "Server", isCorrect: false },
        { text: "Both", isCorrect: true },
        { text: "Neither", isCorrect: false }
    ]
},
{
    id: 3,
    q: "Which of the following type of variable is visible only within a function where it is defined?",
    a: [{ text: "global variable", isCorrect: false },
        { text: "local variable", isCorrect: true },
        { text: "Both", isCorrect: false },
        { text: "Neither", isCorrect: false }
    ]
},
{
    id: 4,
    q: "Which of the following function of Array object extracts a section of an array and returns a new array?",
    a: [{ text: "shift()", isCorrect: false },
        { text: "reverse()", isCorrect: false },
        { text: "slice()", isCorrect: true },
        { text: "some()", isCorrect: false }
    ]
}
]

const start = document.getElementById('start');
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');

op1.innerText = Questions[0].a[0].text;
op2.innerText = Questions[1].a[1].text;
op3.innerText = Questions[2].a[2].text;
op4.innerText = Questions[3].a[3].text;

op1.value = Questions[0].a[0].isCorrect;
op2.value = Questions[1].a[1].isCorrect;
op3.value = Questions[2].a[2].isCorrect;
op4.value = Questions[3].a[3].isCorrect;

start.addEventListener("click",function(){
    var selected = "";
    var questionContainer = document.querySelector(".question-container")
    var optionContainer = document.querySelector(".option-container")
    questionContainer.setAttribute("style", "display: flex") //include timer within event listener
    optionContainer.setAttribute("style", "display: flex")})

const question = document.getElementById("question");

question.innerText = Questions[0].q;

op1.addEventListener("click", () => {
   selected = op1.value;
})
op2.addEventListener("click", () => { 
    selected = op2.value;
})
op3.addEventListener("click", () => {    
    selected = op3.value;
})
op4.addEventListener("click", () => {
    selected = op4.value;
})

// const evaluate = document.getElementsByClassName("evaluate");
// evaluate[0].addEventListener("click", () => {
//     if (selected == "true") {
//         result[0].innerHTML = "True";
//         result[0].style.color = "green";
//     } else {
//         result[0].innerHTML = "False";
//         result[0].style.color = "red";
//     }
// })