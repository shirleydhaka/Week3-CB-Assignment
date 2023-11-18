const quizData = [
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        correctAnswer: "Au"
    },
    {
        question: "How many bones are in the human body??",
        options: ["206", "192", "42", "178"],
        correctAnswer: "206"
    },
    {
        question: "First Person To Step On Moon?",
        options: ["Neil-Armstrong", "Newton", "m Currie", "Hippopotamus"],
        correctAnswer: "Neil-Armstrong"
    }
];

let currentQuestion = 0;
let score = 0;
let timer = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    
    questionElement.textContent = quizData[currentQuestion].question;
    optionsContainer.innerHTML = "";

    quizData[currentQuestion].options.forEach((option) => {
        const optionElement = document.createElement("div");
        optionElement.className = "option";
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(option);
        optionsContainer.appendChild(optionElement);
    });
    timer = setInterval(() => {
        const countdown = parseInt(countdownElement.textContent);
        if (countdown > 0) {
            countdownElement.textContent = countdown - 1;
        } else {
            clearInterval(timer);
            resultElement.textContent = "Time's up! The correct answer was: " + quizData[currentQuestion].correctAnswer;
            setTimeout(submitAnswer, 2000); // Move to the next question after 2 seconds
        }
    }, 1000);
}


function selectOption(selectedOption) {
    const resultElement = document.getElementById("result");

    if (selectedOption === quizData[currentQuestion].correctAnswer) {
        score++;
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Wrong!";
    }
}

function submitAnswer() {
    const resultElement = document.getElementById("result");

    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        resultElement.textContent = "";
        loadQuestion();
    } else {
        resultElement.textContent = `Quiz completed. Your score: ${score}/${quizData.length}`;
        document.getElementById("options-container").innerHTML = "";
        document.getElementById("submit-btn").style.display = "none";
    }
}
loadQuestion();
