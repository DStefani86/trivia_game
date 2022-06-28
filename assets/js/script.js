//grabbing my elements from the HTML
var startButton = document.getElementById("start");
var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
var op3 = document.getElementById("op3");
var op4 = document.getElementById("op4");
var question = document.getElementById("question-text");
var choices = document.querySelector(".option-container");
var scoreBoard = document.getElementById("highscores");
var scoreList = document.getElementById("score-container");
//creating a number value for the timer
var secondsLeft = 60;
//creating an array for all my questions and answers
var myQuestions = [
  {
    q: "What are the main differences between let and const?",
    a1: "let cannot be reassigned, const can be reassigned",
    a2: "let is functional scope, while const is block scope",
    a3: "let can be reassigned, const cannot be reassigned",
    a4: "let is block scope, while const is functional scope",
    answer: "let can be reassigned, const cannot be reassigned",
  },
  {
    q: "For strict equality comparisons, we should use:",
    a1: "=>",
    a2: "=",
    a3: "==",
    a4: "===",
    answer: "===",
  },
  {
    q: "JavaScript is a ___ -side programming language.",
    a1: "Client",
    a2: "Server",
    a3: "Both",
    a4: "Neither",
    answer: "Both",
  },
  {
    q: "Which of the following type of variable is visible only within a function where it is defined?",
    a1: "global variable",
    a2: "local variable",
    a3: "Both",
    a4: "Neither",
    answer: "local variable",
  },
  {
    q: "Which of the following function of Array object extracts a section of an array and returns a new array?",
    a1: "shift()",
    a2: "reverse()",
    a3: "slice()",
    a4: "some()",
    answer: "slice()",
  },
];
//assigning attributes and functions to the start button to make the quiz visible and start the timers
startButton.addEventListener("click", function () {
  var questionContainer = document.querySelector(".question-container");
  var optionContainer = document.querySelector(".option-container");
  questionContainer.setAttribute("style", "display: flex");
  optionContainer.setAttribute("style", "display: flex");
  start.setAttribute("style", "display: none");
  scoreBoard.setAttribute("style", "display: none");
  timer();
  showQuiz();
});

//creating a timer function that responds to the quiz answers and end the quiz
function timer() {
  var timer = setInterval(function () {
    secondsLeft--;
    document.getElementById("timer").innerHTML = "00:" + secondsLeft;
    if (secondsLeft === 0 || myQuestions.length === 0) {
      clearInterval(timer);
      quizOver();
    }
  }, 1000);
}

//creating a math expression to cycle to cycle through the questions array
function showQuiz() {
  currentQuestion = Math.floor(Math.random() * myQuestions.length);
  question.innerHTML = myQuestions[currentQuestion].q;
  op1.innerHTML = myQuestions[currentQuestion].a1;
  op2.innerHTML = myQuestions[currentQuestion].a2;
  op3.innerHTML = myQuestions[currentQuestion].a3;
  op4.innerHTML = myQuestions[currentQuestion].a4;
}
//creating an event listener to listen for a click within the container to the button matching the answer
choices.addEventListener("click", function (apples) {
  var selected = apples.target;
  var userChoice = apples.target.innerHTML;
  if (selected.matches("button")) {
    if (userChoice === myQuestions[currentQuestion].answer) {
      myQuestions.splice(currentQuestion, 1);
      showQuiz();
    } else {
      myQuestions.splice(currentQuestion, 1);
      secondsLeft = secondsLeft - 15;
      showQuiz();
    }
  }
});
//creating a function to end the game and prompting the user
function quizOver() {
  scoreBoard.setAttribute("style", "display:flex");
  var playerName = prompt("You made the leaderboard!! Enter your name:");
  var playerScore = {
    name: playerName,
    score: secondsLeft,
  };
  localStorage.setItem("score", JSON.stringify(["playerScore"]));
  var finalScore = JSON.parse(localStorage.getItem"player")
  var data = JSON.parse(localStorage.getItem("score"));
  questionContainer.setAttribute("style", "display: hidden");
  optionContainer.setAttribute("style", "display: hidden");
  for (let i = 0; i < data.length; i++) {
    var newItem = document.createElement("li");
    scoreList.appendChild([0]);
    // ol.textContent = data;
  }
}
