import express from 'express'
import {login,register} from '../controllers/auth.js'
import {addMember} from '../controllers/addMember.js';
import auth from '../middleware/authentication.js';
import { getTeamMembers } from '../controllers/getTeamMembers.js';
import { removeMember } from '../controllers/removeMember.js';

const router = express.Router()

router.post('/register',register);
router.post('/login',login);
router.get('/getTeamMembers', auth, getTeamMembers);
router.post('/addMember', auth, addMember);
router.post('/removeMember', auth, removeMember);

export default router;