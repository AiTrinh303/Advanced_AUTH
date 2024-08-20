import {
	PASSWORD_RESET_REQUEST_TEMPLATE,
	PASSWORD_RESET_SUCCESS_TEMPLATE,
	VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

//1. VERIFICATION_EMAIL:
/
export const sendVerificationEmail = async (email, verificationToken) => {
	const recipients = [{ email }];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipients,
			subject: "Verify your email",
			html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
			category: "Email Verification",
		});

		console.log("Email sent successfully", response);
	} catch (error) {
		console.error(`Error sending verification`, error);

		throw new Error(`Error sending verification email: ${error}`);
	}
};

//2. WELCOME_EMAIL
export const sendWelcomeEmail = async (email, name) => {
	const recipients = [{ email }];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipients,
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

//3. PASSWORD_RESET_EMAIL
export const sendPasswordResetEmail = async (email, resetURL) => {
	const recipients = [{ email }];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipients,
			subject: "Reset your password",
			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
			category: "Password Reset",
		});
	} catch (error) {
		console.error(`Error sending password reset email`, error);

		throw new Error(`Error sending password reset email: ${error}`);
	}
};

//4. PASSWORD_RESET_SUCCESS_EMAIL
export const sendResetSuccessEmail = async (email) => {
	const recipients = [{ email }];

	try {
		const response = await mailtrapClient.send({
			from: sender,
			to: recipients,
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
