import { Router } from 'express';
import { getEvents, addEvent } from '../controllers/eventController';
import { EventService } from '../services/eventService';

const router = Router();
const eventService = new EventService();

router.get('/', getEvents);
router.post('/', addEvent);

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedEvent = await eventService.updateEvent(Number(id), data);
    res.json(updatedEvent);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await eventService.deleteEvent(Number(id));
    res.status(204).send();
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: message });
  }
});

router.get('/statistics/:organizerId', async (req, res) => {
  const { organizerId } = req.params;
  try {
    const stats = await eventService.getEventStatistics(Number(organizerId));
    res.json(stats);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: message });
  }
});

export default router;
