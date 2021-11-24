import React from 'react';
import QuestionOption from './QuestionOption';

const Question = () => (
  <div className="question">
    <p className="question--text">How would you say goodbye in Spanish?</p>
    <div className="question--answer-options">
      <QuestionOption optionText={'Adios'} />
      <QuestionOption optionText={'Hola'} />
      <QuestionOption optionText={'Au Revoir'} />
      <QuestionOption optionText={'Salir'} />
    </div>
  </div>
);

export default Question;
