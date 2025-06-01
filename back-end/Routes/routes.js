import express from 'express';
import { signup, login } from '../Controllers/auth.controllers.js';
import { validateSignup, validateLogin } from '../Middlewares/auth.middlewares.js';

const router = express.Router();

router.post('/signup', validateSignup, signup);
router.post('/login', validateLogin, login);

export default router;