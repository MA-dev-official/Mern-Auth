import  express from 'express';
const router = express.Router();
import {singupValidation,loginValidation} from '../middlewares/authValidation.js';
import {singup,login} from '../controllers/authControllers.js'


router.post('/singup',singupValidation,singup);

router.post('/login',loginValidation,login);


export default router