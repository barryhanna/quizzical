import React from 'react';

const QuestionOption = ({ optionText, onClick, selected, index }) => (
  <div
    className={`question--option ${selected ? 'selected' : ''}`}
    onClick={onClick}
    dangerouslySetInnerHTML={{ __html: `${optionText}` }}
    data-index={index}
  />
);

export default QuestionOption;
