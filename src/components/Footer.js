import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Logo from '../assets/images/Logo.jpeg';

const Footer = () => (
  <Box
    bgcolor="#FFF3F4"
    py={4}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    boxShadow={1}
  >
    <img src={Logo} alt="logo" style={{ width: '100px', height: '100px' }} />
    <Stack direction="row" spacing={2} mt={2}>
      <a href="https://www.facebook.com/profile.php?id=100063910697812">
        <FacebookIcon color="primary" fontSize="large" />
      </a>
      <a href="https://www.instagram.com/salle.de.sport.talel.rades/">
        <InstagramIcon color="primary" fontSize="large" />
      </a>
      <a href="https://twitter.com/ImenHAJRI28">
        <TwitterIcon color="primary" fontSize="large" />
      </a>
    </Stack>
    <Typography variant="h5" mt={3} textAlign="center">
      Salle de Sport TALEL
    </Typography>
  </Box>
);

export default Footer;
