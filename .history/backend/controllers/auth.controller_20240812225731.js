import bcryptjs from "bcryptjs";
import crypto from "crypto";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { User } from "../models/user.model.js";

//SIGNUP
export const signup = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const userExists = await