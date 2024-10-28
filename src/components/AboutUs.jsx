import React from 'react';
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const teamMembers = [
  {
    name: 'Jonathan Desens',
    role: 'CEO',
    description: 'Verantwortlich für die strategische Ausrichtung und den Kundenkontakt.',
    image: '/chris-image.webp', // Bildpfad anpassen
  },
  {
    name: 'Nicklas Desens',
    role: 'CTO',
    description: 'Technischer Leiter mit Fokus auf Softwareentwicklung und Datenbanken.',
    image: '/chris-image.webp', // Bildpfad anpassen
  },
  {
    name: 'Chris Xootech',
    role: 'Digital AI-Experte',
    description: 'KI-Entwicklungs-Assistent zur Unterstützung unserer innovativen Lösungen.',
    image: '/chris-image.webp', // Bildpfad anpassen
  },
];

function AboutUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      id="about"
      ref={ref}
      sx={{
        py: 8,
        backgroundColor: '#f4f4f4',
        color: '#333',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <Container>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Über uns
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          XooTech ist ein Team von Technikbegeisterten, das mit Leidenschaft und Know-how an der Zukunft arbeitet.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345, margin: 'auto', textAlign: 'center', padding: 2 }}>
                <CardMedia
                  component="img"
                  alt={member.name}
                  height="300"
                  image={member.image}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.description}
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

export default AboutUs;