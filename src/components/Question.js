import React from 'react';
import QuestionOption from './QuestionOption';

const Question = ({ q: question, correct, wrong }) => {
  const options = [correct, ...wrong];
  return (
    <div className="question">
      <p className="question--text">{question}</p>
      <div className="question--answer-options">
        <QuestionOption optionText={correct} />
        <QuestionOption optionText={wrong[0]} />
        <QuestionOption optionText={wrong[1]} />
        <QuestionOption optionText={wrong[2]} />
      </div>
    </div>
  );
};

export default Question;
