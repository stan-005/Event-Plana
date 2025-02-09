import { Router } from 'express';
import {
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent,
  getEventStatistics,
  getEventStatisticsForEvent,
  getEventById,
  getAllEventStatistics // Import the new controller method
} from '../controllers/eventController';

const router = Router();

router.get('/', getEvents);
router.post('/', addEvent);
router.get('/:id', getEventById);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);
router.get('/statistics/event/:eventId', getEventStatisticsForEvent); // Ensure this is before /statistics/:userId
router.get('/statistics/:userId', getEventStatistics);
router.get('/statistics', getAllEventStatistics); // New route for getting statistics for all events

export default router;
