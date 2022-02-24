import React, { useState } from 'react';
import axios from 'axios';

export default function Javascriptexam() {
	const questions = [
		{
			questionText: 'Is JavaScript a case-sensitive language?',
			answerOptions: [
				{ answerText: 'false', isCorrect: false },
				{ answerText: 'true', isCorrect: false },
			],
		},
		{
			questionText: 'Can you pass a anonymous function as an argument to another function?',
			answerOptions: [
				{ answerText: 'true', isCorrect: true },
				{ answerText: 'false', isCorrect: false },
			],
		},
		{
			questionText: 'Which built-in method calls a function for each element in the array?',
			answerOptions: [
				{ answerText: 'while()', isCorrect: false },
				{ answerText: 'loop()', isCorrect: false },
				{ answerText: 'forEach()', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following function of Number object formats a number with a specific number of digits to the right of the decimal?',
			answerOptions: [
				{ answerText: 'toExponential()', isCorrect: false },
				{ answerText: 'toFixed()', isCorrect: true },
				{ answerText: 'toPrecision()', isCorrect: false },
				{ answerText: 'toLocaleString()', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following function of Boolean object returns a string containing the source of the Boolean object?',
			answerOptions: [
				{ answerText: 'toSource()', isCorrect: true },
				{ answerText: 'valueOf()', isCorrect: false },
				{ answerText: 'toString()', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following function of String object returns the index within the calling String object of the last occurrence of the specified value?',
			answerOptions: [
				{ answerText: 'lastIndexOf()', isCorrect: true },
				{ answerText: 'search()', isCorrect: false },
				{ answerText: 'substr()', isCorrect: false },
				{ answerText: 'indexOf()', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following function of String object returns the calling string value converted to lower case while respecting the current locale?',
			answerOptions: [
				{ answerText: 'toLocaleLowerCase()', isCorrect: true },
				{ answerText: 'toLowerCase()', isCorrect: false },
				{ answerText: 'toString()', isCorrect: false },
				{ answerText: 'substring()', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following function of Array object returns a new array comprised of this array joined with other array(s) and/or value(s)?',
			answerOptions: [
				{ answerText: 'push()', isCorrect: false },
				{ answerText: 'some()', isCorrect: false },
				{ answerText: 'pop()', isCorrect: false },
				{ answerText: 'concat()', isCorrect: true },
			],
		},
		{
			questionText: 'Which of the following function of Array object returns true if every element in this array satisfies the provided testing function?',
			answerOptions: [
				{ answerText: 'push()', isCorrect: false },
				{ answerText: 'some()', isCorrect: false },
				{ answerText: 'every()', isCorrect: true },
				{ answerText: 'concat()', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following function of Array object sorts the elements of an array?',
			answerOptions: [
				{ answerText: 'sort()', isCorrect: true },
				{ answerText: 'toSource()', isCorrect: false },
				{ answerText: 'toString()', isCorrect: false },
				{ answerText: 'unshift()', isCorrect: false },
			],
		},
		{
			questionText: 'How can you get the total number of arguments passed to a function?',
			answerOptions: [
				{ answerText: 'Using args.length property', isCorrect: false },
				{ answerText: 'Using arguments.length property', isCorrect: false },
				{ answerText: 'Both of the above', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: true },
			],
		},
		{
			questionText: 'Which of the following code creates an object?',
			answerOptions: [
				{ answerText: 'var book = Object();', isCorrect: false },
				{ answerText: 'var book = new Object();', isCorrect: true },
				{ answerText: 'var book = new OBJECT();', isCorrect: false },
				{ answerText: 'var book = new Book();', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following function of Boolean object returns a string of either true or false depending upon the value of the object?',
			answerOptions: [
				{ answerText: 'toSource()', isCorrect: false },
				{ answerText: 'valueOf()', isCorrect: false },
				{ answerText: 'toString()', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?',
			answerOptions: [
				{ answerText: 'slice()', isCorrect: false },
				{ answerText: 'split()', isCorrect: true },
				{ answerText: 'replace()', isCorrect: false },
				{ answerText: 'search()', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following keywords is used to define a variable in Javascript?',
			answerOptions: [
				{ answerText: 'var', isCorrect: false },
				{ answerText: 'let', isCorrect: false },
				{ answerText: 'both', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
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
                    "name" : "Javascript",
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
        <div className="position-absolute top-50 start-50 translate-middle">
			<h1 className="h1 center">JavaScript Quiz</h1>
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
					<div className='question-section'>
						<div className='question-count'>
						<span>Question {currentQuestion + 1}/{questions.length}</span>
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='buttonspec' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}