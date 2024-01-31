import React, { Component } from 'react'
import './more.css'
import logo3 from './images/sitting-reading.svg'
import logo4 from './images/dancing.svg'
export default class more extends Component {
  render() {
    
    return (
      <div>
        <section className='rules'>
            <div className='rulesrr'>
            <div className='ruleshead'>Master the Rlues and Navigate the Regulations</div>
        
       <div className='rulesbutton'>
       <button className="btnrr">
Rules & Regulations
</button>
       </div>
       </div>
       <div className='rulesll'><img src={logo3} className="logo3 " alt="logo" /></div>
        </section>
        <section className='rules'>
        <div className='rulesll'><img src={logo4} className="logo3 " alt="logo" /></div>
            <div className='rulesrr rulesrr2'>
            <div className='ruleshead'>Register now and embark on a journey of discovery and triumph.</div>
        
       <div className='rulesbutton'>
       <button className="btnrr btnrr1">
Register
</button>
       </div>
       </div>
       
        </section>
        

      </div>
    )
  }
}
