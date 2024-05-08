import express from 'express'
import { Register } from '../controllers/User.js';

const router = express.Router();

router.route('/register').post(Register)
router.route('/login')

export default router;
