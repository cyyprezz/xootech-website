import React from 'react';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useInView } from 'react-intersection-observer';

function CTA() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      id="cta"
      ref={ref}
      sx={{
        py: 8,
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Jetzt starten
        </Typography>
        <Typography variant="body1" gutterBottom>
          Entdecken Sie unsere Tools und Lösungen, die Ihnen Zeit und Aufwand sparen.
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            href="#"
            sx={{
              fontSize: '1.2rem',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            Zum Beleg-Auslesetool
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default CTA;