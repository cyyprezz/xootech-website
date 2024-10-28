import React from 'react';
import { Box, Typography, Container, Stack, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Box sx={{ py: 4, backgroundColor: '#000', color: '#fff' }}>
      <Container>
        <Typography variant="body1" align="center" gutterBottom>
          &copy; 2024 XooTech - Alle Rechte vorbehalten.
        </Typography>
        <Typography variant="body2" align="center" gutterBottom>
          Kontakt: info@xootech.com
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={2}>
          <IconButton color="inherit" href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <LinkedInIcon sx={{ transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.2)' } }} />
          </IconButton>
          <IconButton color="inherit" href="https://github.com" target="_blank" aria-label="GitHub">
            <GitHubIcon sx={{ transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.2)' } }} />
          </IconButton>
          <IconButton color="inherit" href="mailto:info@xootech.com" aria-label="Email">
            <EmailIcon sx={{ transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.2)' } }} />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/impressum" sx={{color: '#fff'}}>
            <InfoIcon sx={{ transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.2)' } }} />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;