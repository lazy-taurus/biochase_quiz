import React from 'react';
import './prizemobile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAward ,faTrophy,faShieldHalved,faGift} from '@fortawesome/free-solid-svg-icons'

const ResultsSummaryContainer = () => {
  return (
    <div className='mobile_prize'>   <div className="results-summary-container">
      <div className="results-summary-container__result">
        <div className="heading-tertiary">Winner</div>
        <div className="result-box">
        <FontAwesomeIcon icon={faTrophy} />
      
        </div>
        <div className="result-text-box">
          
          <ul className="paragraph">
          <li> Compound Microscope for each participant of the team</li>
              <li>Winners Trophy for the School</li> 
              <li>Prestigious Badge of Best School in Biology Education</li>
              <li>90% scholarship in Biology training for IBB and NSEB</li>
              <li>Cash Prize of Rs. 6000</li>
          </ul>
        </div>
        
      </div>
      
    </div>
    <div className="results-summary-container">
      <div className="results-summary-container__result">
        <div className="heading-tertiary">Runner's Up</div>
        <div className="result-box">
        <FontAwesomeIcon icon={faAward} />
        </div>
        <div className="result-text-box">
         
        <ul className="paragraph">
        <li> Cash Prize of Rs. 3000</li>
              <li>Runner's Up Trophy
</li> 
              <li> Badge of 2nd Best School Award</li>
              <li>50% scholarship in Biology training for IBB and NSEB

</li>          </ul>
        </div>
       
      </div>
      
    </div>
    <div className="results-summary-container">
      <div className="results-summary-container__result">
        <div className="heading-tertiary">Second Runner's Up</div>
        <div className="result-box">
        <FontAwesomeIcon icon={faShieldHalved} />
        </div>
        <div className="result-text-box">
          
          <ul className="paragraph">
          <li>Cash Prize of Rs. 2000</li>
 <li>2nd Runner's Up Trophy</li>
 <li>Badge of 3rd Best School Award</li> 
 <li> 25% scholarship in Biology training for IBB and NSEB</li>

          </ul>
        </div>
        
      </div>
      
    </div>
    <div className="results-summary-container">
      <div className="results-summary-container__result">
        <div className="heading-tertiary">Yes! There's more</div>
        <div className="result-box">
        <FontAwesomeIcon icon={faGift} />
        </div>
        <div className="result-text-box">
        
          <ul className="paragraph">
          <li>List of Top 10 Schools will be published.</li> 
<li> Certificate of excellence for the participants of top 5 teams and Schools.</li>
 <li>Certificate of Achievement for the participants of the next 10 teams and Schools.</li>
<li>Certificate of Participation for the participants of all teams and Schools.</li> 

          </ul>
        </div>
        
      </div>
      
    </div>
    </div>
 
  );
};

export default ResultsSummaryContainer;
