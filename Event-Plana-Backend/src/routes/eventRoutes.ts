import { Router } from 'express';
import {
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent,
  getEventStatistics,
  getEventStatisticsForEvent,
  getEventById // Import the new controller method
} from '../controllers/eventController';

const router = Router();

router.get('/', getEvents);
router.post('/', addEvent);
router.get('/:id', getEventById); // New route for getting event by ID
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);
router.get('/statistics/:organizerId', getEventStatistics);
router.get('/statistics/event/:eventId', getEventStatisticsForEvent); // Route for specific event statistics

export default router;
