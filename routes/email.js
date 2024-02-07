import express from 'express';
import emailController from '../controllers/email.js';

const router = express.Router();

router.post('/contact', emailController.contactform);
router.post('/career', emailController.careersform)

export default router;