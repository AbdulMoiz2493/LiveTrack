import Room from '../models/Room.js';
import User from '../models/User.js';

export const createRoom = async (req, res) => {
  try {
    const { name } = req.body;
    const userId = req.userId;

    const room = new Room({
      name,
      members: [userId],
    });

    await room.save();
    
    // Update user's room
    await User.findByIdAndUpdate(userId, { room: room._id });

    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const joinRoom = async (req, res) => {
  try {
    const { roomId } = req.params;
    const userId = req.userId;

    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    // Add user to room if not already a member
    if (!room.members.includes(userId)) {
      room.members.push(userId);
      await room.save();
    }

    // Update user's room
    await User.findByIdAndUpdate(userId, { room: room._id });

    res.json({ message: 'Joined room successfully', room });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRoomMembers = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);
    
    if (!user.room) {
      return res.status(400).json({ message: 'User is not in any room' });
    }

    const room = await Room.findById(user.room).populate('members', 'username email currentLocation');
    
    res.json(room.members.filter(member => member._id.toString() !== userId));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const leaveRoom = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId);

    if (!user.room) {
      return res.status(400).json({ message: 'User is not in any room' });
    }

    const room = await Room.findById(user.room);
    
    // Remove user from room members
    room.members = room.members.filter(member => member.toString() !== userId);
    await room.save();

    // Remove room from user
    user.room = undefined;
    await user.save();

    res.json({ message: 'Left room successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};