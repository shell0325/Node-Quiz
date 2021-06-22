const fetch = require('node-fetch');

module.exports = {
  getQuiz: async function () {
    const quizQuestion = [];
    const quizGenre = [];
    const quizDifficulty = [];
    const quizAnswer = [];
    const quizFaultAnswer = [];
    const response = await fetch('https://opentdb.com/api.php?amount=10');
    const data = await response.json();
    for (let index = 0; index < 10; index++) {
      quizQuestion.push(data.results[index].question);
      quizGenre.push(data.results[index].category);
      quizDifficulty.push(data.results[index].difficulty);
      quizFaultAnswer.push(data.results[index].incorrect_answers);
      quizAnswer.push(data.results[index].correct_answer);
    }
    return {
      quizDifficulty,
      quizGenre,
      quizQuestion,
      quizAnswer,
      quizFaultAnswer,
    };
  },
};
