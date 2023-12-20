const express = require("express");
const router = express.Router();
const {
  addSurvey,
  getAllSurveys,
  getSurveyById,
  updateSurvey,
  deleteSurvey,
} = require('../controllers/survey.controllers');

router.post('/survey', addSurvey);
router.get('/survey', getAllSurveys);
router.get('/survey/:id', getSurveyById);
router.put('/survey/:id', updateSurvey);
router.delete('/survey/:id', deleteSurvey);

module.exports = router;
