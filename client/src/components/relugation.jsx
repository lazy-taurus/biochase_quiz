import React, { Component } from 'react'
import RnR1 from './rnr'
import './rules.css'
import Footer from './footer/footer'
import Back from './login/login2'
export default class rulesandregulation extends Component {
  render() {
    return (
      <div>
        <ul className="circles1">
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
       
        <Back/> <div className='rules-head'>Rules for the Inter School Biology Quizzing Event
      “Bio-Chase 1.0”
      </div>
      <div className='rules-subhead'>(Click on the boxes to familiarize yourself with the Rules and Regulations.)</div>
<RnR1
        question="Prestigious Title at Stake - 'The Best School of Tripura':"
        answer="The quizzing event is not just a competition; it's a quest for excellence. The winning school will be bestowed with the esteemed title of 'The Best School of Tripura in the field of Biology Education,' adding a layer of significance to the intellectual pursuit.

        "
      />
      <RnR1
        question="
        Diverse Team Composition Emphasizing Inclusivity:
        "
        answer="Teams will consist of six students each, ensuring representation from classes 7 to 12.

        ( Recognizing logistical constraints, if all specified classes aren't available, a minimum of four classes should be represented in a team, promoting flexibility and inclusivity. )
        
        "
      />
      <RnR1
        question="Ample Participation Encouraged:"
        answer="To enrich the competitive landscape, each school is encouraged to field a minimum of five teams, fostering a spirit of healthy competition among institutions.

        "
      />
        
      <RnR1
        question="Equitable Evaluation with Percentage Conversion:"
        answer="To address potential disparities in the number of participating teams from different schools, raw scores will be converted to percentages, ensuring a fair assessment across the board.

        "
      />
      <RnR1
        question="Individual Team Recognition:"
        answer="Teams will be evaluated individually, allowing for nuanced acknowledgment of each team's efforts and accomplishments, fostering a sense of achievement among participants.

        "
      />
      <RnR1
        question="Strategic Round-wise Cut-off Percentages:"
        answer="Each round will feature a minimum cut-off percentage, adding a strategic element to the competition.

       ( In cases where teams achieve a perfect score, the top-performing teams will progress to subsequent rounds, injecting an element of competition even within the highest-scoring teams.)
        
        "
      />
      <RnR1
        question="Excellence Rewarded - Prizes for the Pinnacle Performers:"
        answer="The team with the highest cumulative score will not only earn bragging rights but will also be rewarded with prizes, celebrating and encouraging excellence in biological knowledge.

        "
      />
      
       
      <RnR1 
        question="Special Provisions for Schools Without Classes 11 and 12:"
        answer="Acknowledging variations in school structures, schools without classes 11 and 12 will be given special consideration.

        ( These schools can nominate two additional students from any other class, ensuring that every institution, regardless of its grade structure, has an equal opportunity to participate.)
        
        " 
      />
       
       <ul className="circles1">
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
      <Footer/>
      
      

      </div>
    )
  }
}
