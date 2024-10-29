import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText, useMediaQuery, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation, useHref } from 'react-router-dom';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = (open) => (event) => {
    setDrawerOpen(open);
  };

  const handleSectionNavigation = (sectionid) => {
    if (location.pathname === '/') {
      const section = document.querySelector(sectionid);
      //console.log(section);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
    navigate(`/${sectionid}`);
    }
  }

  const handleSectionNavigationMobile = (sectionid) => {
    if (location.pathname === '/') {
      const section = document.querySelector(sectionid);
      //console.log(section);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/${sectionid}`); 
    }
    setDrawerOpen(false);
  }

  const menuItems = [
    { text: 'Startseite', link: '#hero' },
    { text: 'Über uns', link: '#about' },
    { text: 'Leistungen', link: '#services' },
    { text: 'Kontakt', link: '#cta' },
  ];

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
      <Box component="img" src="/logo.webp" alt="XooTech Logo" sx={{height: 40, marginRight: 2}} />
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>
          XooTech
        </Typography>
        
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <List>
                {menuItems.map((item) => (
                  <ListItem button component="a" key={item.text} onClick={() => handleSectionNavigationMobile(item.link)}>
                    <ListItemText primary={item.text} color='#fff'/>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          menuItems.map((item) => (
            <Button color="inherit" key={item.text} onClick={() => handleSectionNavigation(item.link)}>
              {item.text}
            </Button>
          ))
        )}     
      </Toolbar>
    </AppBar>
  );
}

export default Header;