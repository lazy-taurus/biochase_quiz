import React from 'react'
import Typewriter from 'typewriter-effect';
import logo1 from '../images/roller-skating.svg'
import logo2 from '../images/chilling.svg'
import {Link} from 'react-router-dom'


import './welcome.css'
function Welcomepage() {
    // const navigate=useNavigation();
  
    return (
      <div >
        <ul className="circles">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <img src={logo2} className="logo2" alt="logo" />
        <section className='main_section'>
        
        
        <Typewriter
     
  options={{
    strings: ['GET READY TO CONQUER!'],
    autoStart: true,
    loop: true,
    pauseFor:1000,
    delay:50,
    deleteSpeed	:50,
  }} 
/>

      <div className='main_section_text'> Unleash your inner knowledge master with our thrilling quiz adventure.</div>

        </section>
       

  <section className='main_section2'>
  
      <div className="button-icon">
  <div className="icon">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.787 7.531c-5.107 2.785-12.72 9.177-15.787 15.469h2.939c.819-2.021 2.522-4.536 3.851-5.902 8.386 3.747 17.21-2.775 17.21-11.343 0-1.535-.302-3.136-.92-4.755-2.347 3.119-5.647 1.052-10.851 1.625-7.657.844-11.162 6.797-8.764 11.54 3.506-3.415 9.523-6.38 12.322-6.634z"/></svg>
  </div>
  <div className="cube">
    <span className="side front">Click Here</span>
    <span className="side top "><Link to="/home" style={{ textDecoration: 'none',color: '#fff'  }}>Lets Go !</Link></span>
  </div>
</div>

</section> 
<img src={logo1} className="logo1" alt="logo" />

        </div>
    )
  }

export default Welcomepage;