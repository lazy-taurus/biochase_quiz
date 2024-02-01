// MenuButton.js
import React from 'react';
import './main.css'; // Import your CSS file

import Slider from './slider/slider';
import Typewriter from 'typewriter-effect';
import Know from './main2';
import Footer from './footer/footer';
import Login from './login/login'
import Rule from './rules'
import Register from './registration'

const MenuButton = () => {
 

  return (
    <div>
    <Login/>
    
    <section className='welcome_text'>   
    <Typewriter
  options={{
    strings: ['WELCOME TO THE “Bio-Chase 1.0”','DIVE INTO THE REALM OF CURIOSITY' ],
    autoStart: true,
    loop: true,
    pauseFor:1500,
    delay:70,
    deleteSpeed	:20,
  }}
/>
</section>
<Slider/>

<Know />


<Rule/>
<Register/>

<Footer/>
    </div>
  );
};

export default MenuButton;
