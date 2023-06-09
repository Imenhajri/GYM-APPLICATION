import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { signInWithPopup, auth, provider } from '../firebase';

const Login = () => {
  const handleGoogleLogin = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
     
    } catch (error) {
    }
  };

  return (
    <Box
      mt="80px"
      bgcolor="#FFF3F4"
      p="40px"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mb="24px" textAlign="center">
        Login with Google
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        sx={{ backgroundColor: '#FF2625' }}
        onClick={handleGoogleLogin}
        size="large"
      >
        Login with Google
      </Button>
    </Box>
  );
};

export default Login;
