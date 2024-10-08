/*import React from "react";
import { Tilt } from "react-tilt";
import { useForm } from "react-hook-form";*/
import axios from 'axios';
/*import { useNavigate } from "react-router-dom";

const defaultOptions = {
  reverse: true, // reverse the tilt direction
  max: 15, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "https://biochase-quiz-backend.vercel.app/api/v1/register", data
      );
      localStorage.setItem("token", response.data.data);
      console.log(response);
      console.log(response.data.message);
      alert(response.data.message);    
      navigate('/dashboard')
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div
      className="flex content-center items-center justify-center min-h-[100vh] mt-[-80px]"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/diyxwdtjd/image/upload/v1704787585/Project%20use/vecteezy_black-and-grey-abstract-grunge-texture-with-halftone-background_14042446_unclpe.jpg')",
      }}
    >
      <Tilt
        options={defaultOptions}
        className="w-[70%] h-[] bg-gradient-to-tr rounded-2xl flex content-center items-center justify-center "
      >
        {/* Signin card */ /*}
        <div className="relative flex flex-col text-gray-700 bg-[#ffffff] shadow-md rounded-xl bg-clip-border">
          <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border shadow-gray-900/20">
            <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white px-4">
              Register Your Team
            </h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4 p-6">
              <Input type="text" {...register("userName")} title="Username" />
              <Input type="password" {...register("password")} title="Password" />
              <Input type="text" {...register("teamName")} title="Team Name" />
              <Input type="text" {...register("schoolName")} title="School Name" />
            </div>
            <div className="p-6 pt-0">
              <button
                className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </Tilt>
    </div>
  );
};

const Input = React.forwardRef(({ title, type, ...rest }, ref) => {
  return (
    <div className="relative h-11 w-full min-w-[70%]">
      <input
        required
        {...rest}
        type={type}
        ref={ref}
        className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" "
      />
      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        {title}
      </label>
    </div>
  );
});*/

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { toast } from 'react-toastify';

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://biochase-quiz.vercel.app/'>
        Bio-Chase 1.0
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const RegisterPage = () => {
  const [userName, setuserName] = useState();
  const [userNumber, setuserNumber] = useState();
  const [password, setpassword] = useState();
  const [teamName, setteamName] = useState();
  const [schoolName, setschoolName] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://biochase-backend-xeqq.vercel.app/api/v1/register',
        {
          userName,
          userNumber,
          teamName,
          schoolName,
          password,
        }
      );
      localStorage.setItem('token', response.data.data);
      console.log(response);
      if (response.data.success) {
        toast.success('Sing-Up successful!', {
          position: 'top-right',
        });

        window.location.replace('/dashboard');
      } else {
        toast.error('Error Sign-UP. Please try again.', {
          position: 'top-right',
        });
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: 'top-right',
      });
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign-Up
          </Typography>
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='userName'
              label='User Name '
              name='text'
              autoComplete='text'
              autoFocus
              value={userName}
              onChange={(e) => {
                setuserName(e.target.value);
              }}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              id='userNumber'
              label='Phone Number'
              name='text'
              autoComplete='text'
              autoFocus
              value={userNumber}
              onChange={(e) => {
                setuserNumber(e.target.value);
              }}
            />

            <TextField
              margin='normal'
              required
              fullWidth
              id='teamName'
              label='Team Name'
              name='text'
              autoComplete='text'
              autoFocus
              value={teamName}
              onChange={(e) => {
                setteamName(e.target.value);
              }}
            />

            <TextField
              margin='normal'
              required
              fullWidth
              id='schoolName'
              label='School Name'
              name='text'
              autoComplete='text'
              autoFocus
              value={schoolName}
              onChange={(e) => {
                setschoolName(e.target.value);
              }}
            />

            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />

            {/* <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='I want to receive inspiration, marketing promotions and updates via email.'
            /> */}

            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link href='login' variant='body2'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

export default RegisterPage;
