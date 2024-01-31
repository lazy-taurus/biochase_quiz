import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import axios from "axios";
 
export function AddMemberModal({getMembers}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, whatsappNumber);
    try {
    const token = localStorage.getItem('token');
      const response = await axios.post('https://biochase-quiz-backend.vercel.app/api/v1/addMember', {
        name,
        email,
        whatsappNumber,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response?.data);
      alert(response?.data.message);
      getMembers();
      handleOpen();
    } catch (error) {
      console.log(error);
      alert(error.response?.data.message);
    }
  }
 
  return (
    <>
      <Button color="amber" onClick={handleOpen}>Add Member</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <form onSubmit={handleSubmit}>
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
            Add Member
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Member Name
            </Typography>
            <input className="border border-black outline-none rounded-lg p-1" required type="text" onChange={(e)=> setName(e.target.value)} label="Member Name" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Member Email
            </Typography>
            <input className="border border-black outline-none rounded-lg p-1" required type="email" onChange={(e)=> setEmail(e.target.value)} label="Member Email" size="lg" />
            <Typography type="number" className="-mb-2" variant="h6">
              Member Whatsapp Number
            </Typography>
            <input className="border border-black outline-none rounded-lg p-1" required onChange={(e)=> setWhatsappNumber(e.target.value)} label="Member Whatsapp Number" size="lg" maxLength={10} minLength={10} />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" type="submit" fullWidth>
            Add Member
            </Button>
          </CardFooter>
          </form>
        </Card>
      </Dialog>
    </>
  );
}