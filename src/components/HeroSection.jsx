import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useInView } from 'react-intersection-observer';

function HeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      id="hero"
      ref={ref}
      sx={{
        position: 'relative',
        backgroundImage: 'url("/hero-image.webp")', // Bildpfad anpassen
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <Box
        sx={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 1}}>
      <Container sx={{position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px'}}>
        <Typography variant="h3" component="h1" gutterBottom>
          XooTech – Technologie, die verbindet und vereinfacht
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Innovative Lösungen für die digitale Zukunft. Mit Leidenschaft für Technologie und einem klaren Fokus auf Benutzerfreundlichkeit.
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
         Gründungsphase - Webseite befindet sich noch im Aufbau. 
        </Typography>
      </Container>
      </Box>
    </Box>
  );
}

export default HeroSection;