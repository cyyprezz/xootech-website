import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => (event) => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Startseite', link: '#hero' },
    { text: 'Über uns', link: '#about' },
    { text: 'Leistungen', link: '#services' },
    { text: 'Kontakt', link: '#cta' },
  ];

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
                  <ListItem button component="a" href={item.link} key={item.text} onClick={toggleDrawer(false)}>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          menuItems.map((item) => (
            <Button color="inherit" href={item.link} key={item.text}>
              {item.text}
            </Button>
          ))
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;