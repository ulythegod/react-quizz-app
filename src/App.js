import React from 'react';
import './App.css';
import StartScreen from './components/StartScreen.js'
import Quiz from './components/Quiz';

function App() {
  const [startPosition, setStartPosition] = React.useState(true);
  const [questions, setQuestion] = React.useState({});
  const [userAnswers, setUserAnswers] = React.useState([]);

  function StartQuiz() {
    setStartPosition(prevStartPosition => !prevStartPosition);
  }

  React.useEffect(function() {
      fetch("https://opentdb.com/api.php?amount=4&category=12&difficulty=easy&type=multiple")
      .then(res => res.json())
      .then(questions => setQuestion(questions))
  }, [startPosition]);

  function handleAnswer(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <div className="main">
      {startPosition ? <StartScreen StartQuiz={StartQuiz} /> : <Quiz questions={questions} handleAnswer={(event) => handleAnswer(event)} />}
    </div>
  );
}

export default App;
