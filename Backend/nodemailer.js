const nodemailer = require('nodemailer');

exports.sendConfirmationEmail = (to, service, date) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Booking Confirmation',
    text: `Hi! Your booking for ${service} on ${date} is confirmed.`,
  };

  return transporter.sendMail(mailOptions);
};