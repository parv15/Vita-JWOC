import express from 'express';
import waitlistController from '../controllers/waitlist.controller';
import { checkAdmin } from '../middleware';

const router = express.Router();

router.post('/join-waitlist', waitlistController.joinWaitlist);
router.get('/send-invites', checkAdmin, waitlistController.sendInvites);

export default router;
