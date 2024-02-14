document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            category: "HTML",
            type: "multiple",
            difficulty: "easy",
            time: 30,
            value: 1,
            question: "What does HTML stand for?",
            correct_answer: "HyperText Markup Language",
            incorrect_answers: [
                "HyperText Markdown Language",
                "HyperTool Markup Language",
                "HyperText Makeup Language",
            ],
        },
        {
            category: "HTML",
            type: "multiple",
            difficulty: "easy",
            time: 30,
            value: 1,
            question: "Which HTML tag is used to define an internal style sheet?",
            correct_answer: "<style>",
            incorrect_answers: [
                "<script>",
                "<css>",
                "<link>",
            ],
        },
        {
            category: "CSS",
            type: "multiple",
            difficulty: "easy",
            time: 30,
            value: 1,
            question: "What property is used in CSS to change the background color of an element?",
            correct_answer: "background-color",
            incorrect_answers: [
                "color",
                "bgcolor",
                "background-image",
            ],
        },
        {
            category: "CSS",
            type: "multiple",
            difficulty: "easy",
            time: 30,
            value: 1,
            question: "Which CSS property controls the text size?",
            correct_answer: "font-size",
            incorrect_answers: [
                "text-size",
                "font-weight",
                "text-style",
            ],
        },
        {
            category: "JavaScript",
            type: "multiple",
            difficulty: "easy",
            time: 30,
            value: 1,
            question: "Which symbol is used for comments in JavaScript?",
            correct_answer: "// for single line comments, /* */ for multi-line comments",
            incorrect_answers: [
                "#",
                "<!-- -->",
                "// for single line comments only",
            ],
        },
        {
            category: "HTML",
            type: "multiple",
            difficulty: "medium",
            time: 45,
            value: 2,
            question: "Which attribute is used in HTML to specify an alternate text for an image, if the image cannot be displayed?",
            correct_answer: "alt",
            incorrect_answers: [
                "title",
                "src",
                "href",
            ],
        },
        {
            category: "CSS",
            type: "multiple",
            difficulty: "medium",
            time: 45,
            value: 2,
            question: "How do you make each word in a text start with a capital letter using CSS?",
            correct_answer: "text-transform: capitalize",
            incorrect_answers: [
                "font-style: capitalize",
                "text-style: uppercase",
                "text-transform: uppercase",
            ],
        },
        {
            category: "JavaScript",
            type: "multiple",
            difficulty: "medium",
            time: 45,
            value: 2,
            question: "Which JavaScript method is used to access the first element of an array?",
            correct_answer: "array[0]",
            incorrect_answers: [
                "first()",
                "array.first()",
                "array(0)",
            ],
        },
        {
            category: "HTML",
            type: "multiple",
            difficulty: "hard",
            time: 60,
            value: 3,
            question: "In HTML5, which element is used to specify a footer for a document or section?",
            correct_answer: "<footer>",
            incorrect_answers: [
                "<bottom>",
                "<foot>",
                "<header>",
            ],
        },
        {
            category: "JavaScript",
            type: "multiple",
            difficulty: "hard",
            time: 60,
            value: 3,
            question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
            correct_answer: "<script src='xxx.js'>",
            incorrect_answers: [
                "<script href='xxx.js'>",
                "<script name='xxx.js'>",
                "<link src='xxx.js'>",
            ],
        },
        {
            category: "HTML",
            type: "truefalse",
            difficulty: "easy",
            time: 30,
            value: 1,
            question: "In HTML, comments are added using the <!-- Comment --> syntax.",
            correct_answer: "True",
            incorrect_answers: [
                "False",
            ],
        },
        {
            category: "CSS",
            type: "truefalse",
            difficulty: "easy",
            time: 30,
            value: 1,
            question: "In CSS, id selectors are prefixed with a hash (#) symbol.",
            correct_answer: "True",
            incorrect_answers: [
                "False",
            ],
        },
        {
            category: "JavaScript",
            type: "truefalse",
            difficulty: "medium",
            time: 45,
            value: 2,
            question: "In JavaScript, null is the same as undefined.",
            correct_answer: "False",
            incorrect_answers: [
                "True",
            ],
        },
        {
            category: "HTML",
            type: "truefalse",
            difficulty: "medium",
            time: 45,
            value: 2,
            question: "The <link> element must be placed inside the body section of an HTML.",
            correct_answer: "False",
            incorrect_answers: [
                "True",
            ],
        },
        {
            category: "CSS",
            type: "truefalse",
            difficulty: "hard",
            time: 60,
            value: 3,
            question: "In CSS, the em unit is relative to the font-size of the element itself.",
            correct_answer: "True",
            incorrect_answers: [
                "False",
            ],
        },
        {
            category: "JavaScript",
            type: "truefalse",
            difficulty: "hard",
            time: 60,
            value: 3,
            question: "Using const to declare a variable in JavaScript means that the variable's value can be changed later in the program.",
            correct_answer: "False",
            incorrect_answers: [
                "True",
            ],
        },
    ];

    const answers = [];
    const quizQuestions = [];


    let score = 0;
    let currentQuestionIndex = 0;

    const welcomePage = document.getElementById('welcome-page');
    const quizPage = document.getElementById('quiz-page');
    const optionsCheck = document.getElementById('choose-difficulty');
    const optionsContainer = document.getElementById('options');
    const startCheck = document.getElementById('checkbox');
    const finePrints = document.getElementsByClassName('fine-print');
    const startButton = document.getElementById('btn-welcome');
    const answersContainer = document.getElementById('answers');
    const questionElement = document.getElementById('question-text');
    const questionTracker = document.getElementById('question-number');
    const resultSection = document.getElementById('results-container');
    const scoreElement = document.getElementById('score');
    const timeElement = document.getElementById('countdown');

    const loadQuestion = () => {
        questionTracker.innerHTML = (currentQuestionIndex + 1) + "/" + questions.length;

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
            startTime();
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

    const initQuiz = (amount, difficulty) => {
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
        startTime();
    }

    const startQuiz = () => {
        startButton.addEventListener('click', () => {
            welcomePage.classList.add('hidden');
            timeElement.classList.remove('hidden');
            quizPage.classList.remove('hidden');
        })
    }

    const showResult = () => {
        let correctPercentage = (score / quizQuestions.length) * 100;
        let wrongPercentage = 100 - correctPercentage;
        let correctAnswers = score;
        let wrongAnswers = quizQuestions.length - correctAnswers;

        resultSection.classList.remove('hidden');
        quizPage.classList.add('hidden');
        resultSection.innerHTML = `
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
                    ${correctPercentage >= 60 ? "Congratulations!<br>You passed the exam." : "Unfortunately,<br>You did not pass the exam."}
                    </span>
                </div>
                <div>
                    <h2>Wrong</h2>
                    <p>${wrongPercentage.toFixed(1)}%</p>
                    <p>${wrongAnswers}/${quizQuestions.length} questions</p>
                </div>
            </div>
        `;
    }

    const showOptions = () => {
       optionsCheck.addEventListener('change', () => {
            optionsContainer.classList.remove = 'hidden';
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

    const startTime = () => {
        const currentQuestion = questions[currentQuestionIndex];
        let time = currentQuestion.time;
        timeElement.innerText = time;
        const timeInterval = setInterval(() => {
            time--;
            timeElement.innerText = time;
            if (time <= 0) {
                clearInterval(timeInterval)
                loadQuestion()
            }
        
        }, 1000)
    }

    showOptions();
    enableStart();
    initQuiz();
    startQuiz();

});