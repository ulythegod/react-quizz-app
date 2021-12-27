import React from 'react';
import './App.css';
import StartScreen from './components/StartScreen.js'
import Quiz from './components/Quiz';

function App() {
  const [startPosition, setStartPosition] = React.useState(true);
  const [questions, setQuestion] = React.useState({});

  function StartQuiz() {
    setStartPosition(false);
  }

  return (
    <div className="main">
      {startPosition ? <StartScreen StartQuiz={StartQuiz} /> : <Quiz />}
    </div>
  );
}

export default App;
