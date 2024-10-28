import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: 'Individuelle Softwarelösungen',
    description: 'Maßgeschneiderte Softwarelösungen, die Effizienz und Benutzerfreundlichkeit vereinen.',
  },
  {
    title: 'Automatisierungstools',
    description: 'Innovative Tools, die Prozesse automatisieren und optimieren.',
  },
  {
    title: 'Beleg-Auslesetool',
    description: 'Unser kostenloses Tool liest Belege präzise aus und stellt die Daten im gewünschten Format bereit.',
    icon: <ReceiptLongIcon fontSize="large" />,
  },
];

function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      id="services"
      ref={ref}
      sx={{
        py: 8,
        backgroundColor: '#eaeaea',
        color: '#333',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <Container>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Unsere Leistungen
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Bei XooTech steht der Kunde im Mittelpunkt. Unsere Dienstleistungen sind auf Ihre Bedürfnisse zugeschnitten.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345, margin: 'auto', textAlign: 'center', padding: 2 }}>
                {service.icon && <Box sx={{ mb: 2 }}>{service.icon}</Box>}
                <CardContent>
                  <Typography variant="h5" component="div">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;