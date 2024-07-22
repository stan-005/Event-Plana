import { Router } from 'express';
import { getBookings, bookEvent, cancelUserBooking } from '../controllers/bookingController';

const router = Router();

router.get('/user/:userId', getBookings);
router.post('/', bookEvent);
router.patch('/:bookingId', cancelUserBooking);

export default router;