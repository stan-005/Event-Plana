import { PrismaClient } from '@prisma/client';
import { Booking } from '../interfaces/booking';
import { io } from '../server'; // Import io from the server

const prisma = new PrismaClient();

export const getUserBookings = async (userId: number): Promise<Booking[]> => {
  return prisma.booking.findMany({
    where: { userId }
  });
};

export const createBooking = async (booking: Booking): Promise<Booking> => {
  let ticketPrice = await prisma.event.findUnique({ where: { id: booking.eventId } }).then(event => event?.ticketPrice);
  const newBooking = await prisma.booking.create({
    data: {
      userId: booking.userId,
      eventId: booking.eventId,
      status: booking.status,
      ticketPrice: ticketPrice || 0 // Default to 0 if not provided
    }
  });

  // Emit real-time update
  io.emit('bookingCreated', newBooking);

  return newBooking;
};

export const cancelBooking = async (bookingId: number): Promise<Booking> => {
  const cancelledBooking = await prisma.booking.update({
    where: { id: bookingId },
    data: { status: 'cancelled' }
  });

  // Emit real-time update
  io.emit('bookingCancelled', cancelledBooking);

  return cancelledBooking;
};
