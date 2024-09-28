import React, { useState, useEffect } from 'react';

const UnstopContestPage = () => {
  const [questions, setQuestions] = useState([]); // Store questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track current question
  const [answer, setAnswer] = useState(''); // Store answer for the current question
  const [quizLive, setQuizLive] = useState(false); // Track if the quiz is live
  const [quizStarted, setQuizStarted] = useState(false); // Track if quiz has started
  const [team, setTeam] = useState('Team A'); // Example team name
  const [levelReached, setLevelReached] = useState(1); // Level reached by the team

  useEffect(() => {
    // Simulate fetching questions and quiz status
    const fetchQuestions = () => {
      const sampleQuestions = [
        { id: 1, question: 'What is the capital of France?' },
        { id: 2, question: 'Explain the theory of relativity.' },
        { id: 3, question: "What are Newton's laws of motion?" },
      ];
      setQuestions(sampleQuestions);
      setQuizLive(true); // Assume the quiz is live
    };

    fetchQuestions();
  }, []);

  // Handle starting the quiz
  const startQuiz = () => {
    if (quizLive) {
      setQuizStarted(true);
    } else {
      alert('Quiz is not live yet!');
    }
  };

  // Handle submitting the answer for the current question
  const submitAnswer = () => {
    alert(`Answer for Question ${currentQuestionIndex + 1}: ${answer}`);
    setAnswer(''); // Clear the answer after submission
  };

  return (
    <div className='min-h-[50hv] flex flex-col'>
      {/* Header */}
      <header className='bg-gray-800 text-white py-4 px-6 flex justify-between items-center'>
        <h1 className='text-xl font-semibold'>Subjective Quiz</h1>
        <div className='text-lg'>
          Time Remaining: <span className='font-bold'>30:00</span>
        </div>
      </header>
      <div className='flex min-h-screen bg-gray-100'>
        {/* Sidebar for question navigation */}
        <div className='w-1/4 bg-white shadow-lg'>
          <div className='p-4'>
            <h2 className='text-xl font-semibold mb-4'>Navigate Questions</h2>
            <ul>
              {questions.map((question, index) => (
                <li
                  key={question.id}
                  className={`p-2 cursor-pointer ${
                    currentQuestionIndex === index
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200'
                  }`}
                  onClick={() => setCurrentQuestionIndex(index)}
                >
                  Question {index + 1}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main content area */}
        <div className='flex-1 p-8'>
          <header className='flex justify-between items-center mb-8'>
            <div>
              <h1 className='text-3xl font-bold'>{team}</h1>
              <p>Level Reached: {levelReached}</p>
            </div>
            {!quizStarted ? (
              <button
                className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'
                onClick={startQuiz}
              >
                {quizLive ? 'Start Quiz' : 'Quiz Not Live'}
              </button>
            ) : (
              <p className='text-xl text-green-600'>Quiz is live</p>
            )}
          </header>

          {/* Question and Answer Section */}
          {quizStarted && questions.length > 0 ? (
            <div className='bg-white p-6 rounded shadow-md'>
              <h2 className='text-2xl font-semibold mb-4'>
                Question {currentQuestionIndex + 1}
              </h2>
              <p className='text-lg mb-6'>
                {questions[currentQuestionIndex].question}
              </p>
              <textarea
                className='w-full p-2 border border-gray-300 rounded mb-4'
                rows='5'
                placeholder='Enter your answer here...'
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
              <button
                className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
                onClick={submitAnswer}
              >
                Submit Answer
              </button>
            </div>
          ) : (
            <p className='text-gray-600'>
              Start the quiz to view the questions.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UnstopContestPage;
