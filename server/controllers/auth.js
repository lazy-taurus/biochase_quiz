import Team from "../model/Team.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


// Register
const register = async (req, res, next) => {
  console.log(req.body);
  try {
    // Hashing the password
    const { userName, password, teamName, schoolName } = req.body;
    const existingTeam = await Team.findOne({ userName });
    if (existingTeam) {
      return res.status(400).json({ success: false, message: 'Username already exists' });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const tempUser = { ...req.body, password: hashedPassword };
    const team = await Team.create({ ...tempUser });

    // Generating the JWT
    const token = jwt.sign({ teamId: team._id, userName: team.userName }, process.env.JWT_SECRET, {
      expiresIn: "1000d",
    });
    res.status(201).json({ success: true, message: 'Registered Successfully✅', data: token });
  } catch (error) {
    next(error);
  }
};



// Login
const login = async (req, res, next) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    const error = new Error('Please enter all fields');
    return next(error);
  }
  const team = await Team.findOne({ userName });
  if (!team) {
    const error = new Error('Invalid email or password');
    return next(error);
  }
  // compare password
  const isPasswordCorrect = await bcrypt.compare(password, team.password)
  if (!isPasswordCorrect) {
    const error = new Error('Invalid email or password');
    return next(error);
  }

  // Generating the JWT
  const token = jwt.sign({ teamId: team._id, userName: team.userName }, process.env.JWT_SECRET, {
    expiresIn: "1000d",
  });
  res.status(201).json({ success: true, message: 'Logged In Successfully✅', data: token });
};

export { login, register };
