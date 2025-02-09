import { PrismaClient } from '@prisma/client';
import { Event } from '../interfaces/event';

const prisma = new PrismaClient();

export class EventService {
  async getAllEvents(): Promise<Event[]> {
    return prisma.event.findMany();
  }

  async createEvent(event: Event): Promise<Event> {
    return prisma.event.create({
      data: {
        title: event.title,
        description: event.description,
        date: event.date,
        image: event.image,
        location: event.location,
        ticketPrice: event.ticketPrice,
        organizerId: event.organizerId,
      },
    });
  }

  async updateEvent(id: number, data: Partial<Event>): Promise<Event> {
    return prisma.event.update({
      where: { id: Number(id) }, // Convert id to number
      data,
    });
  }

  async deleteEvent(id: number): Promise<Event> {
    return prisma.event.delete({
      where: { id: Number(id) }, // Convert id to number
    });
  }

  async getEventStatistics(userId: number) {
    const events = await prisma.event.findMany({
      where: { organizerId: Number(userId) }, // Convert userId to number
      include: {
        bookings: true,
      },
    });

    return events.map(event => ({
      eventId: event.id,
      title: event.title,
      totalBookings: event.bookings.length,
      revenue: event.bookings.reduce((acc, booking) => acc + event.ticketPrice, 0),
    }));
  }

  async getStatisticsForEvent(eventId: number) {
    const event = await prisma.event.findUnique({
      where: { id: Number(eventId) }, // Convert eventId to number
      include: {
        bookings: true,
      },
    });

    if (!event) {
      throw new Error('Event not found');
    }

    return {
      eventId: event.id,
      title: event.title,
      totalBookings: event.bookings.length,
      revenue: event.bookings.reduce((acc, booking) => acc + event.ticketPrice, 0),
    };
  }

  async getAllEventStatistics() {
    const events = await prisma.event.findMany({
      include: {
        bookings: true,
      },
    });

    return events.map(event => ({
      eventId: event.id,
      title: event.title,
      totalBookings: event.bookings.length,
      revenue: event.bookings.reduce((acc, booking) => acc + event.ticketPrice, 0),
    }));
  }

  async getEventById(id: number): Promise<Event | null> {
    return prisma.event.findUnique({
      where: { id: Number(id) }, // Convert id to number
    });
  }
}
