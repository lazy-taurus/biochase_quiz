import React from 'react';

const Question = () => {
  return (
    <div className='max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-200'>
      {/* Question Title */}
      <div className='mb-6'>
        <h3 className='text-lg font-semibold text-gray-700'>
          Untitled Question
        </h3>
      </div>

      {/* Short Answer Placeholder */}
      <div>
        <input
          type='text'
          className='w-full border-b border-gray-400 focus:outline-none focus:border-blue-600 text-sm pb-1'
          placeholder='Short answer text'
        />
      </div>
    </div>
  );
};

export default Question;
