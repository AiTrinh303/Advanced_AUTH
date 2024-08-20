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

//2.WELCOME_EMAIL
export const sendWelcomeEmail = async (email, name) => {
	const recipient = [{ email }];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipient,
			template_uuid: "e65925d1-a9d1-4a40-ae7c-d92b37d593df",
			template_variables: {
				company_info_name: "Auth Company",
				name: name,
			},
		});

		console.log("Welcome email sent successfully", response);
	} catch (error) {
		console.error(`Error sending welcome email`, error);

		throw new Error(`Error sending welcome email: ${error}`);
	}
};