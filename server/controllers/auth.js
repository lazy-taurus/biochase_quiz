import Team from "../model/Team.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


// Register
const register = async (req, res) => {

  // Hashing the password
  const { password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const tempUser = { ...req.body, password: hashedPassword };
  const team = await Team.create({ ...tempUser });

  // Generating the JWT
  const token = jwt.sign({ teamId: team._id, name: team.teamname }, "moksha123", {
    expiresIn: "1000d",
  });
  res.status(201).json({ team: { name: team.teamname }, token, message: 'Registered✅' });
};



// Login
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error('Please enter all fields')
  }
  const team = await Team.findOne({ email });
  if (!team) {
    throw new Error('Invalid email or password')
  }
  // compare password
  const isPasswordCorrect = await bcrypt.compare(password, team.password)
  if (!isPasswordCorrect) {
    throw new Error('Invalid email or password')
  }

  // Generating the JWT
  const token = jwt.sign({ teamId: team._id, name: team.name }, "jwtSecret", {
    expiresIn: "1000d",
  });
  res.status(201).json({ team: { name: team.teamname }, token, message: 'Logged In✅' });
};

export { login, register };
