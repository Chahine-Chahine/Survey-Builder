const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  text: String,
});

const questionSchema = new mongoose.Schema({
  text: String,
  type: String,
  answers: [answerSchema],
});

const surveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  questions: [questionSchema],
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
}, { timestamps: true });

surveySchema.pre('save', async function (next) {
  console.log('saved successfully');
  next();
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
