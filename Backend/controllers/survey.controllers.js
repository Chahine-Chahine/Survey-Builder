const Survey = require('../models/survey.schema');

  // Add Survey
  exports.addSurvey = async (req, res) => {
    try {
      const { title, adminId, questions } = req.body;
  
      // Create a new survey instance
      const newSurvey = new Survey({
        title,
        adminId,
        questions,
      });
  
      // Save the new survey to the database using promises
      const savedSurvey = await newSurvey.save();
  
      console.log('Survey saved successfully:', savedSurvey);
      res.status(201).json({ survey: savedSurvey });
    } catch (error) {
      console.error('Error creating survey:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

// Get all Surveys
exports.getAllSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.status(200).json({ surveys });
  } catch (error) {
    console.error('Error fetching surveys:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get Survey by ID
exports.getSurveyById = async (req, res) => {
  const { id } = req.params;
  try {
    const survey = await Survey.findById(id);
    if (!survey) {
      return res.status(404).json({ error: 'Survey not found' });
    }
    res.status(200).json({ survey });
  } catch (error) {
    console.error('Error fetching survey by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update Survey
exports.updateSurvey = async (req, res) => {
  const { id } = req.params;
  const { title, adminId, questions } = req.body;

  try {
    const updatedSurvey = await Survey.findByIdAndUpdate(
      id,
      { title, adminId, questions },
      { new: true }
    );

    if (!updatedSurvey) {
      return res.status(404).json({ error: 'Survey not found' });
    }

    res.status(200).json({ survey: updatedSurvey });
  } catch (error) {
    console.error('Error updating survey:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete Survey
exports.deleteSurvey = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedSurvey = await Survey.findByIdAndDelete(id);
    if (!deletedSurvey) {
      return res.status(404).json({ error: 'Survey not found' });
    }
    res.status(204).json(); 
  } catch (error) {
    console.error('Error deleting survey:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
