import React, { useState } from "react";
import axios from "axios";

export default function Htmlexam() {
  const questions = [
    {
      questionText: "1. What is the full form of HTML?",
      answerOptions: [
        { answerText: "HighText Machine Language", isCorrect: false },
        { answerText: "HyperText and links Markup Language", isCorrect: false },
        { answerText: "HyperText Markup Language ", isCorrect: true },
        { answerText: "None of the above", isCorrect: false },
      ],
    },
    {
      questionText:
        "2. The correct sequence of HTML tags for starting a webpage is -",
      answerOptions: [
        { answerText: "Head, Title, HTML, body", isCorrect: false },
        { answerText: "HTML, Body, Title, Head", isCorrect: false },
        { answerText: "HTML, Head, Title, Body", isCorrect: true },
        { answerText: "HTML, Head, Title, link", isCorrect: false },
      ],
    },
    {
      questionText:
        "3. Which character is used to represent the closing of a tag in HTML?",
      answerOptions: [
        { answerText: "/", isCorrect: true },
        { answerText: '""', isCorrect: false },
        { answerText: ".", isCorrect: false },
        { answerText: "!", isCorrect: false },
      ],
    },
    {
      questionText: "4. The &lt;hr&gt; tag in HTML is used for -",
      answerOptions: [
        { answerText: "new line", isCorrect: false },
        { answerText: "vertical ruler ", isCorrect: false },
        { answerText: "new paragraph", isCorrect: false },
        { answerText: "horizontal ruler", isCorrect: true },
      ],
    },
    {
      questionText:
        "5. Which of the following attribute is used to provide a unique name to an element?",
      answerOptions: [
        { answerText: "class", isCorrect: false },
        { answerText: "id", isCorrect: true },
        { answerText: "type", isCorrect: false },
        { answerText: "None of the above", isCorrect: false },
      ],
    },
    {
      questionText:
        "6. Which of the following HTML tag is used to display the text with scrolling effect?",
      answerOptions: [
        { answerText: "&lt;marquee&gt;", isCorrect: true },
        { answerText: "&lt;scroll&gt;", isCorrect: false },
        { answerText: "&lt;div&gt;", isCorrect: false },
        { answerText: "None of the above", isCorrect: false },
      ],
    },
    {
      questionText:
        "7.  Which of the following HTML tag is the special formatting tag?",
      answerOptions: [
        { answerText: "&lt;p&gt;", isCorrect: false },
        { answerText: "&lt;b&gt;", isCorrect: false },
        { answerText: "&lt;pre&gt;", isCorrect: true },
        { answerText: "None of the above", isCorrect: false },
      ],
    },
    {
      questionText:
        "8. What are the types of unordered or bulleted list in HTML?",
      answerOptions: [
        { answerText: "disc, square, triangle", isCorrect: false },
        { answerText: "polygon, triangle, circle", isCorrect: false },
        { answerText: "disc, circle, square", isCorrect: true },
        { answerText: "All the above", isCorrect: false },
      ],
    },
    {
      questionText: "9. An HTML program is saved by using the ____ extension. ",
      answerOptions: [
        { answerText: ".htm", isCorrect: false },
        { answerText: ".html", isCorrect: true },
        { answerText: ".hml", isCorrect: false },
        { answerText: "None of the above", isCorrect: false },
      ],
    },
    {
      questionText: "10. A program in HTML can be rendered and read by - ",
      answerOptions: [
        { answerText: "Web Browser", isCorrect: true },
        { answerText: "Server", isCorrect: false },
        { answerText: "Interpreter", isCorrect: false },
        { answerText: "None of the above", isCorrect: false },
      ],
    },
    {
      questionText: "11. The tags in HTML are -",
      answerOptions: [
        { answerText: "case-sensitive", isCorrect: false },
        { answerText: "in upper case", isCorrect: false },
        { answerText: "not case sensitive", isCorrect: true },
        { answerText: "in lower case", isCorrect: false },
      ],
    },
    {
      questionText:
        "12. Which of the following tag is used for inserting the largest heading in HTML?",
      answerOptions: [
        { answerText: "&lt;h3&gt;", isCorrect: false },
        { answerText: "&lt;h4&gt;", isCorrect: false },
        { answerText: "&lt;h5&gt;", isCorrect: false },
        { answerText: "&lt;h1&gt;", isCorrect: true },
      ],
    },
    {
      questionText:
        "13. How many sizes of headers are available in HTML by default?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "2", isCorrect: false },
        { answerText: "6", isCorrect: true },
        { answerText: "4", isCorrect: false },
      ],
    },
    {
      questionText: "14. Who is the father of HTML?",
      answerOptions: [
        { answerText: "Rasmus Lerdorf", isCorrect: false },
        { answerText: "Tim Berners-Lee", isCorrect: true },
        { answerText: "Brendan Eich", isCorrect: false },
        { answerText: "Sergey Brin", isCorrect: false },
      ],
    },
    {
      questionText:
        "15. Which of the following HTML attribute is used to define inline styles?",
      answerOptions: [
        { answerText: "style", isCorrect: true },
        { answerText: "type", isCorrect: false },
        { answerText: "class", isCorrect: false },
        { answerText: "None of the above", isCorrect: false },
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
                    "name" : "Html",
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
        <h1 className="h1 center">HTML Quiz</h1>
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
