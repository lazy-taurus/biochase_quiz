import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
    Button,
  } from "@material-tailwind/react";
import axios from "axios";
   
  export function TeamList({members, setMembers, getMembers}) {

    const removeMember = async (memberName)=> {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.post('https://biochase-quiz-backend.vercel.app/api/v1/removeMember', {
          memberName,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        getMembers();
        alert(response.data.message)
      } catch (error) {
        alert(error.response.data.message);
      }
    }

    return (
      <Card className="w-52 sm:w-96 bg-blue-gray-200">
        <List>
          {members.map((member, index)=> {
            return (
              <ListItem key={index} className="relative">
              <div>
                <Typography variant="h6" color="blue-gray">
                  {member.name}
                </Typography>
              </div>
                <button onClick={()=> removeMember(member.name)} size="sm" className="absolute right-[15%] border border-black rounded-lg p-1 bg-yellow-600 font-semibold text-black text-sm">Remove</button>
            </ListItem>
            )
          })}
        </List>
      </Card>
    );
  }