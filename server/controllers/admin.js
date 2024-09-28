import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Response from '../model/Answers.js';
import Admin from '../model/Admin.js';
// Admin register controller
export const registerAdmin = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    const error = new Error('Please provide both username and password');
    error.statusCode = 400;
    return next(error);
  }

  try {
    // Check if the admin already exists
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      const error = new Error('Admin with this username already exists');
      error.statusCode = 400;
      return next(error);
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin
    const admin = new Admin({
      username,
      password: hashedPassword,
    });

    // Save the new admin to the database
    await admin.save();

    // Generate a JWT token
    const token = jwt.sign(
      { adminId: admin._id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: '1000d' } // Token validity
    );

    // Send the response back with the token
    res.status(201).json({
      success: true,
      message: 'Admin registered successfully',
      token,
    });
  } catch (error) {
    next(error);
  }
};

const adminLogin = async (req, res, next) => {
  const { username, password } = req.body;

  // Validate input fields
  if (!username || !password) {
    const error = new Error('Please enter all fields');
    return next(error);
  }

  try {
    // Find the admin by username
    const admin = await Admin.findOne({ username });
    if (!admin) {
      const error = new Error('Invalid username or password');
      return next(error);
    }

    // Compare passwords
    const isPasswordCorrect = await bcrypt.compare(password, admin.password);
    if (!isPasswordCorrect) {
      const error = new Error('Invalid username or password');
      return next(error);
    }

    // Generate JWT for admin
    const token = jwt.sign(
      { adminId: admin._id, username: admin.username },
      process.env.JWT_SECRET,
      {
        expiresIn: '1000d',
      }
    );

    // Respond with token
    res.status(201).json({
      success: true,
      message: 'Admin Logged In Successfully✅',
      data: token,
    });
  } catch (error) {
    next(error); // Forward the error to the error handling middleware
  }
};

// Controller for viewing all responses
export const viewAllResponses = async (req, res, next) => {
  try {
    const responses = await Response.find();
    res.status(200).json({ success: true, data: responses });
  } catch (error) {
    next(error);
  }
};

// Controller for viewing answers of a single response
export const viewSingleResponse = async (req, res, next) => {
  const { responseId } = req.body;

  console.log(req.body);
  try {
    const response = await Response.findById(responseId);
    if (!response) {
      const error = new Error('Response not found');
      error.statusCode = 404;
      return next(error);
    }
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    next(error);
  }
};

// Controller for adding score to a response
export const addScoreToResponse = async (req, res, next) => {
  const { responseId, score } = req.body;

  if (typeof score !== 'number') {
    const error = new Error('Score must be a number');
    error.statusCode = 400;
    return next(error);
  }

  try {
    const response = await Response.findById(responseId);
    if (!response) {
      const error = new Error('Response not found');
      error.statusCode = 404;
      return next(error);
    }
    response.score = score;
    response.checked = true;
    await response.save();

    res.status(200).json({
      success: true,
      message: 'Score added successfully',
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

// Controller for team to submit a response
export const submitResponse = async (req, res, next) => {
  const { userId } = req.user;
  const { answers } = req.body;

  if (!Array.isArray(answers) || answers.length === 0) {
    const error = new Error('Answers must be a non-empty array');
    error.statusCode = 400;
    return next(error);
  }

  try {
    const existingResponse = await Response.findOne({ userId });
    if (existingResponse) {
      const error = new Error('Response already submitted');
      error.statusCode = 400;
      return next(error);
    }

    const response = new Response({
      userId,
      answers,
    });

    await response.save();
    res.status(201).json({
      success: true,
      message: 'Response submitted successfully',
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export default adminLogin;
