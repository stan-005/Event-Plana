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

export const updateEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedEvent = await eventService.updateEvent(Number(id), data); // Convert id to number
    res.json(updatedEvent);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: message });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await eventService.deleteEvent(Number(id)); // Convert id to number
    res.status(204).send();
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: message });
  }
};

export const getEventStatistics = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const stats = await eventService.getEventStatistics(Number(userId)); // Convert userId to number
    res.json(stats);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: message });
  }
};

export const getEventStatisticsForEvent = async (req: Request, res: Response) => {
  const { eventId } = req.params;
  try {
    const stats = await eventService.getStatisticsForEvent(Number(eventId)); // Convert eventId to number
    res.json(stats);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: message });
  }
};

export const getAllEventStatistics = async (req: Request, res: Response) => {
  try {
    const stats = await eventService.getAllEventStatistics();
    res.json(stats);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: message });
  }
};

export const getEventById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const event = await eventService.getEventById(Number(id)); // Convert id to number
    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json({ error: 'Event not found' });
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred';
    res.status(500).json({ error: message });
  }
};
