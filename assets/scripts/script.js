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
                "HyperText Makedown Language",
                "HyperFont Markup Language",
                "HyperLink Markup Language"
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
                "<div>",
                "<span>",
                "<table>",
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
                "border-color",
                "text-color",
                "fill-color",
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
                "line-height",
                "font-family",
                "letter-spacing",
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
                "/* */ for single line comments",
                "<>",
                "~~",
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
                "data-alt",
                "alt-text",
                "img-alt",
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
                "text-decoration: capitalize",
                "transform: capitalize",
                "capitalization: all-words",
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
                "getFirst()",
                "element[0]",
                "get(0)",
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
                "<end>",
                "<closing>",
                "<summary>",
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
                "<script external='xxx.js'>",
                "<script file='xxx.js'>",
                "<script type='text/javascript' src='xxx.js'>"
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

    let correctAnswers = [];
    let quizQuestions = [];
    let score = 0;
    let currentQuestionIndex = 0;
    let timeInterval;
    let data = [];
    let rating = 0;
    let chart;

    const welcomePage = document.getElementById('welcome-page');
    const quizPage = document.getElementById('quiz-page');
    const optionsCheck = document.getElementById('choose-difficulty');
    const optionsContainer = document.getElementById('options');
    const difficultyMenu = document.getElementById('difficulty');
    const questionAmount = document.getElementById('amount');
    const rangeOutput = document.getElementById('range-output');
    const startCheck = document.getElementById('checkbox');
    const finePrint = document.getElementById('fine-print');
    const startButton = document.getElementById('btn-welcome');
    const answersContainer = document.getElementById('answers');
    const questionElement = document.getElementById('question-text');
    const questionTracker = document.getElementById('question-number');
    const nextQuestionButton = document.getElementById('btn-next');
    const resultSection = document.getElementById('results-page');
    const scoreElement = document.getElementById('score');
    const countdownDiv = document.getElementById('countdown-container');
    const timeContainer = document.getElementById('countdown');
    const timeElement = document.getElementById('timer');
    const ctx = document.getElementById('my-chart').getContext('2d');
    const correctData = document.getElementById('correct-data');
    const wrongData = document.getElementById('wrong-data');
    const testResult = document.getElementById('test-result');
    const rateUsButton = document.getElementById('rate-us-btn');
    const rateUsContainer = document.getElementById('rate-us-container');
    const feedbackPage = document.getElementById('feedback-page');
    const stars = document.getElementsByClassName('stars');
    const starsContainer = document.getElementById('feedback-stars');
    const feedbackButton = document.getElementById('feedback-btn');
    const feedbackInput = document.getElementById('feedback-input');
    const thankyouPage = document.getElementById('thankyou-page');
    const thankyouButton = document.getElementById('thankyou-btn');

    const loadQuestion = () => {
        answersContainer.innerHTML = '';
        scoreElement.innerHTML = `Score: ${score}`;
        questionTracker.innerHTML = `${currentQuestionIndex + 1}/${quizQuestions.length}`;

        if (currentQuestionIndex < quizQuestions.length) {
            const currentQuestion = quizQuestions[currentQuestionIndex];
            questionElement.innerText = currentQuestion.question;
            const answers = [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers.sort(() => Math.random() - 0.5).slice(0, 3)].sort(() => Math.random() - 0.5);

            answers.forEach(answer => {
                const button = document.createElement('button');
                button.innerText = answer;
                button.classList.add('answer-btn');
                button.addEventListener('click', (event) => selectAnswer(event));
                answersContainer.appendChild(button);
            })

            nextQuestionButton.disabled = true;
            startTime();
        } else {
            showResult();
        }
    }

    const selectAnswer = (event) => {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        const selectedAnswer = event.target.innerText;

        if (selectedAnswer === currentQuestion.correct_answer && !correctAnswers.includes(selectedAnswer)) {
            correctAnswers.push(selectedAnswer);
            score++;
        }

        nextQuestionButton.disabled = false;
    }

    nextQuestionButton.addEventListener('click', () => {
        currentQuestionIndex++;
        clearInterval(timeInterval);
        loadQuestion();
    })

    const initQuiz = (amount, difficulty) => {
        let filteredQuestions = questions.filter(question => difficulty === 'default' || question.difficulty === difficulty);

        if (amount && amount < filteredQuestions.length) {
            filteredQuestions = filteredQuestions.sort(() => Math.random() - 0.5).slice(0, amount);
        } else {
            filteredQuestions = filteredQuestions.sort(() => Math.random() - 0.5);
        }

        quizQuestions = filteredQuestions;
        score = 0;
        currentQuestionIndex = 0;

        if (quizQuestions.length > 0) {
            loadQuestion();
        } else {
            console.error('No question was found.');
        }
    }

    const startQuiz = () => {
        startButton.addEventListener('click', () => {
            const difficulty = document.getElementById('difficulty').value;
            const amount = parseInt(document.getElementById('amount').value, 10);
            welcomePage.classList.add('hidden');
            countdownDiv.classList.remove('hidden');
            timeContainer.classList.remove('hidden');
            quizPage.classList.remove('hidden');

            initQuiz(amount, difficulty);
        })
    }

    const showResult = () => {
        let correctPercentage = (score / quizQuestions.length) * 100;
        let wrongPercentage = 100 - correctPercentage;
        let correctAnswers = score;
        let wrongAnswers = quizQuestions.length - correctAnswers;
        data.push(wrongAnswers.toFixed(0), correctAnswers.toFixed(0));
        createOrUpdateChart(data);

        resultSection.classList.remove('hidden');
        rateUsContainer.classList.remove('hidden');
        quizPage.classList.add('hidden');
        countdownDiv.classList.add('hidden');
        timeContainer.classList.add('hidden');
        clearInterval(timeInterval);
        correctData.innerHTML = `
            <h2>Correct</h2>
            <p>${correctPercentage.toFixed(1)}%</p>
            <p>${correctAnswers}/${quizQuestions.length} questions</p>
        `;
        wrongData.innerHTML = `
            <h2>Wrong</h2>
            <p>${wrongPercentage.toFixed(1)}%</p>
            <p>${wrongAnswers}/${quizQuestions.length} questions</p>
        `;
        testResult.innerHTML = `
            ${correctPercentage >= 60 ? "Congratulations!<br>You passed the exam." : "Unfortunately,<br>You did not pass the exam."}
        `;

        if (correctPercentage >= 60) {
            party.confetti(resultSection, {
                count: party.variation.range(100, 150),
                shapes: ['circle', 'square'], 
                spread: party.variation.range(40, 50),
                speed: party.variation.range(200, 600),
            });
        }
        
    }

    rateUsButton.addEventListener('click', () => {
        resultSection.classList.add('hidden');
        rateUsContainer.classList.add('hidden');
        feedbackPage.classList.remove('hidden');
    })

    

    const showOptions = () => {
        optionsCheck.addEventListener('change', () => {
            if (optionsCheck.checked) {
                optionsContainer.classList.remove('hidden');
            } else {
                optionsContainer.classList.add('hidden');
            }
        })
    }

    const enableStart = () => {
        startCheck.addEventListener('change', () => {
            startButton.disabled = !startCheck.checked;
            finePrint.style.display = finePrint.style.display === 'none' ? 'block' : 'none';
        })
    }

    const startTime = () => {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        let totalTime = currentQuestion.time;
        let time = totalTime;
        timeElement.innerHTML = time;

        const circlePath = document.querySelector('.progress-foreground');
        const fullCircleLength = circlePath.getTotalLength();
        circlePath.style.strokeDasharray = `${fullCircleLength} ${fullCircleLength}`;
        circlePath.style.strokeDashoffset = fullCircleLength;
 

        clearInterval(timeInterval);

        timeInterval = setInterval(() => {
            time--;
            timeElement.innerHTML = time;
            let dashOffset = (fullCircleLength * (totalTime - time)) / totalTime;
            circlePath.style.strokeDashoffset = fullCircleLength - dashOffset;

            if (time <= 0) {
                clearInterval(timeInterval)
                currentQuestionIndex++;
                loadQuestion();
            }
        }, 1000)
    }

    const createOrUpdateChart = (data) => {
        if (chart) {
            chart.destroy();
        }

        chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Wrong', 'Correct'],
                datasets: [{
                    label: 'Total',
                    data: data,
                    backgroundColor: ['#d20094', '#00ffff'],
                    borderWidth: 0,
                }]
            },
            options: {
                cutout: '70%',
            }
        });
    }

    const mouseOver = () => {
        for (let i = 0; i < stars.length; i++) {
            stars[i].addEventListener('mouseover', () => {
                starsLightOn(i);
            })
        }
    }

    const starsLightOn = (index) => {
        for (let i = 0; i < stars.length; i++) {
            if (i <= index) {

                stars[i].style.fill = '#00FFFF';

            } else {

                stars[i].style.fill = '#0A113B';

            }

        }
    }

    const mouseLeave = () => {
        starsContainer.addEventListener('mouseleave', () => {
            updateStars(rating);
        })
    }

    const updateStars = (rating) => {
        for (let i = 0; i < stars.length; i++) {
            stars[i].style.fill = i < rating ? '#00FFFF' : '#0A113B';
        }
    }

    const handleStarClick = (index) => { 
        rating = index + 1;
        updateStars(rating);
        checkFeedbackConditions();
    }

    const checkFeedbackConditions = () => {
        const isFeedbackProvided = feedbackInput.value.trim().length > 0;
        feedbackButton.disabled = rating === 0 || !isFeedbackProvided;
    };

    Array.from(stars).forEach((star, index) => {
        star.addEventListener('click', () => {
            handleStarClick(index);
        })
    })

    feedbackButton.addEventListener('click', () => {
        feedbackPage.classList.add('hidden');
        thankyouPage.classList.remove('hidden');
    })

    feedbackInput.addEventListener('input', checkFeedbackConditions);

    thankyouButton.addEventListener('click', () => {
        thankyouPage.classList.add('hidden');
        welcomePage.classList.remove('hidden');
        optionsContainer.classList.add('hidden');
        startButton.disabled = true;
        correctAnswers = [];
        quizQuestions = [];
        score = 0;
        currentQuestionIndex = 0;
        rating = 0;
        data = [];
        startCheck.checked = false;
        optionsCheck.checked = false;
        difficultyMenu.value = 'default';
        questionAmount.value = 10;
        finePrint.style.display = 'block';
        rangeOutput.value = 10;
    })

    showOptions();
    enableStart();
    startQuiz();
    handleStarClick();
    mouseOver();
    mouseLeave();

});