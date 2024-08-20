import nodermailer from 'nodemailer';
import { VERIFICATION_EMAIL_TEMPLATE } from '../mailtrap/emailTemplates';


export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];
 try {
    const transporter = nodemailer.createTransport({
        host: "smtp.mail.de",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS,
        },
      });

      const response = {
        from: process.env.EMAIL,
        to: recipient,
        subject: "Verify your email",
        html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
		 };  
     console.log("Email sent successfully", response);
 }
 catch (error) {
   console.log(error);
 }

}