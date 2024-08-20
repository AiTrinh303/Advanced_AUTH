import {Router} from 'express';
import {}

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);