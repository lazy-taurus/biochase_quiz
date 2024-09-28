// import React from 'react';
// import Rule from '../components/rule';
// import { Button, Divider } from '@mui/material';
// import './welcome.css';
// import { Link } from 'react-router-dom';

// const Overview = () => {
//   const isLoggedIn = localStorage.getItem('token') !== null;
//   return (
//     <div className=' max-w-4xl p-10 text-[#070F2B] bg-white shadow-xl mx-auto'>
//       <div className='head flex flex-col gap-3 items-center my-5'>
//         <h1 className='ques flex items-center gap-2 text-3xl mb-3 font-bold flex-wrap'>
//           <span className='text-[#535C91] mx-auto text-center'>
//             WELCOME TO THE
//           </span>
//           <span className='text-[#070F2B] mx-auto text-center'>
//             {' '}
//             “Bio-Chase 1.0”
//           </span>
//         </h1>
//       </div>
//       <h1 className='ques px-5 text-3xl text-center md:text-left mb-3 font-bold'>
//         Exciting Prizes:
//       </h1>
//       <Divider />
//       <div className='prize flex flex-col my-5 gap-5'>
//         <div className='card flex w-[80%] shadow-xl justify-evenly rounded-xl p-5 cardbg h-60 mx-auto bg'>
//           <div className='w-1/3 hidden md:flex justify-evenly'>
//             <img src='img/first.png' className='h-full object-contain' alt='' />
//           </div>
//           <div className='info flex flex-col justify-evenly'>
//             <div className='w-full h-16 flex gap-3 justify-evenly'>
//               <h1 className='ques text-3xl font-bold'>Winner</h1>
//               <img
//                 src='img/trophy.png'
//                 className='h-full object-contain'
//                 alt=''
//               />
//             </div>
//             <Divider />
//             <ul className='ques text-xs font-semibold gap-1 list-disc ml-3'>
//               <li>Compound Microscope for each participant of the team</li>
//               <li>Winners Trophy for the School</li>
//               <li>Prestigious Badge of Best School in Biology Education</li>
//               <li>90% scholarship in Biology training for IBB and NSEB</li>
//               <li>Cash Prize of Rs. 6000</li>
//             </ul>
//           </div>
//         </div>
//         <div className='card flex flex-row flex-wrap justify-evenly'>
//           <div className='card flex flex-col justify-evenly p-5 w-4/5 md:w-[40%] shadow-xl cardbg rounded-xl h-60'>
//             <div className='w-full h-16 flex gap-3 justify-evenly'>
//               <img
//                 src='img/second.png'
//                 className='h-full object-contain'
//                 alt=''
//               />
//               <h1 className='ques text-xl font-bold'>
//                 &nbsp; FIRST RUNNER'S UP{' '}
//               </h1>
//             </div>
//             <Divider />
//             <ul className='ques text-xs font-semibold gap-1 list-disc ml-3'>
//               <li>Cash Prize of Rs. 3000</li>
//               <li>Runner's Up Trophy</li>
//               <li>Badge of 2nd Best School Award</li>
//               <li>50% scholarship in Biology training for IBB and NSEB</li>
//             </ul>
//           </div>
//           <div className='card flex flex-col justify-evenly p-5 w-4/5 md:w-[40%] shadow-xl cardbg rounded-xl h-60'>
//             <div className='w-full h-16 flex gap-3 justify-evenly'>
//               <img
//                 src='img/third.png'
//                 className='h-full object-contain'
//                 alt=''
//               />
//               <h1 className='ques text-xl font-bold'>SECOND RUNNER'S UP</h1>
//             </div>
//             <Divider />
//             <ul className='ques text-xs font-semibold gap-1 list-disc ml-3'>
//               <li>Cash Prize of Rs. 2000</li>
//               <li>2nd Runner's Up Trophy</li>
//               <li>Badge of 3rd Best School Award</li>
//               <li>25% scholarship in Biology training for IBB and NSEB</li>
//             </ul>
//           </div>
//         </div>
//         <div className='card flex w-[80%] shadow-xl justify-evenly rounded-xl p-5 cardbg gap-2 h-60 mx-auto bg'>
//           <div className='w-1/2 hidden md:flex justify-evenly'>
//             <img src='img/more.png' className='h-full object-contain' alt='' />
//           </div>
//           <div className='info flex flex-col justify-evenly'>
//             <h1 className='ques text-lg sm:text-xl md:text-3xl font-bold'>
//               YES! THERE'S MORE
//             </h1>
//             <Divider />
//             <ul className='ques text-xs font-semibold gap-1 list-disc ml-3'>
//               <li>List of Top 10 Schools will be published.</li>
//               <li>
//                 Certificate of excellence for the participants of top 5 teams
//                 and Schools.
//               </li>
//               <li>
//                 Certificate of Achievement for the participants of the next 10
//                 teams and Schools.
//               </li>
//               <li>
//                 Certificate of Participation for the participants of all teams
//                 and Schools.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className='flex flex-col items-center gap-1 w-3/4 mx-auto my-16'>
//         <h1 className='ques text-2xl font-semibold flex gap-2 justify-center items-center flex-col mx-auto my-5'>
//           <span>Join Us Today and Stay Informed</span>
//           <span className='flex flex-row flex-wrap gap-2 mx-auto my-5'>
//             Read Our <Rule /> and Register Now!
//           </span>
//         </h1>
//         {!isLoggedIn && (
//           <Link to='/register' className='w-4/5 md:w-1/2'>
//             <Button
//               variant='contained'
//               style={{
//                 backgroundColor: '#04091b',
//                 padding: '20px 10px',
//                 width: '100%',
//                 fontWeight: 'bolder',
//                 fontSize: 'large',
//                 color: 'white',
//                 borderRadius: '1rem',
//               }}
//             >
//               Register
//             </Button>
//           </Link>
//         )}
//       </div>
//       {/* <h1 className='ques text-3xl mb-3 text-center font-bold text-[#535C91]'>
//         DIVE INTO THE REALM OF CURIOSITY
//       </h1> */}
//     </div>
//   );
// };

// export default Overview;

import React from 'react';
import Rule from '../components/rule';
import { Button, Divider } from '@mui/material';
import './welcome.css';
import { Link } from 'react-router-dom';

const Overview = () => {
  const isLoggedIn = localStorage.getItem('token') !== null;

  return (
    <div className='max-w-5xl mx-auto p-6 bg-gray-50 shadow-xl rounded-lg'>
      {/* Header Section */}
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold text-gray-800 mb-4'>
          Welcome to the
        </h1>
        <h2 className='text-5xl font-bold text-blue-600'>“Bio-Chase 1.0”</h2>
      </div>

      {/* Prizes Section */}
      <h1 className='text-3xl font-semibold text-center mb-8'>
        Exciting Prizes
      </h1>
      <Divider />

      {/* Prizes Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
        {/* Winner Card */}
        <div className='bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition'>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-xl font-bold'>Winner</h2>
            <img src='img/trophy.png' className='h-10' alt='trophy' />
          </div>
          <Divider />
          <ul className='mt-4 text-sm text-gray-600'>
            <li className='mb-2'>Compound Microscope for each participant</li>
            <li className='mb-2'>Winners Trophy for the School</li>
            <li className='mb-2'>Badge of Best School in Biology Education</li>
            <li className='mb-2'>
              90% Scholarship in Biology training for IBB and NSEB
            </li>
            <li>Cash Prize of Rs. 6000</li>
          </ul>
        </div>

        {/* First Runner's Up Card */}
        <div className='bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition'>
          <div className='flex items-center justify-between mb-4'>
            <img src='img/second.png' className='h-10' alt='second-place' />
            <h2 className='text-xl font-bold'>First Runner's Up</h2>
          </div>
          <Divider />
          <ul className='mt-4 text-sm text-gray-600'>
            <li className='mb-2'>Cash Prize of Rs. 3000</li>
            <li className='mb-2'>Runner's Up Trophy</li>
            <li className='mb-2'>Badge of 2nd Best School Award</li>
            <li>50% Scholarship in Biology training for IBB and NSEB</li>
          </ul>
        </div>

        {/* Second Runner's Up Card */}
        <div className='bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition'>
          <div className='flex items-center justify-between mb-4'>
            <img src='img/third.png' className='h-10' alt='third-place' />
            <h2 className='text-xl font-bold'>Second Runner's Up</h2>
          </div>
          <Divider />
          <ul className='mt-4 text-sm text-gray-600'>
            <li className='mb-2'>Cash Prize of Rs. 2000</li>
            <li className='mb-2'>2nd Runner's Up Trophy</li>
            <li className='mb-2'>Badge of 3rd Best School Award</li>
            <li>25% Scholarship in Biology training for IBB and NSEB</li>
          </ul>
        </div>

        {/* More Prizes */}
        <div className='col-span-1 md:col-span-2 lg:col-span-3 bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition mt-8'>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-2xl font-bold'>Yes! There's More</h2>
          </div>
          <Divider />
          <ul className='mt-4 text-sm text-gray-600'>
            <li className='mb-2'>List of Top 10 Schools will be published</li>
            <li className='mb-2'>
              Certificate of Excellence for the participants of top 5 teams and
              Schools
            </li>
            <li className='mb-2'>
              Certificate of Achievement for the participants of the next 10
              teams and Schools
            </li>
            <li>Certificate of Participation for all participants</li>
          </ul>
        </div>
      </div>

      {/* Join Section */}
      <div className='flex flex-col items-center gap-1 w-3/4 mx-auto my-16'>
        <h1 className='ques text-2xl font-semibold flex gap-2 justify-center items-center flex-col mx-auto my-5'>
          <span>Join Us Today and Stay Informed</span>
          <span className='flex flex-row flex-wrap gap-2 mx-auto my-5'>
            Read Our <Rule /> and Register Now!
          </span>
        </h1>
        {!isLoggedIn && (
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
        )}
      </div>
    </div>
  );
};

export default Overview;
