import Location from '../models/Location.js';

export const saveLocation = async (req, res) => {
  try {
    const { latitude, longitude, accuracy, speed } = req.body;
    const userId = req.userId;

    const location = new Location({
      userId,
      latitude,
      longitude,
      accuracy,
      speed,
    });

    await location.save();

    res.status(201).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLocations = async (req, res) => {
  try {
    const userId = req.userId;
    const locations = await Location.find({ userId })
      .sort({ timestamp: -1 })
      .limit(50);

    res.json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLocationHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const { startDate, endDate } = req.query;

    let query = { userId };

    if (startDate && endDate) {
      query.timestamp = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    const locations = await Location.find(query).sort({ timestamp: 1 });

    res.json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getSharedLocations = async (req, res) => {
  try {
    const userId = req.userId;
    
    // Get accepted connections
    const connections = await Connection.find({
      $or: [{ requester: userId }, { recipient: userId }],
      status: 'accepted'
    });

    const connectedUserIds = connections.map(conn => 
      conn.requester.toString() === userId ? conn.recipient : conn.requester
    );

    // Get latest location for each connected user
    const locations = await Location.aggregate([
      { $match: { userId: { $in: connectedUserIds } } },
      { $sort: { timestamp: -1 } },
      { $group: { _id: "$userId", doc: { $first: "$$ROOT" } } }
    ]);

    res.json(locations.map(loc => loc.doc));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};