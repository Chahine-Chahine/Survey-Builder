const mongoose = require ("mongoose");


const surveySchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    questions: [
      {
        text: String,
        type: String,
        answers: [
          {
            text: String,
          },
        ],
      },
    ],
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  }, { timestamps: true });

  surveySchema.pre(
    "save",
    async function (next) {
        console.log("saved successfully")
    }
     
  );

const survey = mongoose.model("Survey", surveySchema);

module.exports = survey;