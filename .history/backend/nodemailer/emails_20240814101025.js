import nodermailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "titatiton3031991@gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "titatiton3031991@gmail.com",
    pass: "your_app_password",
  },
});