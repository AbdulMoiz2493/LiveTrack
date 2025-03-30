import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

import authRoutes from './routes/authRoutes.js';
import locationRoutes from './routes/locationRoutes.js';
import roomRoutes from './routes/roomRoutes.js';

dotenv.config();

const app = express();
const server = http.createServer(app);

// Socket.io setup
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api/rooms', roomRoutes);

// Database connection
mongoose.connect(process.env.MONGO_DB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Socket.io connection
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  // Join room for private messaging
  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
    console.log(`User joined room ${roomId}`);
  });

  // Handle location updates for room members
  socket.on('updateLocation', (data) => {
    // Broadcast to all members of the room
    io.to(data.roomId).emit('locationUpdated', {
      userId: data.userId,
      username: data.username,
      latitude: data.latitude,
      longitude: data.longitude
    });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { io };