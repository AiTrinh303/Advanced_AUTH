import bcrypt from "bcrypt";
import {User} from '../models/user.model.js';

//1. GET ALL USERS
export const getAllUsers = async (req, res) => {
    try {
        const query = req.query.new;
        const users = query
            ? await User.find().sort({ _id: -1 }).limit(2)
            : await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//2. UPDATE USER
export const updateUser = async (req, res) => {
    try {
        const upuser = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const { name, email, password } = user._doc;
        if (password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        await User.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.status(200).json('Account has been updated');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//3. DELETE USER
export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//4. GET USER BY ID
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//5. GET USER STATS
export const getUserStats = async (req, res) => {
    try {
        const date = new Date();
        const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
        const data = await User.aggregate([
            {
                $match: {
                    createdAt: { $gte: lastYear }
                }
            },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
