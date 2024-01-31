import React, { useEffect, useRef } from 'react';
import './rules.css'; // Import the CSS file
import './more.css'
import logo3 from './images/sitting-reading.svg'

import {Link} from 'react-router-dom'

const ProfileComponent = () => {
  const animationElementsRef = useRef([]);

  useEffect(() => {
    const checkIfInView = () => {
      const windowHeight = window.innerHeight;
      const windowTopPosition = window.scrollY;
      const windowBottomPosition = windowTopPosition + windowHeight;

      animationElementsRef.current.forEach((element) => {
        const elementHeight = element.offsetHeight;
        const elementTopPosition = element.offsetTop;
        const elementBottomPosition = elementTopPosition + elementHeight;

        if (
          elementBottomPosition >= windowTopPosition &&
          elementTopPosition <= windowBottomPosition
        ) {
          element.classList.add('hasSlid');
        } else {
          element.classList.remove('hasSlid');
        }
      });
    };

    // Attach the event listeners
    window.addEventListener('scroll', checkIfInView);
    window.addEventListener('resize', checkIfInView);

    // Initial check
    checkIfInView();

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', checkIfInView);
      window.removeEventListener('resize', checkIfInView);
    };
  }, []);

  return (
    <section className="module content">
      <div className="container padding-enlarge">
        <div className="slide" ref={(el) => animationElementsRef.current.push(el)}>
        <section className='rules'>
            <div className='rulesrr'>
            <div className='ruleshead'>Master the Rlues and Navigate the Regulations</div>
        
       <div className='rulesbutton'>
      <Link to='/rules&regulations' style={{ textDecoration: 'none',color: '#fff'  }}>
      <button className="btnrr">
Rules & Regulations
</button> </Link> 
       </div>
       </div>
       <div className='rulesll'><img src={logo3} className="logo3 " alt="logo" /></div>
        </section>
        </div>
        
      </div>
    </section>
  );
};

export default ProfileComponent;
