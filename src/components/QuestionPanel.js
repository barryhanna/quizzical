import React from 'react';
import Question from './Question';

const QuestionPanel = () => {
  return (
    <div>
      <Question />
      <Question />
      <Question />
      <Question />
      <button>Check answers</button>
    </div>
  );
};

export default QuestionPanel;
