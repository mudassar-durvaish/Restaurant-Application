import express from 'express';
import { sendReservation, getReservations } from '../controller/reservaton.js';

const router = express.Router();

router.post('/send', sendReservation)

// Route to fetch all reservations (new)
router.get('/', getReservations);

export default router;