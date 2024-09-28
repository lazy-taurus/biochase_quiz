import jwt from 'jsonwebtoken';
import Admin from '../model/Admin.js'; // Adjust the path to your Admin model

const authAdmin = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    const error = new Error('Authentication invalid');
    error.statusCode = 401;
    return next(error);
  }

  const token = authHeader.split(' ')[1];

  try {
    // Verify the JWT token
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // Find the admin based on the payload
    const admin = await Admin.findById(payload.adminId);
    if (!admin) {
      const error = new Error('Not authorized as admin');
      error.statusCode = 403;
      return next(error);
    }

    // Attach admin information to the request object
    req.admin = { adminId: admin.id, username: admin.username };

    next();
  } catch (error) {
    const err = new Error('Authentication invalid');
    err.statusCode = 401;
    next(err);
  }
};

export default authAdmin;
