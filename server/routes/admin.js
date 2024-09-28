import express from 'express';
import adminLogin, {
  viewAllResponses,
  viewSingleResponse,
  addScoreToResponse,
  registerAdmin,
} from '../controllers/admin.js';
import authAdmin from '../middleware/authAdmin.js';

const adminRouter = express.Router();

// Admin routes
adminRouter.post('/responses', authAdmin, viewAllResponses); // View all responses
adminRouter.post('/answers', authAdmin, viewSingleResponse); // View a specific response by its ID
adminRouter.post('/addscore', authAdmin, addScoreToResponse); // Add score to a specific response
adminRouter.post('/login', adminLogin); // Add score to a specific response
adminRouter.post('/register', registerAdmin); // Add score to a specific response

export default adminRouter;
