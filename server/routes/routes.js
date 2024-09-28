import express from 'express';
import { login, register } from '../controllers/auth.js';
import { addMember } from '../controllers/addMember.js';
import auth from '../middleware/authentication.js';
import { getTeamMembers } from '../controllers/getTeamMembers.js';
import { removeMember } from '../controllers/removeMember.js';
import { submitResponse } from '../controllers/admin.js';
import { getLeaderboard } from '../controllers/leaderboard.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/leaderboard', getLeaderboard);
router.get('/getTeamMembers', auth, getTeamMembers);
router.post('/addMember', auth, addMember);
router.post('/removeMember', auth, removeMember);
router.post('/response', auth, submitResponse); // Submit a response

export default router;
