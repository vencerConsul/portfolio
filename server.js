import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import smtpTransport from 'nodemailer-smtp-transport';
import cors from 'cors';

const app = express();
const port = 9000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
const corsOpts = {
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOpts));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/sendEmail', (req, res) => {
  const { fullname, email, message } = req.body;

  const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
      user: 'o.lermovenz@gmail.com',
      pass: 'wgktasimfovqmgxf'
    }
  }));

  // Define the email options
  const mailOptions = {
    from: email,
    to: 'o.lermovenz@gmail.com',
    subject: `${fullname} sent you an email`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('An error occurred while sending the email');
    } else {
      console.log('Email sent:', info.response);
      res.sendStatus(200);
    }
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
