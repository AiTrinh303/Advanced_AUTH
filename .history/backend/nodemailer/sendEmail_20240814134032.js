import { 
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from './emailTemplates.js';
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
		const response = await transporter.sendMail({
			from: process.env.EMAIL,
			to: email,
			subject: "Welcome email",
			html: WELCOME_EMAIL_TEMPLATE.replace("{name}", name),
		});

		console.log("Welcome email sent successfully", response);
	} catch (error) {
		console.error(`Error sending welcome email`, error);
		throw new Error(`Error sending welcome email: ${error}`);
	}
};


//3. PASSWORD_RESET_EMAIL
export const sendPasswordResetEmail = async (email, resetURL) => {
	try {
		const response = await transporter.sendMail({
			from: process.env.EMAIL,
			to: email,
			subject: "Reset your password",
			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
		});
		console.log("Password reset email sent successfully", response);
	} 
  catch (error) {
		console.error(`Error sending password reset email`, error);
		throw new Error(`Error sending password reset email: ${error}`);
	}
};

//4. PASSWORD_RESET_SUCCESS_EMAIL
export const sendResetSuccessEmail = async (email) => {

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: email,
			subject: "Password Reset Successful",
			html: PASSWORD_RESET_SUCCESS_TEMPLATE,
			category: "Password Reset",
		});

		console.log("Password reset email sent successfully", response);
	} catch (error) {
		console.error(`Error sending password reset success email`, error);

		throw new Error(`Error sending password reset success email: ${error}`);
	}
};
