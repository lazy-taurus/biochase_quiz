import Team from "../model/Team.js";

const getTeamMembers = async (req, res, next) => {
    console.log(req.user);
    const { userName } = req.user;
    try {
        const team = await Team.findOne({ userName });
        if (!team) {
            return res.status(404).json({success: false, message: 'Team not found' });
        }
        res.status(200).json({success: true, message: 'Team members fetched successfully', data: team.members });
    } catch (error) {
        next(error);
    }
}

export {getTeamMembers};