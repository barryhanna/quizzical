import React, { useState, useEffect } from 'react';
import Question from './Question';

const QuestionPanel = () => {
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    const data = await fetch(
      'https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple'
    );
    const json = await data.json();
    setQuestions(json.results.map((q) => parseQuestion(q)));
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

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div>
      {questions.length > 0 &&
        questions.map((question, i) => (
          <Question
            key={i}
            q={question.q}
            correct={question.correct}
            wrong={question.wrong}
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
