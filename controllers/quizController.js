const Quiz = require('../models/quiz');

module.exports = {
  doGetQuiz: async function (req, res, next) {
    const result = await Quiz.getQuiz();
    const quizDifficulty = result.quizDifficulty;
    const quizGenre = result.quizGenre;
    const quizQuestion = result.quizQuestion;
    const quizAnswer = result.quizAnswer;
    const quizFaultAnswer = result.quizFaultAnswer;
    res.json({
      quizDifficulty,
      quizGenre,
      quizQuestion,
      quizAnswer,
      quizFaultAnswer,
    });
  },
};
