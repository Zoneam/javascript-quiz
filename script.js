let timerTime = document.querySelector(".timer-time");
let highscores = document.querySelector(".highscores");
let questionParagraph = document.querySelector(".question-paragraph");
let answers = document.querySelector(".answers-list");
let startButton = document.querySelector(".start-quiz");
let challengeText = document.querySelector(".challange-text");
let questionCard = document.querySelector(".question-card")

let questionsAndAnswers = [
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer1: "1. JavaScript",
        answer2: "2. Terminal / Bash",
        answer3: "3. For loops",
        answer4: "4. Console log",
        correctAnswer: "answer1"
},{
        question: "Arrays in JavaScript can be used to store ______.",
        answer1: "1. Numbers and Strings",
        answer2: "2. Other arrays",
        answer3: "3. Booleans",
        answer4: "4. All of the above",
        correctAnswer: "answer4"
},{
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answer1: "1. Commas",
        answer2: "2. Curly brackets",
        answer3: "3. Quotes",
        answer4: "4. Parentheses",
        correctAnswer: "answer3"
},{
        question: "Commonly used data types DO NOT include:",
        answer1: "1. Strings",
        answer2: "2. Booleans",
        answer3: "3. Alerts",
        answer4: "4. Numbers",
        correctAnswer: "answer3"
},{
        question: "The condition in an in / else statement is enclosed within ______.",
        answer1: "1. Quotes",
        answer2: "2. Curly Brackets",
        answer3: "3. Parentheses",
        answer4: "4. Square Brackets",
        correctAnswer: "answer2"
}];


startButton.addEventListener("click", function(event){
    challengeText.style = "display: none";
    startButton.style = "display: none";
    questionCard.style = "display: block";
});

