const express = require("express");
const router = express.Router();
const {
  addSurvey,
  getAllSurveys,
  getSurveyById,
  updateSurvey,
  deleteSurvey,
} = require('../controllers/survey.controllers');

router.post('/', addSurvey);
router.get('/', getAllSurveys);
router.get('/:id', getSurveyById);
router.put('/:id', updateSurvey);
router.delete('/:id', deleteSurvey);

module.exports = router;
