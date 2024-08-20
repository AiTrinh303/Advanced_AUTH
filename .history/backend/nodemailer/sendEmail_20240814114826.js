import nodemailer from 'nodemailer';
import { VERIFICATION_EMAIL_TEMPLATE } from './emailTemplates.js';
import { transporter } from './nodemailer.config.js';


export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];
 try {
      const response = await transporter.sendMail({
        from: process.env.EMAIL,
        to: recipient,
        subject: "Verify your email",
        html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
		 });  
     console.log("Email sent successfully", response);
 }
 catch (error) {
  console.error(`Error sending verification`, error);
  throw new Error(`Error sending verification email: ${error}`);
 }
}