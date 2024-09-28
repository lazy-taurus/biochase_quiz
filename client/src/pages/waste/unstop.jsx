import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Timeline = () => {
  const [live, setLive] = useState(true);
  const [verified, setVerified] = useState(true);
  const stages = [
    {
      date: '28 Sep 24',
      title: 'Online Quiz',
      description:
        "Registered teams will participate in an online quiz featuring critical thinking questions. The final score will be averaged from the participating members' scores, and the quiz must be completed within an 8-hour window.",
      start: '28 Sep 24, 12:00 PM IST',
      end: '28 Sep 24, 08:00 PM IST',
      buttonText: 'Guidelines',
    },
    {
      date: '27 Sep 24',
      title: 'Executive Summary Submission Round',
      description:
        'Shortlisted teams must submit a 2-page executive summary PPT by 6:00 AM IST on October 7, 2024. Teams can edit their submissions before the deadline, and early uploads are encouraged.',
      start: '27 Sep 24, 05:00 PM IST',
      end: '06 Oct 24, 06:00 AM IST',
      buttonText: 'Download Brief',
    },
    {
      date: '13 Oct 24',
      title: 'Elaborate Executive Virtual Presentation Round',
      description:
        'Shortlisted teams must prepare a detailed PPT (up to 10 slides). Eight teams will advance to the Grand Finale at Luminous HQ and receive mentorship. Relevant details will be emailed to the shortlisted teams.',
      start: '13 Oct 24, 12:00 PM IST',
      end: '13 Oct 24, 04:00 PM IST',
      buttonText: 'View Details',
    },
  ];

  return (
    <div className='max-w-4xl mx-auto px-4 py-6'>
      <h1 className='text-2xl font-bold mb-6'>Stages and Timelines</h1>
      <div className='border-l-4 border-[#04091b]'>
        {stages.map((stage, index) => (
          <div key={index} className='mb-8 pl-6 relative'>
            <div className='absolute -left-5 top-0 h-4 w-4 bg-[#04091b] rounded-full'></div>
            <div className='flex justify-between items-center'>
              <div className='text-lg font-semibold mb-2'>{stage.date}</div>
              {live && verified ? (
                <Link to={'/level'}>
                  <button className='bg-[#04091b] text-white py-1 px-4 rounded hover:bg-[#04090a]'>
                    Play
                  </button>
                </Link>
              ) : live && !verified ? (
                <button
                  disabled
                  className='bg-[#04091b] text-white py-1 px-4 rounded hover:bg-[#04090a]'
                >
                  Not Eligible
                </button>
              ) : (
                <button
                  disabled
                  className='bg-[#04091b] text-white py-1 px-4 rounded hover:bg-[#04090a]'
                >
                  Yet to start
                </button>
              )}
            </div>
            <div className='bg-white shadow-lg rounded-lg p-4 mb-4'>
              <h2 className='text-xl font-bold'>{stage.title}</h2>
              <p className='text-gray-700 mt-2'>{stage.description}</p>
              <div className='mt-4 text-sm'>
                <p>
                  <strong>Start:</strong> {stage.start}
                </p>
                <p>
                  <strong>End:</strong> {stage.end}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
