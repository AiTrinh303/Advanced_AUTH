import nodermailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "jojomapmip@gmail.com",
    pass: "your_app_password",
  },
});