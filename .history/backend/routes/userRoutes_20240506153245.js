import express from 'express'
import { Register } from '../controllers/User';

const router = express.Router();

router.route('/register').post(Register)