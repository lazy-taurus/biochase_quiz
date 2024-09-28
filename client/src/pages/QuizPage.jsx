import React, { useState } from 'react';

// Example test submissions
const testSubmissions = [
  {
    question: 'Explain the process of photosynthesis in detail.',
    answer:
      'Photosynthesis is the process by which green plants convert sunlight into energy...',
  },
  {
    question:
      "Describe Newton's three laws of motion with real-world examples.",
    answer:
      'First law: An object at rest stays at rest unless acted upon by a force...',
  },
  {
    question: 'What is the impact of climate change on polar ice caps?',
    answer:
      'Climate change has resulted in the melting of polar ice caps, leading to rising sea levels...',
  },
  {
    question: 'Discuss the role of technology in modern education.',
    answer:
      'Technology has revolutionized modern education by providing online learning platforms...',
  },
];

const QuizPage = () => {
  const [marks, setMarks] = useState({});
  const [totalMarks, setTotalMarks] = useState(0);

  // Handle marks input for each question
  const handleMarksChange = (index, event) => {
    const newMarks = Number(event.target.value);
    const updatedMarks = {
      ...marks,
      [index]: newMarks,
    };
    setMarks(updatedMarks);

    // Calculate total marks
    const total = Object.values(updatedMarks).reduce(
      (acc, curr) => acc + (curr || 0),
      0
    );
    setTotalMarks(total);
  };

  const handleSubmit = () => {
    console.log('Marks given:', marks);
    alert('Marks have been submitted successfully.');
  };

  return (
    <div className='min-h-screen flex flex-col'>
      {/* Header */}
      <header className='bg-gray-800 text-white py-4 px-6 flex justify-between items-center'>
        <h1 className='text-xl font-semibold'>Candidate Submissions</h1>
        <div className='text-lg'>
          Candidate: <span className='font-bold'>John Doe</span>
        </div>
      </header>

      {/* Main Content */}
      <div className='flex-grow p-6 bg-gray-100'>
        <div className='max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg'>
          {testSubmissions.map((submission, index) => (
            <div key={index} className='mb-8'>
              <h2 className='text-xl font-bold mb-2'>Question {index + 1}:</h2>
              <p className='mb-4'>{submission.question}</p>
              <h3 className='text-lg font-semibold mb-2'>Answer:</h3>
              <p className='mb-4 bg-gray-50 p-4 border border-gray-200 rounded-lg'>
                {submission.answer}
              </p>

              {/* Marks input */}
              <div className='flex items-center mb-4'>
                <label
                  htmlFor={`marks-${index}`}
                  className='text-lg font-semibold mr-4'
                >
                  Marks (out of 10):
                </label>
                <input
                  type='number'
                  id={`marks-${index}`}
                  value={marks[index] || ''}
                  onChange={(event) => handleMarksChange(index, event)}
                  className='p-2 border border-gray-300 rounded-lg w-20'
                  min='0'
                  max='10'
                />
              </div>
              <hr className='mb-6' />
            </div>
          ))}

          <div className='flex py-5 text-xl flex-row justify-between'>
            {/* Total Marks */}
            <div className=' font-semibold mb-4'>
              Total Marks: <span className='font-bold'>{totalMarks}</span>
            </div>

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700'
            >
              Submit Marks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
