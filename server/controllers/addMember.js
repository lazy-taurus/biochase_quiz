import Team from "../model/Team.js";

const addMember = async (req, res, next) => {
    const member = req.body;
    const { userName } = req.user;

    try {
        const team = await Team.findOne({ userName });

        if (!team) {
            return res.status(404).json({success: false, message: 'Team not found' });
        }

        if (team.members.length >= 6) {
            return res.status(400).json({success: false, message: 'Team cannot have more than 6 members' });
        }

        team.members.push(member);
        await team.save();

        res.status(200).json({success: true, message: 'Member added successfully', data: team });
    } catch (error) {
        res.status(500).json({success: false, message: 'Server error', error });
    }
}

export { addMember };