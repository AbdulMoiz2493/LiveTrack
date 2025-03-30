# LiveTrack

LiveTrack is a MERN stack-based website that enables users to share and view live locations with their friends in real time. Users can create rooms and allow their friends to join, ensuring secure and seamless tracking.

## Features

### Authentication
- Secure login and registration system.
- User authentication using JWT.

### Live Map View
- Real-time location tracking using **Leaflet**.
- Users can enable or disable location sharing at any time.
- View the live locations of friends in a shared room.
- Responsive and optimized for mobile and desktop.

### Rooms & User Management
- Users can create and join private rooms for location sharing.
- Room-based visibility to ensure only selected friends can view locations.
- Admin controls for managing room participants.

### Privacy & Security
- End-to-end encrypted data transmission.
- Users can opt in or out of location sharing.
- No tracking when the user decides to disable sharing.

## Tech Stack
- **Frontend:** React.js, Leaflet.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT, bcrypt
- **State Management:** Context API
- **Real-time Updates:** WebSockets

## Installation & Setup

### Prerequisites
- Node.js & npm installed
- MongoDB installed and running

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/AbdulMoiz2493/LiveTrack.git
   cd LiveTrack
   ```
2. Install dependencies:
   ```bash
   cd backend
   npm install

   cd frontend
   npm install
   ```
3. Set up environment variables (`.env` file in backend and frontend):

   **Backend (.env)**
   ```plaintext
   PORT=your_backend_port
   MONGO_DB_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   FRONTEND_URL=your_frontend_url
   ```

   **Frontend (.env)**
   ```plaintext
   REACT_APP_API_URL=your_backend_url
   ```

4. Start the backend:
   ```bash
   cd backend
   npm run dev
   ```
5. Start the frontend:
   ```bash
   cd frontend
   npm run dev
   ```

## Usage
- Register or log in.
- Create a new room or join an existing one.
- Enable location sharing to view live updates.
- Manage room settings as an admin.

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contact
If you have any questions, feel free to reach out:
- **Abdul Moiz**  
- Email: abdulmoiz8895@gmail.com 
- GitHub: [AbdulMoiz2493](https://github.com/AbdulMoiz2493)

