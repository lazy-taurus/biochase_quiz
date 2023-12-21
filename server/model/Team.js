import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
  member1: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 20,
    required: true,
  },
  member2: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
  member3: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
  phoneNum: {
    type: String,
    trim: true,
    validate: {
      validator: function (v) {
        // Use a regular expression to validate phone numbers
        return /^[0-9]{10}$/.test(v);
      },
      message: props => `${props.value} is not a valid phone number! Please enter a 10-digit number.`,
    },
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
    validate: {
      validator: function (v) {
        // Use a regular expression to validate email addresses
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`,
    },
  },
  teamname: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 20,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  class: {
    type: String,
    trim: true,
  },
  schoolname: {
    type: String,
    trim: true,
  },
  pointsEarned: {
    type: String,
    default: "0",
    trim: true,
  },
},{ timestamps: true });


const Team = mongoose.model('Teams', teamSchema);
  

export default Team;