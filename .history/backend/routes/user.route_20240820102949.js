import { Router } from 'express';
import {getAllUsers,
        updateUser,
        deleteUser,
        getUserById,
        getUserStats
} from '../controllers/user.controller.js';
import {verifyTokenAndAuthorization,
        verifyTokenAndAdmin
} from '../middleware/verifyToken.js';


const userRoutes = Router();

//UPDATE + DELETE USER
userRoutes
    .route('upadte/:id')
    .put(verifyTokenAndAuthorization, updateUser)

//UPDATE + DELETE USER
userRoutes
    .route('upadte/:id')
    .put(verifyTokenAndAuthorization, updateUser)    
    .delete(verifyTokenAndAuthorization, deleteUser);   
    
//GET ALL USERS
userRoutes
    .route('/')
    .get(verifyTokenAndAdmin,getAllUsers);    

//GET USER BY ID
userRoutes
    .route('/find/:id')
    .get(verifyTokenAndAdmin, getUserById);  
    
//GET USER STATS
userRoutes
    .route('/stats')
    .get(verifyTokenAndAdmin, getUserStats);    

export default userRoutes;
