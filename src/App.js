import './App.css';
import Intro from './components/Intro';
import QuestionPanel from './components/QuestionPanel';
import { useState } from 'react';

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => setGameStarted(true);

  return (
    <div className="App">
      {!gameStarted ? <Intro startGame={startGame} /> : <QuestionPanel />}
    </div>
  );
}

export default App;
