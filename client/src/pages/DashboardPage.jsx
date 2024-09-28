import React, { useEffect, useState } from 'react';
import { TeamList } from '../components/dashboard_components/TeamList';
import axios from 'axios';
import { AddMemberModal } from '../components/dashboard_components/AddMemberModal';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const DashboardPage = () => {
  const [members, setMembers] = useState([]);
  const [team, setTeam] = useState('default');
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const getMembers = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(
        'https://biochase-backend-xeqq.vercel.app/api/v1/getTeamMembers',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      // setMembers(response.data.data);
      setMembers(response.data.data.members);
      setTeam(response.data.data.teamName);
      setScore(response.data.data.pointsEarned);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    localStorage.removeItem('token');
    toast.success('LogOut successful!', {
      position: 'top-right',
    });
    navigate('/');
  };

  useEffect(() => {
    // If Unauthorized, redirect to login page
    const token = localStorage.getItem('token');
    if (!token) navigate('/home');
    getMembers();
  }, []);

  return (
    <div className='flex flex-col bg-white min-h-[80vh] mt-[-80px]'>
      {/* <Button
        onClick={logOut}
        className='absolute right-0'
        color='amber'
        size='sm'
      >
        Log Out
      </Button> */}
      <div className='mx-[10%] mt-[15%] lg:mt-[5%]  '>
        <div className='my-10 flex justify-between items-center w-full h-[5vh] md:h-[10vh] px-5 md:px-10 mx-auto'>
          <h1 className=' text-xl md:text-5xl font-bold'>Team: {team}</h1>
          <AddMemberModal getMembers={getMembers} members={members} />
        </div>
        <TeamList
          members={members}
          setMembers={setMembers}
          getMembers={getMembers}
        />
        <div className='mt-10 flex justify-between'>
          <h1 className='font-bold my-5 text-2xl'>Total Score: {score}</h1>
          <Link to={'/timeline'}>
            <button className='bg-[#04091b] text-white py-4 px-6 rounded hover:bg-[#04090a]'>
              Timeline
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

// import React, { useEffect, useState } from 'react';
// import { TeamList } from '../components/dashboard_components/TeamList';
// import axios from 'axios';
// import { AddMemberModal } from '../components/dashboard_components/AddMemberModal';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const DashboardPage = () => {
//   const [members, setMembers] = useState([]);
//   const [team, setTeam] = useState('default');
//   const [score, setScore] = useState(0);
//   const [levelReached, setLevelReached] = useState(1); // New state to track level
//   const [quizStatus, setQuizStatus] = useState({
//     live: false,
//     qualified: false,
//   }); // New state to track quiz status
//   const [level1StartingSoon, setLevel1StartingSoon] = useState(false); // To track if level 1 is starting soon
//   const navigate = useNavigate();

//   const getMembers = async () => {
//     const token = localStorage.getItem('token');
//     try {
//       const response = await axios.get(
//         'https://biochase-quiz-backend.vercel.app/api/v1/getTeamMembers',
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log(response.data);
//       setMembers(response.data.data.members);
//       setTeam(response.data.data.teamName);
//       setScore(response.data.data.pointsEarned);
//       setLevelReached(response.data.data.levelReached); // Assuming the level reached is provided by the API
//       setLevel1StartingSoon(response.data.data.level1StartingSoon); // Assuming this is provided by the API
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getQuizStatus = async () => {
//     const token = localStorage.getItem('token');
//     try {
//       const response = await axios.get(
//         'https://biochase-quiz-backend.vercel.app/api/v1/getQuizStatus',
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setQuizStatus({
//         live: response.data.live,
//         qualified: response.data.qualified,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const logOut = () => {
//     localStorage.removeItem('token');
//     toast.success('LogOut successful!', {
//       position: 'top-right',
//     });
//     navigate('/');
//   };

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) navigate('/home');
//     getMembers();
//     getQuizStatus();
//   }, []);

//   // Function to start the quiz (if live and qualified)
//   const startQuiz = () => {
//     if (quizStatus.live && quizStatus.qualified) {
//       // Navigate to quiz page
//       navigate('/quiz');
//     } else {
//       toast.error('Quiz is not live or your team is not qualified.', {
//         position: 'top-right',
//       });
//     }
//   };

//   return (
//     <div className='flex flex-col bg-white min-h-[80vh] mt-[-80px]'>
//       <div className='mx-[10%] mt-[15%] lg:mt-[5%]'>
//         <div className='my-10 flex justify-between items-center w-full h-[5vh] md:h-[10vh] px-5 md:px-10 mx-auto'>
//           <h1 className=' text-xl md:text-5xl font-bold'>Team: {team}</h1>

//           {/* Add member button disabled if level1StartingSoon is true or team has 4 members */}
//           <AddMemberModal
//             getMembers={getMembers}
//             disabled={members.length >= 4 || level1StartingSoon}
//           />
//         </div>

//         {/* Display team members */}
//         <TeamList
//           members={members}
//           setMembers={setMembers}
//           getMembers={getMembers}
//         />

//         <div className='mt-10'>
//           <h1 className='font-bold my-5 text-2xl'>Total Score: {score}</h1>
//         </div>

//         {/* Display the level the team has reached */}
//         <div className='mt-5'>
//           <h2 className='text-xl'>
//             Level Reached: <span className='font-bold'>{levelReached}</span>
//           </h2>
//         </div>

//         {/* Button to start the quiz if it's live and the team is qualified */}
//         <div className='mt-5'>
//           {quizStatus.live && quizStatus.qualified ? (
//             <button
//               className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'
//               onClick={startQuiz}
//             >
//               Start Quiz
//             </button>
//           ) : (
//             <p className='text-red-500'>
//               Quiz is not live or your team is not qualified.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;
