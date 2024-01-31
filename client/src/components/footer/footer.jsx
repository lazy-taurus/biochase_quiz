import React from 'react';
import './footer.css'; // Import your CSS file if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram ,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,faGlobe } from '@fortawesome/free-solid-svg-icons'




const Footer = () => {
  return (
    <footer id="contact">
      <section className='article'>
      The event is not just a competition; it's a celebration of knowledge and a testament to the diversity of learning environments across schools in Tripura.
<div className='atb'>All the Best</div>
  
   
  
  </section>
      <ul className='ul'>
        <div id="icon-container">
          <a href="#">
            <div className="iconbrand">
            <FontAwesomeIcon icon={faInstagram} />
            </div>
          </a>
          <a href="#">
            <div className="iconbrand">
            <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </a>
          <a href="#">
            <div className="iconbrand">
            <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </a>
          <a href="#">
            <div className="iconbrand">
            <FontAwesomeIcon icon={faGlobe} />
            </div>
          </a>
         
        </div>
      </ul>
      <p className='p'>&copy; 2024, *Bio-Chase 1.0*</p>
    </footer>
  );
};

export default Footer;
