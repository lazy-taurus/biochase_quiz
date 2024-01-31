import Team from "../model/Team.js";

const removeMember = async (req, res, next)=> {
    const { memberName } = req.body;
    const { userName } = req.user;

    try {
        const team = await Team.findOne({ userName });

        if (!team) {
            return res.status(404).json({success: false, message: 'Team not found' });
        }

        const memberIndex = team.members.findIndex(member => member.name === memberName);

        if (memberIndex === -1) {
            return res.status(404).json({success: false, message: 'Member not found' });
        }

        team.members.splice(memberIndex, 1);
        await team.save();

        res.status(200).json({success: true, message: 'Member removed successfully', data: team });
    } catch (error) {
        next(error);
    }
}

export {removeMember};