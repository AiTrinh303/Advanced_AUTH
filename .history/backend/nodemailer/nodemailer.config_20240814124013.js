import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: "smtp.mail.de",
    port: 465,
    secure: true,
    auth: {
      user: "jojomapmip@mail.de",
      pass: "jojo07080411",
    },
  });

export const sender = {
	email:"jojomapmip@mail.de",
};  