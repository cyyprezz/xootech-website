// src/pages/Kontakt.jsx
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, MenuItem, Box, Snackbar, Alert } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';

function Kontakt() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    capatcha_token: ''
  });
  const [captchaValue, setCaptchaValue] = useState(null);
  const [ status, setStatus ] = useState({message: "", serverty: "success"})
  const [ open, setOpen ] = useState(false)
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCapChange = (e) => {
    setForm({...form, capatcha_token: e})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.capatcha_token) {
      setStatus({message: 'Bitte verifiziere dich über reCAPTCHA.', serverty: 'error'});
      setOpen(true);
      return;
    }
    // Hier würde die Anfrage an den Server gesendet werden
    try  {
      console.log(JSON.stringify(form))
      const response = await fetch('https://xootech-api-914808594048.europe-west1.run.app/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(form)
      });
      if (response.ok) {
        setStatus({message: 'Anfrage erfolgreich gesendet. Sie werden in Kürze weitergeleitet.', serverty: 'success'});
        setOpen(true);
        setTimeout(() => navigate('/'), 3000)
      } else if(response.status === 429) {
        setStatus({message: "Anfrage abgelehnt. Sie haben das tägliche Limit erreicht. Bitte versuchen Sie es morgen erneut.", serverty: "error"})
        setOpen(true);
      }
       else {
        setStatus({message: "Es gab ein Problem beim Senden der Anfrage. Bitte versuchen Sie es erneut.", serverty: "error"});
        setOpen(true);
      } 
    } catch( error) {
      console.error('Fehler: ', error);
      setStatus({message: "Es gab ein Problem beim Senden der Anfrage. Bitte versuchen Sie es erneut.", serverty: "error"});
    }
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>Kontakt</Typography>
      <Typography variant="body1" paragraph>
        Wir freuen uns auf Ihre Anfrage. Bitte füllen Sie das Formular aus, 
        und wir werden uns so schnell wie möglich bei Ihnen melden.
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
          sitekey="6LdI_W4qAAAAAN-PzBX4nYIcmxi8XF3vQq_Sl2lW"  // reCAPTCHA Sitekey einfügen
          onChange={handleCapChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Anfrage senden
        </Button>
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{vertical:'top', horizontal: 'center'}}>
          <Alert onClose={handleClose} serverty={status.serverty} sx={{with: '100%'}}>
            {status.message}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
}

export default Kontakt;