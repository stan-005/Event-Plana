import { Request, Response } from 'express';
import { EventService } from '../services/eventService';

const eventService = new EventService();

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await eventService.getAllEvents();
    res.status(200).json(events);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: message });
  }
};

export const addEvent = async (req: Request, res: Response) => {
  try {
    const event = req.body;
    const newEvent = await eventService.createEvent(event);
    res.status(201).json(newEvent);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: message });
  }
};
