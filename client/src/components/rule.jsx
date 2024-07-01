import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import rules from '../pages/data';
import { Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Rule() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <h1
        className='ques text-2xl font-semibold underline cursor-pointer hover:text-[#9290c3]'
        onClick={handleOpen}
      >
        Rules
      </h1>
      <Backdrop
        sx={{ color: '#000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CloseIcon
          className='absolute top-5 right-5 cursor-pointer'
          sx={{ fontSize: 50 }}
          onClick={handleClose}
        />
        <Container
          fixed
          sx={{
            bgcolor: '#eeeeff',
            height: '90vh',
            width: '70%',
            marginX: 'auto',
            overflowY: 'scroll',
          }}
          className='flex flex-col px-20 py-10 gap-5'
        >
          {/* <div className='flex justify-between mx-5 my-5 flex-wrap'> */}
          <h1 className=' text-4xl mx-5 mb-3'>Rules and Regulation</h1>
          {/* <Link to={'/register'}>
              <Button
                variant='contained'
                style={{
                  backgroundColor: '#04091b',
                  padding: '10px 30px',
                  fontWeight: 'bolder',
                  color: 'white',
                }}
              >
                Register
              </Button>
            </Link> */}
          {/* </div> */}
          <Divider />
          {rules.map((rule, index) => {
            return (
              <div className='rule flex flex-col mx-5 my-5 gap-3' key={index}>
                <div className='ques text-xl font-bold'>
                  &#8226; {rule.question}
                </div>
                <div className='ans'>{rule.answer}</div>
              </div>
            );
          })}
        </Container>
      </Backdrop>
    </div>
  );
}
