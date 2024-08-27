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

//UPDATE USER
userRoutes
    .route('/update/:id')
    .put(verifyTokenAndAuthorization, updateUser)

//DELETE USER
userRoutes
    .route('/delete/:id')
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
