import express from 'express';
import http from 'http'; // Import http to create an HTTP server
import { Server } from 'socket.io'; // Import Server from socket.io
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors'; // Import cors
import userRoutes from './routes/userRoutes';
import eventRoutes from './routes/eventRoutes';
import bookingRoutes from './routes/bookingRoutes';
import adminRoutes from './routes/adminRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Configure CORS to allow requests from http://localhost:4200
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Create an HTTP server
const server = http.createServer(app);

// Initialize Socket.IO
const io = new Server(server);

// Middleware
app.use(bodyParser.json());

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/admin', adminRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Event-Plana Backend');
});

// Socket.IO connection event
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Export io for use in other files
export { io };
