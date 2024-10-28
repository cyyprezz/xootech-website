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
      <Typography variant="body1" paragraph>
        XooTech GmbH<br />
      </Typography>
      
      <Typography variant="h6" gutterBottom sx={{color: '#f5f5f5' }}>Vertreten durch:</Typography>
      <Typography variant="body1" paragraph>
        Jonathan Desens (CEO)<br />
        Nicklas Desens (CTO)
      </Typography>

      <Typography variant="h6" gutterBottom sx={{color: '#f5f5f5' }}>Kontakt</Typography>
      <Typography variant="body1" paragraph>
        Telefon: <br />
        E-Mail: 
      </Typography>

      <Typography variant="h6" gutterBottom sx={{color: '#f5f5f5' }}>Registereintrag</Typography>
      <Typography variant="body1" paragraph>
        Eintragung im Handelsregister.<br />
        Registergericht: Amtsgericht Musterstadt<br />
        Registernummer: HRB 123456
      </Typography>

      <Typography variant="h6" gutterBottom sx={{color: '#f5f5f5' }}>Umsatzsteuer-ID </Typography>
      <Typography variant="body1" paragraph>
        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: 
      </Typography>

      <Typography variant="h6" gutterBottom sx={{color: '#f5f5f5' }}>Haftung für Inhalte</Typography>
      <Typography variant="body1" paragraph>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
        Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen 
        zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
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