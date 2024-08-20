import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: "smtp.mail.de",
    port: 465,
    secure: true,
    auth: {
      user:  process.env.EMAIL,
      pass:  process.env.PASS,
    },
  });

