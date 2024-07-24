import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class AdminService {
  // Existing methods
  async getUserStatistics() {
    const totalUsers = await prisma.user.count();
    const organizers = await prisma.user.count({ where: { role: 'organizer' } });
    const attendees = await prisma.user.count({ where: { role: 'user' } });

    return {
      totalUsers,
      organizers,
      attendees,
    };
  }

  async getEventStatistics() {
    const totalEvents = await prisma.event.count();
    const totalBookings = await prisma.booking.count();
    const revenue = await prisma.booking.aggregate({
      _sum: {
        ticketPrice: true,
      },
    });

    return {
      totalEvents,
      totalBookings,
      revenue: revenue._sum.ticketPrice || 0,
    };
  }

  async generateReports() {
    // Implementation for generating reports
  }

  // New methods
  async getAllUsers() {
    return await prisma.user.findMany();
  }

  async updateUserRole(userId: number, role: 'user' | 'organizer' | 'admin') {
    return await prisma.user.update({
      where: { id: userId },
      data: { role }
    });
  }

  async deleteUser(userId: number): Promise<string> {
    return prisma.$transaction(async (prisma) => {
      // Delete all bookings associated with the user
      await prisma.booking.deleteMany({
        where: {
          userId: userId,
        },
      });
  
      // Delete the user
      await prisma.user.delete({
        where: {
          id: userId,
        },
      });
  
      // Return success message
      return 'User deleted successfully';
    });
  }  
}  