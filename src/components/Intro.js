import React from 'react';

const IntroPage = ({ startGame }) => (
  <div className="intro flow">
    <h1>Quizzical</h1>
    <p>Some description is needed</p>
    <button onClick={startGame}>Start quiz</button>
  </div>
);

export default IntroPage;
