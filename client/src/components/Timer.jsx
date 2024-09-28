import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CountdownTimer = ({ handleSubmit, targetTime }) => {
  const navigate = useNavigate();

  const calculateTimeRemaining = () => {
    const now = new Date();
    const target = new Date(targetTime);
    const difference = target - now;

    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { minutes, seconds, difference };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      const { minutes, seconds, difference } = calculateTimeRemaining();
      setTimeRemaining({ minutes, seconds });

      if (difference <= 0) {
        handleSubmit();
        clearInterval(timer);
        navigate('/timeline'); // Redirect to '/timeline' when time reaches zero
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [targetTime, navigate]);

  const { minutes, seconds } = timeRemaining;

  return (
    <div className='text-lg'>
      Time Remaining:
      <span className='font-bold'>
        {minutes.toString().padStart(2, '0')}m{' '}
        {seconds.toString().padStart(2, '0')}s
      </span>
    </div>
  );
};

export default CountdownTimer;
