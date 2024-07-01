import React, { useEffect, useState } from 'react';
import { TeamList } from '../components/dashboard_components/TeamList';
import { Button } from '@material-tailwind/react';
import axios from 'axios';
import { AddMemberModal } from '../components/dashboard_components/AddMemberModal';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer/footer';
import { toast } from 'react-toastify';

const DashboardPage = () => {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  const getMembers = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(
        'https://biochase-quiz-backend.vercel.app/api/v1/getTeamMembers',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setMembers(response.data.data);
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
          <h1 className=' text-xl md:text-5xl font-bold'>Team: Axios</h1>
          <AddMemberModal getMembers={getMembers} />
        </div>
        <TeamList
          members={members}
          setMembers={setMembers}
          getMembers={getMembers}
        />
        <div className='mt-10'>
          <h1 className='font-bold my-5 text-2xl'>Total Score: 0</h1>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
