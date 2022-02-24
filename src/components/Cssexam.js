import React, { useState } from 'react';
import axios from 'axios';

export default function Cssexam() {
	const questions = [
        {
            questionText: 'CSS stands for?',
            answerOptions: [

                { answerText: 'Cascade style sheets', isCorrect: false },
                { answerText: 'Color and style sheets', isCorrect: false },
                { answerText: 'Cascading style sheets', isCorrect: true },
                { answerText: 'None of the above', isCorrect: false },
            ],
        },
        {
            questionText: 'Who is CEO of Tesla?',
            answerOptions: [
                { answerText: '<style src = example.css>', isCorrect: false },
                { answerText: '<style src = "example.css" >', isCorrect: false },
                { answerText: '<stylesheet> example.css </stylesheet>', isCorrect: false },
                { answerText: '<link rel="stylesheet" type="text/css" href="example.css">', isCorrect: true },
            ],
        },
        {
            questionText: 'The property in CSS used to change the background color of an element is?',
            answerOptions: [
                { answerText: 'bgcolor', isCorrect: true },
                { answerText: 'color', isCorrect: false },
                { answerText: 'background-color', isCorrect: false },
                { answerText: 'All of the above', isCorrect: false },
            ],
        },
        {
            questionText: 'The property in CSS used to change the text color of an element is?',
            answerOptions: [
                { answerText: 'bgcolor', isCorrect: false },
                { answerText: 'color', isCorrect: true },
                { answerText: 'background-color', isCorrect: false },
                { answerText: 'All of the above', isCorrect: false },
            ],
        },
        {
            questionText: 'The CSS property used to control the element"s font-size is?',
            answerOptions: [
                { answerText: 'text-style', isCorrect: false },
                { answerText: 'text-size', isCorrect: false },
                { answerText: 'font-size', isCorrect: true },
                { answerText: 'None of the above', isCorrect: false },
            ],
          },
        {
            questionText: 'The HTML attribute used to define the inline styles is?',
            answerOptions: [
                { answerText: 'style', isCorrect: true },
                { answerText: 'styles', isCorrect: false },
                { answerText: 'class', isCorrect: false },
                { answerText: 'None of the above', isCorrect: false },
            ],
          },
        {
            questionText: 'The HTML attribute used to define the internal stylesheet is?',
            answerOptions: [
                { answerText: '<style>', isCorrect: true },
                { answerText: 'style', isCorrect: false },
                { answerText: '<link>', isCorrect: false },
                { answerText: '<script>', isCorrect: false },
            ],
          },
        {
            questionText: 'Which of the following CSS property is used to set the background image of an element?',
            answerOptions: [
                { answerText: 'background-attachment', isCorrect: false },
                { answerText: 'background-image', isCorrect: true },
                { answerText: 'background-color', isCorrect: false },
                { answerText: 'None of the above', isCorrect: false },
            ],
          },
        {
            questionText: 'Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?',
            answerOptions: [
                { answerText: 'p {background-color : yellow;}', isCorrect: false },
                { answerText: 'p {background-color : #yellow;}', isCorrect: true },
                { answerText: 'all {background-color : yellow;}', isCorrect: false },
                { answerText: 'all p {background-color : #yellow;}', isCorrect: false },
            ],
          },
        {
            questionText: 'Which of the following is the correct syntax to display the hyperlinks without any underline?',
            answerOptions: [
                { answerText: 'a {text-decoration : underline;}', isCorrect: false },
                { answerText: 'a {decoration : no-underline;}', isCorrect: false },
                { answerText: 'a {text-decoration : none;}', isCorrect: true },
                { answerText: 'None of the above', isCorrect: false },
            ],
          },
        {
            questionText: ' Which of the following property is used as the shorthand property for the padding properties?',
            answerOptions: [
                { answerText: 'padding-left', isCorrect: false },
                { answerText: 'padding-right', isCorrect: false },
                { answerText: 'padding', isCorrect: true },
                { answerText: 'All of the above', isCorrect: false },
            ],
          },
        {
            questionText: 'The CSS property used to make the text bold is?',
            answerOptions: [
                { answerText: 'font-weight : bold', isCorrect: true },
                { answerText: 'weight: bold', isCorrect: false },
                { answerText: 'font: bold', isCorrect: false },
                { answerText: 'style: bold', isCorrect: false },
            ],
          },
        {
            questionText: 'Are the negative values allowed in padding property?',
            answerOptions: [
                { answerText: 'Yes', isCorrect: false },
                { answerText: 'No', isCorrect: true },
                { answerText: 'Cannot  say', isCorrect: false },
                { answerText: 'Maybe', isCorrect: false },
            ],
          },
        {
            questionText: 'Which of the following property is used as the shorthand property of margin properties?',
            answerOptions: [
                { answerText: 'margin-left', isCorrect: false },
                { answerText: 'margin-right', isCorrect: true },
                { answerText: 'margin', isCorrect: false },
                { answerText: 'None of the above', isCorrect: false },
            ],   
          },
        {
            questionText: ' The CSS property used to specify the transparency of an element is ',
            answerOptions: [
                { answerText: 'opacity', isCorrect: false },
                { answerText: 'filter', isCorrect: true },
                { answerText: 'visibility', isCorrect: false },
                { answerText: 'overlay', isCorrect: false },
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
                    "name" : "CSS",
                    "marks": score
                    
                }
                }
            let res = await axios(config)
            console.log(res);
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
			<h1 className="h1 center">CSS Quiz</h1>
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