import Team from '../model/Team.js';
import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  console.log(1);
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    const error = new Error('Authentication invalid');
    error.statusCode = 401;
    next(error);
  }
  console.log(2);
  const token = authHeader.split(' ')[1];

  try {
    console.log(0);
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // attach the user to the routes
    req.user = { userName: payload.userName, userId: payload.userId };
    console.log(3);

    console.log(payload);
    next();
  } catch (error) {
    console.log(4);
    const err = new Error('Authentication invalid');
    console.log(5);
    next(err);
  }
};

export default auth;
