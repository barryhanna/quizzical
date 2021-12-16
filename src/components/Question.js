import React, { useState, useEffect } from 'react';
import QuestionOption from './QuestionOption';

const Question = ({ q: question, correct, wrong }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [options, setOptions] = useState([]);
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  useEffect(() => {
    setOptions(shuffleArray([correct, ...wrong]));
  }, []);

  console.log(`Question: ${question}`);
  console.log(`Correct: ${correct}`);
  console.log(`Wrong: ${wrong}`);

  const toggleSelected = (e) => {
    e.target.classList.toggle('selected');
    console.log(`i: ${e.target.getAttribute('data-i')}`);
    setSelectedIndex(e.target.i);
    console.log(selectedIndex);
  };

  return (
    <div className="question">
      <p
        className="question--text"
        dangerouslySetInnerHTML={{ __html: `${question}` }}
      />
      <div className="question--answer-options">
        {options.map((opt, i) => {
          const isSelected = i === selectedIndex ? true : false;
          return (
            <QuestionOption
              selected={isSelected}
              optionText={opt}
              data-i={i}
              onClick={toggleSelected}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Question;
