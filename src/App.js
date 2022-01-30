import React from 'react';
import './App.css';
import StartScreen from './components/StartScreen.js'
import Question from './components/Question'
import Butterflies from './components/Butterflies'
import data from './data';

function App() {
  const [startPosition, setStartPosition] = React.useState(true);
  const [questionsForQuiz, setQuestionsForQuiz] = React.useState({});
  const [gameEnd, setGameEnd] = React.useState(false);
  const [gameResult, setGameResult] = React.useState(0);

  React.useEffect(function() {
    let questions = data.map((element, index) => {
      return <Question 
          key={index}
          id={index} 
          question={element.question} 
          answers={element.answers}
          handleAnswer={handleAnswer}
          userAnswer={false}
          userAnswerIndex={null}
          active={true}
      />
    });

    if (questions) {
      setQuestionsForQuiz(questions);
    }
  }, [startPosition]);

  function startQuiz() {
    setStartPosition(prevStartPosition => !prevStartPosition);
  }

  function startQuizAgain(event) {
    event.preventDefault();

    setGameEnd(false);
    setGameResult(0);
    setStartPosition(prevStartPosition => !prevStartPosition);
  }

  function checkAnswers(event) {
    event.preventDefault();

    setGameEnd(true);
  }

  function handleAnswer(event, questionIndex, answerIndex, isCorrect, isActive) {
    event.preventDefault();

    if (isActive) {
      setQuestionsForQuiz(prevQuestionsForQuiz => prevQuestionsForQuiz.map((element, index) => {        
          if (index != questionIndex) {
            return element;
          } else {
            return <Question
                key={index}
                id={index} 
                question={element.props.question} 
                answers={element.props.answers}
                handleAnswer={handleAnswer}
                userAnswer={isCorrect}
                userAnswerIndex={answerIndex}
                active={false}
            />
          }
      }));

      if (isCorrect) {
        setGameResult(prevGameResult => (prevGameResult + 1));
      }
    }    
  }

  return (
    <div className="main">
      {(gameEnd && gameResult == questionsForQuiz.length) && <Butterflies />}
      {
        startPosition ? 
        <StartScreen StartQuiz={startQuiz} /> : 
        <form className='quiz'>
            {questionsForQuiz}
            {gameEnd && <p className='quiz__result'>Вы набрали {gameResult}/{questionsForQuiz.length} правильных ответов</p>}
            <button className='button quiz__button' onClick={gameEnd ? startQuizAgain : checkAnswers}>{gameEnd ? 'Начать заново' : 'Проверить ответы'}</button>
        </form>
      }
    </div>
  );
}

export default App;
