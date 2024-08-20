import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: "smtp.mail.de",
    port: 465,
    secure: true,
    auth: {
      user: "jojomapmip@mail.de",
      pass: process.env.PASS,
    },
  });

export const sender = {
	email:" jojomapmip@mail.de",
	name: "Ai Trinh",
};  