// src/pages/Kontakt.jsx
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, MenuItem, Box } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';

function Kontakt() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert('Bitte verifiziere dich über reCAPTCHA.');
      return;
    }
    // Hier würde die Anfrage an den Server gesendet werden
    console.log('Anfrage gesendet:', form);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>Kontakt</Typography>
      <Typography variant="body1" paragraph>
        Wir freuen uns auf Ihre Anfrage. Bitte füllen Sie das Formular aus, und wir werden uns so schnell wie möglich bei Ihnen melden.
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="E-Mail"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Telefonnummer"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
        />
        <TextField
          select
          label="Betreff"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
        >
          <MenuItem value="general">Allgemeine Anfrage</MenuItem>
          <MenuItem value="project">Projektanfrage</MenuItem>
          <MenuItem value="partnership">Partnerschaft</MenuItem>
        </TextField>
        <TextField
          label="Nachricht"
          name="message"
          value={form.message}
          onChange={handleChange}
          multiline
          rows={4}
          required
        />
        <ReCAPTCHA
          sitekey="Dein-reCAPTCHA-Sitekey"  // reCAPTCHA Sitekey einfügen
          onChange={(value) => setCaptchaValue(value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Anfrage senden
        </Button>
      </Box>
    </Container>
  );
}

export default Kontakt;