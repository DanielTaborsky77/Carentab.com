const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Nastavení transporteru pro Nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.seznam.cz',
  port: 465,
  secure: true,
  auth: {
    user: 'daniel-taborsky77@seznam.cz',
    pass: '9Zszvfkt'
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Definice cesty pro odeslání e-mailu
app.post('/send-email', (req, res) => {
  const { firstName, lastName, birthday, phone, email, car, town, from, to, groupB, gdpr } = req.body;

  const mailOptions = {
    from: email,
    to: 'info@carentab.com',
    subject: 'Rezervace vozidla: ' + car,
    html: `<h1>Zpráva od ${firstName} ${lastName}</h1><br>
    <p>Datum narození: ${birthday}</p><br>
    <p>Telefonní číslo: ${phone}</p><br>
    <p>Město: ${town}</p><br>
    <p>Od: ${from} do: ${to}</p><br>
    <p>Skupina B: ${groupB}</p><br>
    <p>GDPR: ${gdpr}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Nepodařilo se odeslat e-mail');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('E-mail byl úspěšně odeslán');
    }
  });
});

// Nyní server poslouchá na výchozím portu HTTP (80)
app.listen(() => {
  console.log('Server běží na výchozím portu HTTP');
});