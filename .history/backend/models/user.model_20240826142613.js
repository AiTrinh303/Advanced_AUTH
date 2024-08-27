import {Schema, model} from "mongoose";

const userSchema = new Schema(
	{
        name: {
            type: String,
            required: true,
        },
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		lastLogin: {
			type: Date,
			default: Date.now,
		},
		isVerified: {
			type: Boolean,
			default: false,
		},
        isAdmin: {
            type: Boolean,
            default: false,
        },
		avatar: {
			
		}
		resetPasswordToken: String,
		resetPasswordExpiresAt: Date,
		verificationToken: String,
		verificationTokenExpiresAt: Date,
	},
	{ timestamps: true }
);

export const User = model("User", userSchema);