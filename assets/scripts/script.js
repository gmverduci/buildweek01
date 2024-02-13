document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            category: "Science: Computers",
            type: "multiple",
            difficulty: "easy",
            time: 30,
            value: 1,
            question: "What does CPU stand for?",
            correct_answer: "Central Processing Unit",
            incorrect_answers: [
                "Central Process Unit",
                "Computer Personal Unit",
                "Central Processor Unit",
            ],
        }
    ];

    const answers = [];
    const correctAnswers = [];
    const quizQuestions = [];

    let score = 0;
    let currentQuestionIndex = 0;

    const optionsContainer = document.getElementById('options');
    const startCheck = document.getElementById('checkbox');
    const finePrints = document.getElementsByClassName('fine-print');
    const startButton = document.getElementById('');
    const answersContainer = document.getElementById('');
    const questionElement = document.getElementById('');
    const answerButtons = document.getElementsByClassName('');
    const resultSection = document.getElementById('');
    const scoreElement = document.getElementById('');

    const loadQuestion = () => {
        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            questionElement.innerText = currentQuestion.question;
            const answers = [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers].sort(() => Math.random() - 0.5);

            answers.forEach(answer => {
                const button = document.createElement('button');
                button.innerText = answer;
                button.addEventListener('click', () => selectAnswer(answer));
                answersContainer.appendChild(button);
            })
        } else {
            showResult();
        }
    }

    const selectAnswer = (selectedAnswer) => {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedAnswer === currentQuestion.correct_answer) {
            score += currentQuestion.value;
            scoreElement.innerHTML = score;
            currentQuestionIndex++;
            loadQuestion();
        } else {
            currentQuestionIndex++;
            loadQuestion();
        }
    }

    const startQuiz = (amount, difficulty) => {
        let filteredQuestions = questions.filter(question => question.difficulty === difficulty);

        if (amount && amount < filteredQuestions.length) {
            filteredQuestions = filteredQuestions.sort(() => Math.random() - 0.5).slice(0, amount);
        } else {
            filteredQuestions = filteredQuestions.sort(() => Math.random() - 0.5);
        }

        quizQuestions = filteredQuestions;
        score = 0;
        currentQuestionIndex = 0;
        loadQuestion();
    }

    const showResult = () => {
        let correctPercentage = (score / quizQuestions.length) * 100;
        let wrongPercentage = 100 - correctPercentage;
        let correctAnswers = score;
        let wrongAnswers = quizQuestions.length - correctAnswers;

        resultSection.innerHTML = `
        <div id="resultsContainer">
            <h1>Results</h1>
            <p>The summary of your answers:</p>
            <div>
                <div>
                    <h2>Correct</h2>
                    <p>${correctPercentage.toFixed(1)}%</p>
                    <p>${correctAnswers}/${quizQuestions.length} questions</p>
                </div>
                <div>
                    <span>
                        Congratulations!<br>You passed the exam.
                    </span>
                </div>
                <div>
                    <h2>Wrong</h2>
                    <p>${wrongPercentage.toFixed(1)}%</p>
                    <p>${wrongAnswers}/${quizQuestions.length} questions</p>
                </div>
            </div>
            <button>RATE US</button>
        </div>
        `;
    }

    const showOptions = () => {
        startButton.addEventListener('click', () => {
            optionsContainer.style.display = 'block';
        })
    }

    const enableStart = () => {
        startCheck.addEventListener('change', () => {
            startButton.disabled = !startCheck.checked;
            hideFinePrints();
        })
    }

    const hideFinePrints = () => {
        startCheck.addEventListener('change', () => {
            finePrints.style.display = 'none';
        })
    }


    enableStart();
    startQuiz();
    
});