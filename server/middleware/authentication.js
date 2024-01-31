import Team from '../model/Team.js';
import jwt from 'jsonwebtoken';


const auth = async (req, res, next) => {
    // check header
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        const error = new Error('Authentication invalid');
        error.statusCode = 401;
        next(error);
    }
    const token = authHeader.split(' ')[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        // attach the user to the routes
        req.user = { userName: payload.userName };
        next();
    } catch (error) {
        const err = new Error('Authentication invalid');
        next(err);
    }
}

export default auth;