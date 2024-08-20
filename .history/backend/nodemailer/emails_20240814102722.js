import nodermailer from 'nodemailer';


export const sendEmail = async (req, res, text) => {
 try {

 }
 catch (error) {
   console.log(error);
 }

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