import { Router } from 'express';
import {getAllUsers,
        updateUser,
        deleteUser,
        getUserById,
        getUserStats
} from '../controllers/user.controller.js';
// import {verifyTokenAndAuthorization,
//         verifyTokenAndAdmin
// } from '../middleware/verifyToken.js';
import { verifyToken } from '../middleware/verifyToken.js';


const userRoutes = Router();

//UPDATE USER
userRoutes
    .route('/update/:id')
    .put(verifyToken, updateUser)

//DELETE USER
userRoutes
    .route('/delete/:id')
 
    .delete(verifyToken, deleteUser);   
    
//GET ALL USERS
userRoutes
    .route('/')
    .get(verifyToken,getAllUsers);    

//GET USER BY ID
userRoutes
    .route('/find/:id')
    .get(verifyToken, getUserById);  
    
//GET USER STATS
userRoutes
    .route('/stats')
    .get(verifyToken, getUserStats);    

export default userRoutes;
