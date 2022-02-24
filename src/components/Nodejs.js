import React, { useState } from "react";
import axios from "axios";

export default function Htmlexam() {
  const questions = [
    {
        questionText: '1. Which of the following engine Node in core?',
        answerOptions: [
            { answerText: 'Chrome V8', isCorrect: false },
            { answerText: 'Microsoft Chakra', isCorrect: false },
            { answerText: 'SpiderMonkey', isCorrect: true },
            { answerText: 'None of the above', isCorrect: false },
        ],
    },
    {
        questionText: '2. What does the REPL stand for?',
        answerOptions: [
            { answerText: 'REPL stands for "Read Eval Print Loop.', isCorrect: true },
            { answerText: 'REPL stands for "Research Eval Program Learn.', isCorrect: false },
            { answerText: 'REPL stands for "Read Earn Point Learn.', isCorrect: false },
            { answerText: 'REPL stands for "Read Eval Point Loop.', isCorrect: false },
        ],
    },
    {
        questionText: '3. Which of the following command is used to start a REPL session?',
        answerOptions: [
            { answerText: '$ node', isCorrect: true },
            { answerText: '$ node start', isCorrect: false },
            { answerText: '$ node repl', isCorrect: false },
            { answerText: '$ node console', isCorrect: false },
        ],
    },
    {
        questionText: '4. In which language is Node.js written?',
        answerOptions: [
            { answerText: 'Javascript', isCorrect: true },
            { answerText: 'C', isCorrect: false },
            { answerText: 'C++', isCorrect: false },
            { answerText: 'All the above', isCorrect: false },
        ],
    },
    {
        questionText: '5. Which of the following command is used to install the Node.js express module?',
        answerOptions: [
            { answerText: '$ npm install express', isCorrect: true },
            { answerText: '$ node install express', isCorrect: false },
            { answerText: '$ install express', isCorrect: false },
            { answerText: 'None of the above', isCorrect: false },
        ],
    },
    {
        questionText: '6. What is Callback?',
        answerOptions: [
            { answerText: 'The callback is a technique in which a method calls back the caller method.', isCorrect: false },
            { answerText: 'The callback is an asynchronous equivalent for a function.', isCorrect: true },
            { answerText: 'Both of the above', isCorrect: false },
            { answerText: 'None of the above', isCorrect: false },
        ],
    },
    {
        questionText: '1. What is the full form of HTML?',
        answerOptions: [
            { answerText: 'HighText Machine Language', isCorrect: false },
            { answerText: 'HyperText and links Markup Language', isCorrect: false },
            { answerText: 'HyperText Markup Language ', isCorrect: true },
            { answerText: 'None of the above', isCorrect: false },
        ],
    },
    {
        questionText: '7. Which of the following extension is used to save the Node.js files?',
        answerOptions: [
            { answerText: '.js', isCorrect: false },
            { answerText: '.node', isCorrect: false },
            { answerText: '.java', isCorrect: true },
            { answerText: '.txt', isCorrect: false },
        ],
    },
    {
        questionText: '1. What is the full form of HTML?',
        answerOptions: [
            { answerText: 'HighText Machine Language', isCorrect: false },
            { answerText: 'HyperText and links Markup Language', isCorrect: false },
            { answerText: 'HyperText Markup Language ', isCorrect: true },
            { answerText: 'None of the above', isCorrect: false },
        ],
    },
    {
        questionText: '8. The Node.js modules can be exposed using:',
        answerOptions: [
            { answerText: 'expose', isCorrect: false },
            { answerText: 'module', isCorrect: false },
            { answerText: 'exports', isCorrect: true },
            { answerText: 'All of the above', isCorrect: false },
        ],
    },
    {
        questionText: '9. Which of the following shortcut command is used to kill a process in Node.js?',
        answerOptions: [
            { answerText: 'CTRL + B', isCorrect: false },
            { answerText: 'CTRL + C', isCorrect: true },
            { answerText: 'CTRL + D', isCorrect: false },
            { answerText: 'CTRL + Z', isCorrect: false },
        ],
    },
    {
        questionText: '10. Which of the following module is not a built-in node module?',
        answerOptions: [
            { answerText: 'zlib', isCorrect: false },
            { answerText: 'https', isCorrect: false },
            { answerText: 'dgram', isCorrect: false },
            { answerText: 'fsread', isCorrect: true },
        ],
    },
    {
        questionText: '11. fs  What does themodule stand for?',
        answerOptions: [
            { answerText: 'File Service', isCorrect: false },
            { answerText: 'File System', isCorrect: true },
            { answerText: 'File Store', isCorrect: false },
            { answerText: 'File Sharing', isCorrect: false },
        ],
    },
    {
        questionText: '12. Which of the following template engines can be used with Node.js?',
        answerOptions: [
            { answerText: 'Jade', isCorrect: false },
            { answerText: 'Vash', isCorrect: false },
            { answerText: 'Handlebars', isCorrect: true },
            { answerText: 'All the above', isCorrect: false },
        ],
    },
    {
        questionText: '13. Which of the following method is used to return the current working directory of the process?',
        answerOptions: [
            { answerText: 'cwd();', isCorrect: true },
            { answerText: 'pwd();', isCorrect: false },
            { answerText: 'cmd();', isCorrect: false },
            { answerText: 'None of the above', isCorrect: false },
        ],
    },
    {
        questionText: '14. Which of the following is not a benefit of using modules in Express?',
        answerOptions: [
            { answerText: 'It provides a means of dividing up tasks.', isCorrect: false },
            { answerText: 'It provides a means of reuse of program code.', isCorrect: false },
            { answerText: 'It provides a means of reducing the size of the program.', isCorrect: true },
            { answerText: 'It provides a means of testing individual parts of the program.', isCorrect: false },
        ],
    },
    {
        questionText: '15. What is the default scope in the Node.js application?',
        answerOptions: [
            { answerText: 'Global', isCorrect: false },
            { answerText: 'Local', isCorrect: true },
            { answerText: 'Global function', isCorrect: false },
            { answerText: 'Local to object', isCorrect: false },
        ],
    },
];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = async (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
            try {
                const config = {
                    method: 'post',
                    url: 'http://localhost:5000/api/marks/addmarks',
                    headers: {
                    'User-Agent': 'Axios - console app',
                    'Content-Type': ' application/json',
                    'auth-token': localStorage.getItem('token')
                },
                data: {
                    "name" : "NodeJS",
                    "marks": score
                    
                }
                }
            let res = await axios(config)
            console.log(res);
            // if ()
            if(res.status===200){
                setShowScore(true);  //score
            }
        } catch (error) {
            console.log(error);
            console.log(error.response.data)
            {alert(error.response.data.error)}
        }
		}
	};
  return (
    <div>
      <div className="position-absolute top-50 start-50 translate-middle ">
        <h1 className="h1 center">NodeJS Quiz</h1>
        {showScore ? (
          <div className="score-section loginBody ">
            Congratulation!!! <br />
            You Have Successfully completed your quiz on our Exam Site FlexiQuiz. 
           <br/>You have scored {score} out of {questions.length} . 
            <br/>
            <br/>
            We are very gratefull to you that you have chosen our site for the quiz.
            <br />
            Thank you!!!
            <br/>
            Have A Nice Day

          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>
                  Question {currentQuestion + 1}/{questions.length}
                </span>
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  className="buttonspec"
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
