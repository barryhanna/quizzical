import React from 'react';

const QuestionOption = ({ optionText, onClick, className }) => (
  <div
    className={`question--option ${className}`}
    onClick={onClick}
    dangerouslySetInnerHTML={{ __html: `${optionText}` }}
  />
);

export default QuestionOption;
