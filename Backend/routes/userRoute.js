import express from 'express';
import { signupUser } from '../controller/user.js';

const router = express.Router();

// Signup Route
router.post('/signup', signupUser);

export default router;
