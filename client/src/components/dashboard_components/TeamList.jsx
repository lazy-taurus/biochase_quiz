import { List, ListItem, Card, Typography } from '@material-tailwind/react';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { toast } from 'react-toastify';

export function TeamList({ members, setMembers, getMembers }) {
  const removeMember = async (memberName) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post(
        'https://biochase-backend-xeqq.vercel.app/api/v1/removeMember',
        {
          memberName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data);
        getMembers();
        toast.success(response.data.message, {
          position: 'top-right',
        });
      } else {
        toast.error(response.data.message, {
          position: 'top-right',
        });
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: 'top-right',
      });
    }
  };

  return (
    <Card className='flex flex-col w-full mb-10 min-h-40'>
      <List>
        {members.map((member, index) => {
          return (
            <ListItem
              key={index}
              className='relative flex justify-between md:w-3/4 w-full px-10 mx-auto'
            >
              <div>
                <Typography variant='h6' color='blue-gray'>
                  <h1 className='text-bold text-xl'>{member.name}</h1>
                </Typography>
              </div>
              <div>
                <Typography variant='h6' color='blue-gray'>
                  <h1 className='text-bold text-xl'>Class {member.clas}</h1>
                </Typography>
              </div>
              <div>
                <Typography variant='h6' color='blue-gray'>
                  <h1 className='hidden sm:block text-bold text-xl'>
                    {member.whatsappNumber}
                  </h1>
                </Typography>
              </div>
              <button
                onClick={() => removeMember(member.name)}
                size='sm'
                className=' border border-black rounded-lg p-1 bg-white font-semibold text-black text-sm pl-2 pr-2'
              >
                <CloseIcon />
              </button>
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
}
