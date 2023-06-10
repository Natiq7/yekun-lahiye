var questions = [
    {
        question: "Siz elan yerləştirməyə hazırsız?",
        choices: {
            a: "Hə",
            b: "Yox",
        },
    },
    {
        question: "MERCEDES,BMW,AUDI,FORD,TOYOTA?",
        choices: {
            a: "MERCEDES",
            b: "BMW",
            c: "AUDI",
            d: "FORD",
            e: "TOYOTA"
        },
    },
    {
        question: "Atalar sözü hansidir?",
        choices: {
            a: "Sürmə yüz Yaşa yüz!",
            b: "Yavaş sür Həmşə sür!",
        },
    },
    {
        question: "Avtomobil yenidir yoxsa təzə?",
        choices: {
            a: "Yeni",
            b: "Təzə",
        },
    },
    {
        question: "Sonuncu sual əminsənki elan yerləştirə biləcəksən?",
        choices: {
            a: "He",
            b: "Yox",
        },
    },
    {
        question: "Beləliklə sizin vaxtınız boşa getdi Yəni zırt elan qoydun)",
       
    }

];

function quiz(){
    // stores HTML output
    var output = [];

    // build HTML for each question
    questions.forEach((currentQuestion, questionNumber) => {
        // store list of answer choices
        var choices = [];

        // for each answer
        for(letter in currentQuestion.choices) {

            // add HTML radio button
            choices.push(
                // template literals
                `<label><input type="radio" name="question${questionNumber}" value="${letter}">
                    <span class="customRadio"></span>
                        ${letter} :
                        ${currentQuestion.choices[letter]}
                </label>`
            );
        }

        // add this question and answer to output
        output.push(
            `<div class="slide">
                <div class="question">${currentQuestion.question}</div>
                <div class="choices">${choices.join("")}</div>
            </div>`
             // 'join' expression takes list of answers and puts them together in one string
        );
    });
    // combine output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
}

function results(){

    //gather answer containers from quiz
    let answerContainers = quizContainer.querySelectorAll(".choices");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question 
    questions.forEach((currentQuestion, questionNumber) => {
        // find selected answer 
        let answerContainer = answerContainers[questionNumber];
        // selects which radio button has been checked
        let selector = `input[name=question${questionNumber}]:checked`;
        // userAnswer is which button has been checked
        // {} empty object for if user didn't select answerlet
        let userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if(userAnswer === currentQuestion.answer) {
            // add to number of correct answers
            numCorrect++;

            // green when correct
            answerContainers[questionNumber].style.color = "rgb(0, 88, 4)";
        } else {   
            // red when incorrect
            answerContainers[questionNumber].style.color = "rgb(141, 0, 0)";
        }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
}

function showSlide(n) {
    // Hide all slides by removing "active-slide" class from all questions
    slides[currentSlide].classList.remove("active-slide");
    // Show new slide by adding "active-slide" class to current question
    slides[n].classList.add("active-slide");
    // Update the current slide number
    currentSlide = n;

    // First slide - hide previous button - Else show previous button
    if(currentSlide === 0) {
        previousButton.style.display = "none";
    } else {
        previousButton.style.display = "inline-block";
    }

    // Last slide - hide next button and show submit button - Else show next button and hide submit button
    if(currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
    } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
    }
}

function nextSlide() {
    showSlide(currentSlide + 1);
    progressPercent += 25;
    progressBar.style.width = progressPercent +  "%";
}

function previousSlide() {
    showSlide(currentSlide - 1);
    progressPercent -= 25;
    progressBar.style.width = progressPercent + "%";
}

let progressBar = document.getElementById("progress-bar");
let progressPercent = 0;

let quizContainer = document.getElementById("quiz");
let resultsContainer = document.getElementById("results");
let submitButton = document.getElementById("submit");

//display quiz 
quiz();

let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Display Slides
showSlide(0);

// click submit, show results
submitButton.addEventListener("click", results);

// Click to show next or previous slides
previousButton.addEventListener("click", previousSlide);
nextButton.addEventListener("click", nextSlide);

