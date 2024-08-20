import nodermailer from 'nodemailer';


export const sendEmail = async (req, res, text) => {
 try {
    const transporter = nodemailer.createTransport({
        host: "smtp.mail.de",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.,
        },
      });

      const mailOptions = {
        from: "your_email@gmail.com",
        to: "recipient@example.com",
        subject: "Hello from Nodemailer",
        text: "This is a test email sent using Nodemailer.",
      };  
 }
 catch (error) {
   console.log(error);
 }

}