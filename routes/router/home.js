const express = require('express');
const router = express.Router();
const quizController = require('../../controllers/quizController');

router.get('/', (req, res, next) => {
  res.render('home');
});

router.get('/api', (req, res, next) => {
  quizController.doGetQuiz(req, res, next);
});

module.exports = router;
