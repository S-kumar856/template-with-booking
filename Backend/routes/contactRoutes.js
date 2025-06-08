// routes/contactRoutes.js
import express from 'express';
import { getContactDetails, saveContactDetails } from '../controllers/contactController.js';

const router = express.Router();

router.get('/', getContactDetails);
router.post('/', saveContactDetails);

export default router;
