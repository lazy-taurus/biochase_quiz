import axios from 'axios';
import React, { useState } from 'react';
import CountdownTimer from '../components/Timer';

const subjectiveQuestions = [
  { question: 'Explain the process of photosynthesis in detail.' },
  {
    question:
      "Describe Newton's three laws of motion with real-world examples.",
  },
  { question: 'What is the impact of climate change on polar ice caps?' },
  { question: 'Discuss the role of technology in modern education.' },
];

const LevelPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const currentQuestion = subjectiveQuestions[currentQuestionIndex];

  // Handle navigation between questions using sidebar
  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleAnswerChange = (event) => {
    console.log(answers);
    const updatedAnswer = event.target.value;

    // Create a new answer object
    const answerObject = {
      ques: currentQuestionIndex + 1, // Assuming question index is 0-based
      answer: updatedAnswer,
    };

    // Update the answers array
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answerObject;

    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) =>
      Math.min(prev + 1, subjectiveQuestions.length - 1)
    );
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'https://biochase-backend-xeqq.vercel.app/api/v1/response',
        {
          answers,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Ensure you have the JWT token stored in local storage
          },
        }
      );
      console.log('Response from server:', response.data);
      alert('Quiz submitted successfully!');
    } catch (error) {
      console.error('Error submitting answers:', error);
      alert('There was an error submitting your answers. Please try again.');
    }
  };

  return (
    <div className='min-h-[50hv] flex flex-col'>
      {/* Header */}
      <header className='bg-gray-800 text-white py-4 px-6 flex justify-between items-center'>
        <h1 className='text-xl font-semibold'>Subjective Quiz</h1>
        <CountdownTimer
          handleSubmit={handleSubmit}
          targetTime='2024-09-28T12:39:00'
        />
      </header>
      <div className='min-h-[50hv] flex'>
        {/* Sidebar */}
        <aside className='min-h-[50hv] w-1/4 bg-gray-100 p-6 border-r border-gray-300'>
          <h2 className='text-xl font-bold mb-4'>Questions</h2>
          <ul>
            {subjectiveQuestions.map((_, index) => (
              <li
                key={index}
                className={`mb-2 p-2 cursor-pointer rounded-lg ${
                  currentQuestionIndex === index
                    ? 'bg-[#04091b] text-white'
                    : 'bg-white border border-gray-300 hover:bg-gray-200'
                }`}
                onClick={() => handleQuestionClick(index)}
              >
                Question {index + 1}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <div className='min-h-[50hv] w-3/4 flex-grow p-6 bg-gray-50'>
          <div className='max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg'>
            {/* Question */}
            <h2 className='text-2xl font-bold mb-4'>
              Question {currentQuestionIndex + 1}:
            </h2>
            <p className='text-lg mb-6'>{currentQuestion.question}</p>

            {/* Textarea for Answer */}
            <textarea
              className='w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04091b] mb-6'
              rows='6'
              value={
                answers[currentQuestionIndex]
                  ? answers[currentQuestionIndex].answer
                  : ''
              }
              onChange={handleAnswerChange}
              placeholder='Write your answer here...'
            />

            {/* Navigation Buttons */}
            <div className='flex justify-between'>
              <button
                onClick={handlePreviousQuestion}
                className={`bg-gray-600 text-white px-4 py-2 rounded ${
                  currentQuestionIndex === 0
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-gray-700'
                }`}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              {currentQuestionIndex < subjectiveQuestions.length - 1 ? (
                <button
                  onClick={handleNextQuestion}
                  className='bg-[#04091b] text-white px-4 py-2 rounded hover:bg-[#04091b]'
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700'
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelPage;
