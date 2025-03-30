import express from 'express';
import { 
  createRoom, 
  joinRoom, 
  getRoomMembers, 
  leaveRoom 
} from '../controllers/roomController.js';
import authMiddleware from '../Middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createRoom);
router.post('/:roomId/join', authMiddleware, joinRoom);
router.get('/members', authMiddleware, getRoomMembers);
router.post('/leave', authMiddleware, leaveRoom);

export default router;