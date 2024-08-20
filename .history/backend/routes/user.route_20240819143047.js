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


const userRoute = Router();

//UPDATE + DELETE USER
userRoute
    .route('/:id')
    .put(verifyTokenAndAuthorization, updateUser)
    .delete(verifyTokenAndAuthorization, deleteUser);   
    
//GET ALL USERS
userRoute
    .route('/')
    .get(verifyTokenAndAdmin,getAllUsers);    

//GET USER BY ID
userRoute
    .route('/find/:id')
    .get(verifyTokenAndAdmin, getUserById);  
    
//GET USER STATS
userRoute
    .route('/stats')
    .get(verifyTokenAndAdmin, getUserStats);    

export default userRoute;
