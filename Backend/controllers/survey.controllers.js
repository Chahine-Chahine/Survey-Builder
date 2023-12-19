const Survey = require('../models/survey.schema');
exports.addSurvey = async (req, res) => {
  try {
    const { title, adminId, questions } = req.body;

    // Create a new survey instance
    const newSurvey = new Survey({
      title,
      adminId,
      questions,
    });

    // Save the new survey to the database
    newSurvey.save((err, savedSurvey) => {
      if (err) {
        console.error('Error saving survey:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Survey saved successfully:', savedSurvey);
        res.status(201).json({ survey: savedSurvey });
      }
    });
  } catch (error) {
    console.error('Error creating survey:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
