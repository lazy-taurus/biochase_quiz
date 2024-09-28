import Response from '../model/Answers.js';

const getLeaderboard = async (req, res, next) => {
  try {
    // Fetching responses while excluding the answers field
    const responses = await Response.find()
      .select('-answers') // Exclude answers field
      .sort({ score: -1 }); // Sort by score in descending order

    res.status(200).json({ success: true, data: responses });
  } catch (error) {
    next(error);
  }
};

export { getLeaderboard };
