// JavaScript (React)
import React, { useState } from 'react';
import { Nav } from '../components/Navbar';

const questions = [
  { question: 'Question 1', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], answer: 'Option 1' },
  { question: 'Question 2', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], answer: 'Option 2' },
  // Add more questions as needed
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswerOptionClick = (selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedOption;
    setAnswers(newAnswers);
  };

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const finalScore = answers.reduce((score, answer, index) => score + (answer === questions[index].answer ? 1 : 0), 0);
      alert(`Quiz ended! Your score is ${finalScore}`);
    }
  };

  const handleBackClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className='bg-blue-gray-800'>
      <Nav />
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-gray-800">
        <div className="p-10 bg-blue-gray-900 shadow-md rounded-lg w-2/3 sm:w-1/2">
          <div className="font-bold mb-4 text-2xl text-white">{questions[currentQuestion].question}</div>
          <div className="space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
                className={`block w-full text-left py-2 px-4 rounded-2xl hover:bg-blue-600 border-2 border-blue-800 ${answers[currentQuestion] === option ? 'bg-blue-600' : 'bg-transparent'} text-white`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <button onClick={handleBackClick} className="py-2 px-4 rounded bg-gray-500 text-white">Back</button>
            <button onClick={handleNextClick} className="py-2 px-4 rounded bg-gray-500 text-white">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;