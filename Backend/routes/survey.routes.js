const express = require("express");
const { addSurvey } = require("../controllers/survey.controllers");
const router = express.Router();


router.post("/survey" , addSurvey);


module.exports = router;
