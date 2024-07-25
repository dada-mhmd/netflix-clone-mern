import express from 'express';
import { checkAuth, login, logout, register } from '../controllers/authCtrl.js';
import { protectRoutes } from '../middleware/protect.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

router.get('/checkAuth', protectRoutes, checkAuth);

export default router;
