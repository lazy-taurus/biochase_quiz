
import './prize.css'; // Import your CSS file

import React from 'react';

const TimelineComponent = () => {
  return (
    <div className="timeline">
      
       
      <div className="outer">
     
        <div className="card1">
          <div className="infodesk">
            <h2 className="titledesk">Winner
</h2>
            <ul className='prize-list'>
              <li> Compound Microscope for each participant of the team</li>
              <li>Winners Trophy for the School</li> 
              <li>Prestigious Badge of Best School in Biology Education</li>
              <li>90% scholarship in Biology training for IBB and NSEB</li>
              <li>Cash Prize of Rs. 6000</li>
              </ul>
          </div>
        </div>
        <div className="card1">
          <div className="infodesk">
            <h2 className="titledesk">Runner's Up 


</h2>
<ul className='prize-list'>
              <li> Cash Prize of Rs. 3000</li>
              <li>Runner's Up Trophy
</li> 
              <li> Badge of 2nd Best School Award</li>
              <li>50% scholarship in Biology training for IBB and NSEB

</li>
             
              </ul>
          </div>
        </div>
        <div className="card1">
          <div className="infodesk">
            <h2 className="titledesk">Second Runner's Up 
</h2>
<ul className='prize-list'>
 <li>Cash Prize of Rs. 2000</li>
 <li>2nd Runner's Up Trophy</li>
 <li>Badge of 3rd Best School Award</li> 
 <li> 25% scholarship in Biology training for IBB and NSEB</li>


              </ul>  </div>
        </div>
        
        <div className="card1">
          <div className="infodesk">
            <h2 className="titledesk">Yes! There's more
</h2>
<ul className='prize-list'>
<li>List of Top 10 Schools will be published.</li> 
<li> Certificate of excellence for the participants of top 5 teams and Schools.</li>
 <li>Certificate of Achievement for the participants of the next 10 teams and Schools.</li>
<li>Certificate of Participation for the participants of all teams and Schools.</li> 


              </ul> </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;
