import React, { useState, useEffect } from 'react';
import Question from './Question';

const QuestionPanel = () => {
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    const data = await fetch(
      'https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple'
    );
    const json = await data.json();
    setQuestions(formatQuestions(json.results.map((q) => parseQuestion(q))));
  };

  const parseQuestion = (questionToParse) => {
    const {
      question: q,
      incorrect_answers: wrong,
      correct_answer: correct,
    } = questionToParse;
    return {
      q,
      wrong,
      correct,
    };
  };

  const shuffleQuestions = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const formatQuestions = (rawQuestions) => {
    rawQuestions.forEach((question) => {
      const options = shuffleQuestions([question.correct, ...question.wrong]);
      question.options = options;
      question.options.forEach((option, i) => {
        if (option === question.correct) {
          question.correctIndex = i;
        }
      });
    });
    return rawQuestions;
  };

  function setSelectedAnswerIndex(answerIndex) {
    const questionIndex = this;
    const questionToUpdate = questions[questionIndex];
    questionToUpdate.playerAnswerIndex = answerIndex;
    setQuestions((prevQuestions) => {
      return [
        ...prevQuestions.slice(0, questionIndex),
        questionToUpdate,
        ...prevQuestions.slice(questionIndex + 1),
      ];
    });
  }

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div>
      {questions.length > 0 &&
        questions.map((question, i) => (
          <Question
            key={i}
            question={question.q}
            options={question.options}
            setAnswer={setSelectedAnswerIndex.bind(i)}
            playerAnswer={question.playerAnswerIndex}
          />
        ))}
      {questions.length === 0 ? (
        <button disabled>Loading...</button>
      ) : (
        <button>Check answers</button>
      )}
    </div>
  );
};

export default QuestionPanel;
