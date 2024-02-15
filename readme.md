# Epicode Benchmark Platform

This project consists of a Single Page Application (SPA) that allows the user to access an exemplified version of Epicode's benchmark quiz.

The application was developed as a group project during the first Build Week of the Epicode FullStack Web Developer course (class FS0124-A, year 2024).

Development Team members:
- Marcello Verduci
- Riccardo Del Piccolo
- Alessio Luise
- Luca Martella
- Francesco Naccari
- Sergio Nolasco



## Tech Stack

- HTML
- CSS
- Javascript ES6



## Features
### Some of the features included in the application were explicitly requested by the project outline, while others were optional. Additionally, the development team added further features as enhancements to the functionality.
#### Alongside each feature, it is indicated within parentheses whether it is required, optional or added by the development team


- Option for the user to select, within the Welcome Page, the quiz difficulty and the number of questions (optional);

- The user must achieve a score greater than or equal to 60%: in this case, the result page will indicate the test as passed. Otherwise, the user will receive a test failure result (required).

- All possible questions are saved in the global variable 'questions', which is an array containing various questions in the form of objects. These objects specify the various properties of the questions: type, difficulty, expected response time etc. (required);

- The questions can be of 2 types: multiple choice ('multiple'), boolean ('truefalse'). Depending on the type of question, the number of the answers radio buttons will change (4 buttons in the case of multiple choice, 2 buttons in the case of true/false) (required);

- A global variable currentQuestionIndex has been created to record the index of the loaded question. If this is less than the length of the array of questions selected for the quiz, it displays the question to the user and calls the function that starts the timer. If the index of the current question is more than the questions array length, it calls the function which hides the quiz section and loads the results section that displays the user's achieved result (required);

- The global variable 'score' records the user's score during the quiz (required);

- Each correct answer adds one point to the user's score (required);

- When the user clicks the button to move to the next question, the score is updated and displayed on the screen, providing real-time feedback on the achieved score (and consequently feedback on the accuracy of the last given answer) (optional);

- Questions are randomly selected from a database (array of objects) (added by Dev Team);

- Randomization of incorrect answers: The set of questions to be presented to the user is randomly selected from the 'questions' array. Initially, each question object had 1 correct answer and 3 incorrect answers. To make the result more reliable even if a user wants to take the quiz multiple times, the number of incorrect answers has been increased to 6. Additionally, the set of incorrect answers is also created randomly when the question is generated. This makes it more difficult for the user to memorize previously given incorrect answers and the possibility of guessing the correct answer through elimination (added by Dev Team).

- A timer starts upon loading each question. Upon expiration of the time, the next question is automatically loaded without increasing the score (required);

- The timer has a variable time value depending on the current question difficulty: 30 seconds for 'easy' difficulty questions, 45 seconds for 'medium' difficulty questions, 60 seconds for 'hard' difficulty questions (added by Dev Team);

- At the end of the quiz, the results section displays to the user the percentage of correct and incorrect answers and a summary doughnut chart. In the center of the doughnut chart, there is a different message depending on the outcome of the quiz (score lower or higher than 60%) (required);



## Authors

- [@gmverduci](https://www.github.com/gmverduci)

- [@rdpic](https://www.github.com/rdpic)

- [@SerNo-dev](https://www.github.com/SerNo-dev)

- [@martella93](https://www.github.com/martella93)

- [@FrancescoNaccari](https://www.github.com/FrancescoNaccari)

- [@alex89luis](https://www.github.com/alex89luis)