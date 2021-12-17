import React, { useState, useEffect } from 'react';
import QuestionOption from './QuestionOption';

const Question = ({ question, options, setAnswer, playerAnswer }) => {
  return (
    <div className="question">
      <p
        className="question--text"
        dangerouslySetInnerHTML={{ __html: `${question}` }}
      />
      <div className="question--answer-options">
        {options.map((opt, i) => {
          return (
            <QuestionOption
              selected={playerAnswer === i ? true : false}
              key={i}
              optionText={opt}
              index={i}
              onClick={() => setAnswer(i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Question;
