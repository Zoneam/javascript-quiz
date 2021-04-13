let timerTime = document.querySelector(".timer-time");
let highscores = document.querySelector(".highscores");
let questionParagraph = document.querySelector(".question-paragraph");
let answers = document.querySelector("#answers-list");
let startButton = document.querySelector(".start-quiz");
let challengeText = document.querySelector(".challange-text");
let questionCard = document.querySelector(".question-card")
let liItems = document.querySelectorAll("li");
let initials = document.querySelector(".initials");

let submitButton = document.querySelector(".submit-initials");


let questionsAndAnswers = [
{
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: ["Console log","Terminal / Bash","For loops","JavaScript"],
        correctAnswer: "1"
},{
        question: "Arrays in JavaScript can be used to store ______.",
        answer: ["Numbers and Strings","Other arrays","Booleans","All of the above"],
        correctAnswer: "4"
},{
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answer: ["Commas","Curly brackets","Quotes","Parentheses"],
        correctAnswer: "3"
},{
        question: "Commonly used data types DO NOT include:",
        answer: ["Strings","Booleans","Alerts","Numbers"],
        correctAnswer: "3"
},{
        question: "The condition in an in / else statement is enclosed within ______.",
        answer: ["Quotes","Curly Brackets","Parentheses","Square Brackets"],
        correctAnswer: "2"
}];



        submitButton.addEventListener("click", function(event){
                event.preventDefault();
                localStorage.setItem(initials.value, 'score');


        })


function start(){
    challengeText.style = "display: none";
    startButton.style = "display: none";
    questionCard.style = "display: block";
        for (var i=0; i < questionsAndAnswers[0].answer.length; i++){
                var li = document.createElement("li");
                questionParagraph.innerHTML = questionsAndAnswers[0].question;
                li.textContent = questionsAndAnswers[0].answer[i];
                answers.appendChild(li);
        }
                var y=1;
                answers.addEventListener("click", function(){
                if (y==questionsAndAnswers.length){
                        answers.remove();
                        questionParagraph.innerHTML = "Please enter your initials:";
                        initials.style = "display: inline-block";
                        submitButton.style = "display: inline-block";
                return
            }
        for (var i=0; i<=questionsAndAnswers[y].answer.length-1; i++){
                questionParagraph.innerHTML = questionsAndAnswers[y].question;
                answers.children[i].textContent = questionsAndAnswers[y].answer[i];
        }
        y++;
        })
   
};


