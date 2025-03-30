import express from 'express';
import { register, login, getMe, searchUsers, updateMe } from '../controllers/authController.js';
import authMiddleware from '../Middlewares/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleware, getMe);
router.patch('/me', authMiddleware, updateMe);
router.get('/search', authMiddleware, searchUsers);

export default router;