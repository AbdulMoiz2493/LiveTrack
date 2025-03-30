import express from 'express';
import {
  saveLocation,
  getLocations,
  getLocationHistory,
  getSharedLocations
} from '../controllers/locationController.js';
import authMiddleware from '../Middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, saveLocation);
router.get('/', authMiddleware, getLocations);
router.get('/history/:userId', authMiddleware, getLocationHistory);
router.get('/shared', authMiddleware, getSharedLocations);

export default router;