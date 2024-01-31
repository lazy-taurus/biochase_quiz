import React, { useState } from 'react';
import './main2.css';
import Prize from './prize/prize';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAward ,faTrophy,faShieldHalved,faGift} from '@fortawesome/free-solid-svg-icons'
import Prize2 from './prize/prizemobile';
const Know = () => {
  const [showPrize, setShowPrize] = useState(false);
  const [showPrizee, setShowPrizee] = useState(false);
  const togglePrize = () => {
    setShowPrize(!showPrize);
  };
  const togglePrizee = () => {
    setShowPrizee(!showPrizee);
  };

  const imageStyle = {
    transform: showPrize ? 'translateY(40%) scale(1.3)' : 'translateY(0) scale(1)',
   
    opacity: showPrize ? '1' : '0',
  };

  return (
    <div className='prize1'>
    
      <div className='mobile-button'>
      <div className='event-button'>
        <button className="Btn" onClick={togglePrizee}>
          Prize Pool
        </button>
      </div>
      

      <div className={`event-button2 ${showPrizee ? 'show' : 'hide'}`}>
        <Prize2 />
      </div>
      </div>
      <div className='desktop-button'>
        <div className='winner winner1'>
      <FontAwesomeIcon icon={faTrophy} style={imageStyle} />
      </div>
      <div className='winner winner2'>
      <FontAwesomeIcon icon={faAward}  style={imageStyle} />
      </div>
      <div className='winner winner3'>
      <FontAwesomeIcon icon={faShieldHalved} style={imageStyle} />
      </div>
      <div className='winner winner4'>
      <FontAwesomeIcon icon={faGift} style={imageStyle} />
      </div>
      <div className='event-button'>
        <button className="Btn" onClick={togglePrize}>
          Prize Pool
        </button>
      </div>
    

      <div className={`event-button2 ${showPrize ? 'show' : 'hide'}`}>
        <Prize />
      </div>
      </div>
    </div>
  );
};

export default Know;
