const register = async (req, res) => {
  const data = req.body;
  console.log(data);
  res.status(200).json({...req.body});
};
const login = async (req, res) => {
  res.status(200).json("logged in");
};

export { login, register };
