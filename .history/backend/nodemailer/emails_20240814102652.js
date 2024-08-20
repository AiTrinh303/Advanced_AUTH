import nodermailer from 'nodemailer';


export const sendEmail = (email, subject, text) => {
  const mailOptions = {
    from: "
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "jojomapmip@gmail.com",
    pass: "Mem@pmip303",
  },
});