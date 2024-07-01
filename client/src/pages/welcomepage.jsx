import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import './welcome.css';
import Header from '../components/header';

function Welcomepage() {
  // const navigate=useNavigation();

  return (
    <div className='h-[100vh] w-full top-0 right-0  fixed overflow-hidden herobg p-0'>
      <Header />
      <main className=' flex justify-center w-full gap-5 m-0'>
        <section className='flex flex-col h-[90vh] justify-center gap-5 left md:w-[40%] w-full md:p-0 px-16 text-[#070F2B]'>
          {/* <h3 className='text-xs border-white'>GET READY TO CONQUER!</h3> */}
          <h1 className='flex flex-col font-bold sm:text-5xl text-3xl  '>
            <span className=' text-nowrap'>Bio-Chase 1.0:</span>
            <span>Inter School Biology Quiz</span>
          </h1>
          <h5 className=' font-thin text-md tracking-wider'>
            "Discover the Secrets of Biology: Empowering Young Minds, One
            Question at a Time!"
          </h5>
          <Stack spacing={2} direction='row'>
            <Button
              variant='contained'
              style={{
                backgroundColor: '#04091b',
                padding: '15px 40px',
                fontWeight: 'bolder',
                color: 'white',
              }}
            >
              Register
            </Button>
            <Button
              variant='outlined'
              style={{
                color: '#04091b',
                borderColor: '#04091b',
                padding: '15px 40px',
                fontWeight: 'bolder',
              }}
              className=' font-bold'
            >
              Details
            </Button>
          </Stack>
        </section>
        <section className='flex flex-col h-[90vh] justify-center right md:w-[40%] w-0 object-contain'>
          <img src='img/heart.png' className='h-3/4 object-contain' />
          {/* <img
          src='img/micro.png'
          className='h-1/4 object-contain absolute top-5 right-5'
          alt=''
        /> */}
          {/* <img
            src='img/dna.png'
            className=' lg:h-20 h-0 object-contain absolute top-20 right-30 rotate-12'
            alt=''
          />
          <img
            src='img/dna.png'
            className='lg:h-20 h-0 object-contain absolute top-50 right-20 -rotate-90'
            alt=''
          />
          <img
            src='img/dna.png'
            className='lg:h-20 h-0 object-contain absolute bottom-20 right-90 '
            alt=''
          /> */}
        </section>
      </main>
    </div>
  );
}

export default Welcomepage;
