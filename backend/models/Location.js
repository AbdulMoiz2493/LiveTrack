import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  accuracy: {
    type: Number,
  },
  speed: {
    type: Number,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Location = mongoose.model('Location', locationSchema);

export default Location;