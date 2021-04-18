let timer = document.querySelector("#timer");
let timeInterval;
let timeScore;
let questionScore = 0;
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
let savedClass = {
        name: [],
        score: []
}
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
        question: "The condition in an if / else statement is enclosed within ______.",
        answer: ["Quotes","Curly Brackets","Parentheses","Square Brackets"],
        correctAnswer: "Parentheses"
}];

//------------------- Writing in local memory ---------------------------

function displayHighscores(){
//-----------------------Sorting -----------------
       var sortByScore = storedHighscores.slice(0);
       sortByScore.sort(function(a,b) {
           return b.score - a.score;
       }); 
        for (var i=0; i < sortByScore.length; i++){
                var li = document.createElement("li");
                li.textContent = sortByScore[i].name + " ---------- " + sortByScore[i].score;
                highscoresList.appendChild(li);
        }
}

highscores.addEventListener("click", function(event){
        event.preventDefault();
        answers.remove();
        correctOrIncorrect.style="display: none"
        initials.style = "display: none";
        submitButton.style = "display: none";
        tryAgain.style = "display: inline-block";
        timer.style = "display: none";
        questionParagraph.innerHTML = "Click button to start over !";
        clearInterval(timeInterval);
})

///------------------Submit button click---------------------------
submitButton.addEventListener("click", function(event){
        event.preventDefault();
        let myScore = 0;
        if (initials.value != ""){
                if (questionScore != 0 && timeScore !=0 ){
                myScore = (timeScore * questionScore) / questionsAndAnswers.length;
                } else {
                        myScore = 0;
                }
                console.log("score: ",myScore)
                savedClass.name = initials.value;
                savedClass.score = myScore;
                storedHighscores.push(savedClass);
                localStorage.setItem("Highscores", JSON.stringify(storedHighscores));
                storedHighscores = JSON.parse(localStorage.getItem("Highscores"));
                displayHighscores();
                highscoresList.style = "display: block";
                initials.style =  "display: none";
                submitButton.style = "display: none";
                highscores.style = "display: none"
                questionParagraph.innerHTML = "Thank you " + initials.value + " for your submission ! ";
        }        
})

///------------------End of Quiz---------------------------
function endOfQuiz(){
        answers.remove();
        correctOrIncorrect.style="display: none"
        questionParagraph.innerHTML = "Please enter your name:";
        initials.style = "display: inline-block";
        submitButton.style = "display: inline-block";
        tryAgain.style = "display: inline-block";
        if (timer.innerHTML != "Time is Up"){
        timer.style = "display: none";
        } 
        clearInterval(timeInterval);
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
        timeInterval = setInterval(function() {
                timeLeft--;
                timeScore = timeLeft;
                timer.textContent = "Time: " + timeLeft + " Seconds left";
                if(timeLeft <= 0 ){
                        clearInterval(timeInterval);
                        timeLeft = quizTimer;
                        timer.innerHTML = "Time is Up"
                        endOfQuiz()
                        
                }
    
        }, 1000)
}

///------------------Start---------------------------
function start(){
        questionScore = 0;
        timeScore = 0;
        timeLeft = quizTimer;
        challengeText.style = "display: none";
        startButton.style = "display: none";
        questionCard.style = "display: block";
        highscores.style = "display: inline-block"
        timer.style = "display: inline-block"
        var y = 1;
        var a = 0;
        createQuestions()
        myTimer()
        answers.addEventListener("click", function(event){
                var checkLi = event.target;
                if (checkLi.matches("li") === true) {
                                
                        if (checkLi.innerHTML == questionsAndAnswers[a].correctAnswer)   {
                                questionScore ++;
                                correctOrIncorrect.innerHTML = "Correct !"
                        } else {
                                correctOrIncorrect.innerHTML = "Incorrect !"
                                timeLeft -= 10; 
                        }
                        a++;
                        console.log("Questions score: ", questionScore);
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


