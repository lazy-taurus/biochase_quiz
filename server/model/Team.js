import mongoose from 'mongoose';

const MemberSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
        trim: true
    },
    email: {
      type: String,
      // required: true,
      trim: true
    },
    whatsappNumber: {
        type: String,
        // required: true,
        trim: true
    }
});

const TeamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        // required: true,
        trim: true
    },
    userName: {
      type: String,
      unique: true,
      // required: true,
      trim: true
    },
    password: {
        type: String,
        // required: true
    },
    schoolName: {
        type: String,
        // required: true,
        trim: true
    },
    pointsEarned: {
        type: String,
        default: 0
    },
    members: [MemberSchema]
});

const Team = mongoose.model('Team', TeamSchema);

export default Team;