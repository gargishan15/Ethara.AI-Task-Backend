import express from 'express';
import { registerUser, loginUser, getUsers } from '../controllers/auth.js';
import protect from '../middlewares/auth.js';
import authorizeRoles from '../middlewares/role.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// Admin can list all users (for member assignment)
router.get('/users', protect, authorizeRoles('admin'), getUsers);

export default router;
