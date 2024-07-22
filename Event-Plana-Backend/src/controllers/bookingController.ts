import { Request, Response } from 'express';
import { getUserBookings, createBooking, cancelBooking } from '../services/bookingService';
import { notificationService } from '../services/notificationService';
import { PrismaClient } from '@prisma/client'; // Import PrismaClient from '@prisma/client'

const prisma = new PrismaClient(); // Create an instance of PrismaClient

export const getBookings = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  const bookings = await getUserBookings(userId);
  res.status(200).json(bookings);
};

export const bookEvent = async (req: Request, res: Response) => {
  const booking = req.body;
  const newBooking = await createBooking(booking);

  try {
    // Fetch user and event details
    const user = await prisma.user.findUnique({ where: { id: booking.userId } });
    const event = await prisma.event.findUnique({ where: { id: booking.eventId } });

    // Send email notification
    const subject = 'Booking Confirmation';
    const text = `Dear ${user?.username},\n\nYou have successfully booked a ticket for the event: ${event?.title}.\n\nThank you!`;

    await notificationService.sendEmail(user?.email as string, subject, text);

    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

export const cancelUserBooking = async (req: Request, res: Response) => {
  const bookingId = parseInt(req.params.bookingId);
  const cancelledBooking = await cancelBooking(bookingId);
  res.status(200).json(cancelledBooking);
};
