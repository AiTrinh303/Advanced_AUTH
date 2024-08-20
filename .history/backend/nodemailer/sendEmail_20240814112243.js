import nodermailer from 'nodemailer';


export const endVerificationEmail = async (req, res, text) => {
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

      const mailOptions = {
        from: "your_email@gmail.com",
        to: "recipient@example.com",
        subject: "Verify your email",
        html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
			category: "Email Verification",
      };  
 }
 catch (error) {
   console.log(error);
 }

}