import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, []);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    setLoggedIn(false);
    localStorage.removeItem('token');
    navigate('/');
  };
  const listLogOut = () => {
    handleClose();
    handleLogOut();
  };

  return (
    <section className=' w-full h-[10vh] top-0 items-center flex justify-between px-10 m-0 md:px-16 text-[#070F2B] bg-transparent '>
      <Link to='/' className=' md:w-2/5 w-1/2'>
        <h1 className='font-bold text-2xl text-nowrap'>BIO-CHASE</h1>
      </Link>
      <React.Fragment>
        <Box
          sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
        >
          <div className='md:flex hidden'>
            {!loggedIn ? (
              <>
                <Link to='/register'>
                  <Typography
                    sx={{ minWidth: 100 }}
                    className=' hover:font-semibold'
                  >
                    Register
                  </Typography>
                </Link>
                <Link to='/login'>
                  <Typography
                    sx={{ minWidth: 100 }}
                    className=' hover:font-semibold'
                  >
                    LogIn
                  </Typography>
                </Link>
              </>
            ) : (
              <Typography
                sx={{ minWidth: 100 }}
                className=' hover:font-semibold cursor-pointer'
                onClick={handleLogOut}
              >
                LogOut
              </Typography>
            )}
            <Link to='/overview'>
              <Typography
                sx={{ minWidth: 100 }}
                className=' hover:font-semibold'
              >
                Overview
              </Typography>
            </Link>
          </div>
          <div className='md:hidden flex'>
            <Tooltip title='Menu'>
              <IconButton
                onClick={handleClick}
                size='small'
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
              >
                <MenuIcon />
                {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
              </IconButton>
            </Tooltip>
          </div>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id='account-menu'
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          className=' p-10 gap-10'
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          {!loggedIn ? (
            <>
              <Link to='/register'>
                <MenuItem onClick={handleClose}>Register</MenuItem>
              </Link>
              <Link to='/login'>
                <MenuItem onClick={handleClose}>Login</MenuItem>
              </Link>
            </>
          ) : (
            <MenuItem onClick={listLogOut}>LogOut</MenuItem>
          )}
          <Link to='/overview'>
            <MenuItem onClick={handleClose}>Overview</MenuItem>
          </Link>
        </Menu>
      </React.Fragment>
    </section>
  );
}
