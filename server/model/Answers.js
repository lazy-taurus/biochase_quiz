import mongoose from 'mongoose';

const AnswerSchema = new mongoose.Schema({
  ques: {
    type: Number,
    unique: true,
    required: true,
    trim: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const ResponseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    unique: true,
    required: true,
    trim: true,
  },
  checked: {
    type: Boolean,
    required: true,
    default: false,
  },
  score: {
    type: Number,
    trim: true,
    default: 0,
  },
  answers: [AnswerSchema],
});

const Response = mongoose.model('Response', ResponseSchema);

export default Response;
