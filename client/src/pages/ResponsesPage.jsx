import React from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

// Example data for candidates who have submitted their responses
const candidates = [
  { id: 1, marks: 10, name: 'John Doe', submissionTime: '2024-09-25 14:32' },
  { id: 2, marks: 10, name: 'Jane Smith', submissionTime: '2024-09-25 15:05' },
  {
    id: 3,
    marks: -1,
    name: 'Mark Johnson',
    submissionTime: '2024-09-25 15:30',
  },
  { id: 4, marks: 10, name: 'Lucy Brown', submissionTime: '2024-09-25 16:10' },
];

const ResponsesPage = () => {
  //   const history = useHistory();

  // Function to view a specific candidate's responses
  const viewResponses = (id) => {
    // This will navigate to the submissions page for that candidate
    // You can pass the candidate ID via the URL or state
    // history.push(`/submissions/${id}`);
  };

  return (
    <div className='min-h-[50vh] flex flex-col'>
      {/* Header */}
      <header className='bg-gray-800 text-white py-4 px-6 flex justify-between items-center'>
        <h1 className='text-xl font-semibold'>Test Submissions</h1>
        <div className='text-lg'>
          Test: <span className='font-bold'>Aptitude Test</span>
        </div>
      </header>

      {/* Main Content */}
      <div className='flex-grow p-6 bg-gray-100'>
        <div className='max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-bold mb-6'>Candidates Who Submitted</h2>
          {/* Candidates Table */}
          <table className='w-full border-collapse'>
            <thead>
              <tr>
                <th className='border-b-2 border-gray-300 p-4 text-left'>
                  Name
                </th>
                <th className='border-b-2 border-gray-300 p-4 text-left'>
                  Submission Time
                </th>
                <th className='border-b-2 border-gray-300 p-4 text-left'>
                  Marks
                </th>
                <th className='border-b-2 border-gray-300 p-4 text-left'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate) => (
                <tr key={candidate.id} className='hover:bg-gray-100'>
                  <td className='border-b border-gray-300 p-4'>
                    {candidate.name}
                  </td>
                  <td className='border-b border-gray-300 p-4'>
                    {candidate.submissionTime}
                  </td>
                  <td className='border-b border-gray-300 p-4'>
                    {candidate.marks >= 0 ? candidate.marks : 'not marked'}
                  </td>
                  <td className='border-b border-gray-300 p-4'>
                    <Link to='/quiz'>
                      <button
                        //   onClick={() => viewResponses(candidate.id)}
                        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
                      >
                        View Responses
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResponsesPage;
