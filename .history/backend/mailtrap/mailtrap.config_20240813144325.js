import { MailtrapClient } from "mailtrap";

//MAILTRAP CLIENT: create and export a new MailtrapClient instance
export const mailtrapClient = new MailtrapClient({
	endpoint: process.env.MAILTRAP_ENDPOINT,
	token: process.env.MAILTRAP_TOKEN,
});

//SENDER: define and export the sender's email and name
export const sender = {
	email: "trong.trinh@dci-student.org",
	name: "Ai Trinh",
};
