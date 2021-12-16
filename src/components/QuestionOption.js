import React from 'react';

const QuestionOption = ({ optionText, onClick, selected }) => (
  <div
    className={`question--option ${selected ? 'selected' : ''}`}
    onClick={onClick}
    dangerouslySetInnerHTML={{ __html: `${optionText}` }}
  />
);

export default QuestionOption;
