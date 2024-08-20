
import bcrypt from "bcrypt";
import User from '../models/user.model.js';

//GET ALL USERS
// http://localhost:5173/user?new=true
export const getAllUsers = asyncHandler(async (req, res) => {
    const query = req.query.new;
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(2)
      : await User.find();
    res.status(200).json(users);
  });
  
//UPDATE USER
export const updateUser = asyncHandler(async (req, res) => {
    if (req.body.password) {
          req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString();
        }

    await User.findByIdAndUpdate(req.params.id, {$set: req.body});
    res.status(200).json('Account has been updated');
});

//DELETE USER
export const deleteUser = asyncHandler(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...")
});

//GET USER BY ID
export const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
});

//GET USER STATS
export const getUserStats = asyncHandler(async (req, res) => {
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
    res.status(200).json(data)
});