// eslint-disable-next-line import/extensions
import express from 'express';
// eslint-disable-next-line import/extensions
import { register, login, otpSent, otpVerification } from '../controllers/userControllers.js';

const router = express.Router();

// router.post('/',adduser)
router.post('/signup', register);
router.post('/login', login);
router.post('/sentotp', otpSent);
router.post('/otpverification', otpVerification);

export default router;
