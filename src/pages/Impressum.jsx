// src/pages/Impressum.jsx
import React from 'react';
import { Box, Typography, Container, Divider } from '@mui/material';

function Impressum() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4, color: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#1e88e5' }}>
        Impressum
      </Typography>
      <Divider sx={{ mb: 4, color: '#1e88e5' }} />
      
      <Typography variant="h6" gutterBottom sx={{color: '#f5f5f5' }}>Angaben gemäß § 5 TMG</Typography>
      
      <Typography variant="h6" gutterBottom sx={{color: '#f5f5f5' }}>Vertreten durch:</Typography>
      <Typography variant="body1" paragraph>
        Nicklas Desens <br />
        Stuttgart 
        Germany
      </Typography>

      <Typography variant="h6" gutterBottom sx={{color: '#f5f5f5' }}>Kontakt</Typography>
      <Typography variant="body1" paragraph>
        E-Mail: nicklas.desens@proton.me
      </Typography>

      <Typography variant="h6" gutterBottom sx={{color: '#f5f5f5' }}>Berufsbezeichnung: Freiberuflicher [Beruf, z. B. IT-Berater]</Typography>
   
      <Typography variant="h6" gutterBottom sx={{color: '#f5f5f5' }}>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</Typography>
      <Typography variant="body1" paragraph>
        Nicklas Desens
      </Typography>

      <Typography variant="h6" gutterBottom sx={{color: '#f5f5f5' }}>Haftung für Links</Typography>
      <Typography variant="body1" paragraph>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. 
        Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{color: '#f5f5f5' }}>Urheberrecht</Typography>
      <Typography variant="body1" paragraph>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
        Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
        außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
      </Typography>

      <Typography variant="h6" gutterBottom sx={{color: '#f5f5f5' }}>Quelle</Typography>
      <Typography variant="body1" paragraph>
        Dieses Impressum wurde erstellt mit Hilfe von: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer">e-recht24.de</a>
      </Typography>
    </Container>
  );
}

export default Impressum;