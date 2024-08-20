import nodemailer from 'nodemailer';
import { VERIFICATION_EMAIL_TEMPLATE } from './emailTemplates.js';
import { transporter } from './nodemailer.config.js';

//1. VERIFICATION_EMAIL:
export const sendVerificationEmail = async (email, verificationToken) => {
  try {
      const response = await transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
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

//2. WELCOME_EMAIL
export const sendWelcomeEmail = async (email, name) => {

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			subject: "Welcome email",
			html: WELCOME_EMAIL_TEMPLATE.replace("{name}", name),
			category: "Email welcome",
		});

		console.log("Welcome email sent successfully", response);
	} catch (error) {
		console.error(`Error sending welcome email`, error);

		throw new Error(`Error sending welcome email: ${error}`);
	}
};
