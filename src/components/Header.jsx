import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" color="primary">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            XooTech
          </Typography>
          /* <Button color="inherit" href="#hero">Startseite</Button> 
          <Button color="inherit" href='#about'>Über uns</Button>
          <Button color="inherit" href='#services'>Leistungen</Button>
          <Button color="inherit" href='#cta'>Kontakt</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;