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
    const id = req.params.id;
    const tokenUserId = req.userId;
    const { password, ...inputs } = req.body;
    try {
        const updatedUser = await User.findById(req.params.id);
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        let updatedPassword = null;

        if (password) {
           updatedPassword = await bcrypt.hash(req.body.password, 10);
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
