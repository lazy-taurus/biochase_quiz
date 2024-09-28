import jwt from 'jsonwebtoken';
import Admin from '../model/Admin.js'; // Adjust the path to your Admin model

const authAdmin = async (req, res, next) => {
  // console.log(req.headers);
  const authHeader = req.headers.authorization
    ? req.headers.authorization
    : req.body.headers.Authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    const error = new Error('Authentication invalid');
    error.statusCode = 401;
    return next(error);
  }

  // console.log(2);
  const token = authHeader.split(' ')[1];

  try {
    // Verify the JWT token
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(3);

    // Find the admin based on the payload
    const admin = await Admin.findById(payload.adminId);
    if (!admin) {
      const error = new Error('Not authorized as admin');
      error.statusCode = 403;
      return next(error);
    }
    // console.log(4);

    // Attach admin information to the request object
    req.admin = { adminId: admin.id, username: admin.username };

    // console.log(5);
    next();
  } catch (error) {
    // console.log(error);
    const err = new Error('Authentication invalid');
    err.statusCode = 401;
    next(err);
  }
};

export default authAdmin;
