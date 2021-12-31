import React from 'react';
import './App.css';
import StartScreen from './components/StartScreen.js'
import Question from './components/Question'

function App() {
  const [startPosition, setStartPosition] = React.useState(true);
  const [questions, setQuestions] = React.useState({});
  const [questionsForQuiz, setQuestionsForQuiz] = React.useState({});
  const [correctAnswers, setCorrectAnswers] = React.useState([]);
  const [userAnswers, setUserAnswers] = React.useState([]);
  const [gameEnd, setGameEnd] = React.useState(true);

  function StartQuiz() {
    setStartPosition(prevStartPosition => !prevStartPosition);
    const questionsForQuizArray = questions.results.map(
      (value, index) => {
        let answersArray = [];
        answersArray = [...value.incorrect_answers];
        answersArray.push(value.correct_answer);
        answersArray.sort(() => Math.random() - 0.5);

        return <Question 
            key={index} 
            id={index} 
            question={value.question} 
            answers={answersArray} 
            correctAnswer={value.correct_answer}
            handleAnswer={(event) => handleAnswer(event)}
        />
      }
    );

    const correctAnswersArray = questions.results.map(
      (value, index) => {
        return value.correct_answer;
      }
    );

    setQuestionsForQuiz(prevQuestionsForQuiz => questionsForQuizArray);
    setCorrectAnswers(prevCorrectAnswers => correctAnswersArray);
  }

  React.useEffect(function() {
      fetch("https://opentdb.com/api.php?amount=4&category=12&difficulty=easy&type=multiple")
      .then(res => res.json())
      .then(questions => setQuestions(questions))
  }, [startPosition]);

  function handleAnswer(event) {
    event.preventDefault();

    setUserAnswers(prevUsersAnswers => {
      let newUsersAnswers = [...prevUsersAnswers];
      newUsersAnswers.push(event.target.value);
      return newUsersAnswers;
    });
  }

  function checkAnswers() {

  }

  return (
    <div className="main">
      {
        startPosition ? 
        <StartScreen StartQuiz={StartQuiz} /> : 
        <form className='quiz'>
            {questionsForQuiz}
            <button className='button quiz__button'>{gameEnd ? 'Play again' : 'Check answers'}</button>
        </form>
      }
    </div>
  );
}

export default App;
