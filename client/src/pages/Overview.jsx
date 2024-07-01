import React from 'react';
import Rule from '../components/rule';
import { Button, Divider } from '@mui/material';
import './welcome.css';
import { Link } from 'react-router-dom';

const Overview = () => {
  return (
    <div className=' max-w-4xl p-10 text-[#070F2B] bg-white shadow-xl mx-auto'>
      <div className='head flex flex-col gap-3 items-center my-5'>
        <h1 className='ques flex items-center gap-2 text-3xl mb-3 font-bold flex-wrap'>
          <span className='text-[#535C91] mx-auto text-center'>
            WELCOME TO THE
          </span>
          <span className='text-[#070F2B] mx-auto text-center'>
            {' '}
            “Bio-Chase 1.0”
          </span>
        </h1>
      </div>
      <h1 className='ques px-5 text-3xl text-center md:text-left mb-3 font-bold'>
        Exciting Prizes:
      </h1>
      <Divider />
      <div className='prize flex flex-col my-5 gap-5'>
        <div className='card flex w-[80%] shadow-xl justify-evenly rounded-xl p-5 cardbg h-60 mx-auto bg'>
          <div className='w-1/2 hidden md:flex justify-evenly'>
            <img src='img/first.png' className='h-full object-contain' alt='' />
          </div>
          <div className='info flex flex-col justify-evenly'>
            <div className='w-full h-16 flex gap-3 justify-evenly'>
              <h1 className='ques text-3xl font-bold'>Winner</h1>
              <img
                src='img/trophy.png'
                className='h-full object-contain'
                alt=''
              />
            </div>
            <Divider />
            <ul className='ques text-xs font-semibold gap-1'>
              <li>
                &#8226; Compound Microscope for each participant of the team
              </li>
              <li>&#8226; Winners Trophy for the School</li>
              <li>
                &#8226; Prestigious Badge of Best School in Biology Education
              </li>
              <li>
                &#8226; 90% scholarship in Biology training for IBB and NSEB
              </li>
              <li>&#8226; Cash Prize of Rs. 6000</li>
            </ul>
          </div>
        </div>
        <div className='card flex flex-row flex-wrap justify-evenly'>
          <div className='card flex flex-col justify-evenly p-5 w-4/5 md:w-[40%] shadow-xl cardbg rounded-xl h-60'>
            <div className='w-full h-16 flex gap-3 justify-evenly'>
              <img
                src='img/second.png'
                className='h-full object-contain'
                alt=''
              />
              <h1 className='ques text-xl font-bold'>
                FIRST &nbsp; RUNNER'S UP{' '}
              </h1>
            </div>
            <Divider />
            <ul className='ques text-xs font-semibold gap-1'>
              <li>&#8226; Cash Prize of Rs. 3000</li>
              <li>&#8226; Runner's Up Trophy</li>
              <li>&#8226; Badge of 2nd Best School Award</li>
              <li>
                &#8226; 50% scholarship in Biology training for IBB and NSEB
              </li>
            </ul>
          </div>
          <div className='card flex flex-col justify-evenly p-5 w-4/5 md:w-[40%] shadow-xl cardbg rounded-xl h-60'>
            <div className='w-full h-16 flex gap-3 justify-evenly'>
              <img
                src='img/third.png'
                className='h-full object-contain'
                alt=''
              />
              <h1 className='ques text-xl font-bold'>SECOND RUNNER'S UP</h1>
            </div>
            <Divider />
            <ul className='ques text-xs font-semibold gap-1'>
              <li>&#8226; Cash Prize of Rs. 2000</li>
              <li>&#8226; 2nd Runner's Up Trophy</li>
              <li>&#8226; Badge of 3rd Best School Award</li>
              <li>
                &#8226; 25% scholarship in Biology training for IBB and NSEB
              </li>
            </ul>
          </div>
        </div>
        <div className='card flex w-[80%] shadow-xl justify-evenly rounded-xl p-5 cardbg gap-2 h-60 mx-auto bg'>
          <div className='w-1/2 hidden md:flex justify-evenly'>
            <img src='img/more.png' className='h-full object-contain' alt='' />
          </div>
          <div className='info flex flex-col justify-evenly'>
            <h1 className='ques text-xl md:text-3xl font-bold'>
              YES! THERE'S MORE
            </h1>
            <Divider />
            <ul className='ques text-xs font-semibold gap-1'>
              <li>&#8226; List of Top 10 Schools will be published.</li>
              <li>
                &#8226; Certificate of excellence for the participants of top 5
                teams and Schools.
              </li>
              <li>
                &#8226; Certificate of Achievement for the participants of the
                next 10 teams and Schools.
              </li>
              <li>
                &#8226; Certificate of Participation for the participants of all
                teams and Schools.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 w-3/4 mx-auto my-16'>
        <h1 className='ques text-2xl font-semibold flex gap-2 mx-auto my-5 flex-wrap'>
          Join Us Today and Stay Informed: Read Our <Rule /> and Register Now!
        </h1>
        <Link to='/register' className='w-4/5 md:w-1/2'>
          <Button
            variant='contained'
            style={{
              backgroundColor: '#04091b',
              padding: '20px 10px',
              width: '100%',
              fontWeight: 'bolder',
              fontSize: 'large',
              color: 'white',
              borderRadius: '1rem',
            }}
          >
            Register
          </Button>
        </Link>
      </div>
      <h1 className='ques text-3xl mb-3 text-center font-bold text-[#535C91]'>
        DIVE INTO THE REALM OF CURIOSITY
      </h1>
    </div>
  );
};

export default Overview;
