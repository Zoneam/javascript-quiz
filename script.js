let timer = document.querySelector("#timer");
let highscores = document.querySelector(".highscores");
let questionParagraph = document.querySelector(".question-paragraph");
let answers = document.querySelector("#answers-list");
let startButton = document.querySelector(".start-quiz");
let challengeText = document.querySelector(".challange-text");
let questionCard = document.querySelector(".question-card")
let liItems = document.querySelectorAll("li");
let initials = document.querySelector(".initials");
let submitButton = document.querySelector(".submit-initials");
let highscoresList = document.querySelector("#highscores-list");
let correctOrIncorrect = document.querySelector(".correct-or-incorrect");
let tryAgain = document.querySelector(".try-again")
let storedHighscores = JSON.parse(localStorage.getItem("Highscores")) || [];

let quizTimer = 60;
timer.textContent = "Time: "+ quizTimer + " Seconds left";
let timeLeft;


let questionsAndAnswers = [
{
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: ["Console log","Terminal / Bash","For loops","JavaScript"],
        correctAnswer: "Console log"
},{
        question: "Arrays in JavaScript can be used to store ______.",
        answer: ["Numbers and Strings","Other arrays","Booleans","All of the above"],
        correctAnswer: "All of the above"
},{
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answer: ["Commas","Curly brackets","Quotes","Parentheses"],
        correctAnswer: "Quotes"
},{
        question: "Commonly used data types DO NOT include:",
        answer: ["Strings","Booleans","Alerts","Numbers"],
        correctAnswer: "Alerts"
},{
        question: "The condition in an in / else statement is enclosed within ______.",
        answer: ["Quotes","Curly Brackets","Parentheses","Square Brackets"],
        correctAnswer: "Curly Brackets"
}];


//------------------- Writing in local memory ---------------------------
submitButton.addEventListener("click", function(event){
        event.preventDefault();
        if (initials.value != ""){
          storedHighscores.push(initials.value);
          localStorage.setItem("Highscores", JSON.stringify(storedHighscores));
           console.log("storedHighscores: ",storedHighscores)
           highscoresList.style = "display: block"
        }        
})

///------------------End of Quiz---------------------------
function endOfQuiz(){
        answers.remove();
        correctOrIncorrect.style="display: none"
        questionParagraph.innerHTML = "Please enter your initials:";
        initials.style = "display: inline-block";
        submitButton.style = "display: inline-block";
        tryAgain.style = "display: inline-block";
}

  //---------------------------- Creating Questions -----------------------
function createQuestions() {
            for (var i=0; i < questionsAndAnswers[0].answer.length; i++){
                var li = document.createElement("li");
                questionParagraph.innerHTML = questionsAndAnswers[0].question;
                li.textContent = questionsAndAnswers[0].answer[i];
                answers.appendChild(li);
        }
}
//---------------------------- Creating Timer -----------------------
function myTimer(){
        let timeInterval = setInterval(function() {
                timeLeft--;
                timer.textContent = "Time: " + timeLeft + " Seconds left";
                if(timeLeft <= 0 ){
                        clearInterval(timeInterval);
                        timeLeft = quizTimer;
                        timer.textContent = "Time is Up"
                        endOfQuiz()
                }
    
        }, 1000)
}
///------------------Start---------------------------
function start(){
        timeLeft = quizTimer;
        challengeText.style = "display: none";
        startButton.style = "display: none";
        questionCard.style = "display: block";
        var y = 1;
        var a = 0;
//----------------
        createQuestions()
        myTimer()
        answers.addEventListener("click", function(event){
                var checkLi = event.target;
                if (checkLi.matches("li") === true) {
                                
                        if (checkLi.innerHTML == questionsAndAnswers[a].correctAnswer)   {
                                // correctOrIncorrect.style="display: block"
                                correctOrIncorrect.innerHTML = "Correct !"
                        } else {
                                // correctOrIncorrect.style="display: block"
                                correctOrIncorrect.innerHTML = "Incorrect !"
                                timeLeft -= 10; 
                        }
                        a++;
                if (y == questionsAndAnswers.length){
                        endOfQuiz();
                        timeLeft = 0;
                        timer.textContent = ""
                return
            }
                for (var i=0; i<=questionsAndAnswers[y].answer.length-1; i++){
                        questionParagraph.innerHTML = questionsAndAnswers[y].question;
                        answers.children[i].textContent = questionsAndAnswers[y].answer[i]; 
                }
                y++;
                }
        })
   
};


