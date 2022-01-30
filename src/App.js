import React from 'react';
import './App.css';
import StartScreen from './components/StartScreen.js'
import Question from './components/Question'
import Butterflies from './components/Butterflies'

function App() {
  const [startPosition, setStartPosition] = React.useState(true);
  const [questions, setQuestions] = React.useState({});
  const [questionsForQuiz, setQuestionsForQuiz] = React.useState({});
  const [correctAnswers, setCorrectAnswers] = React.useState([]);
  const [userAnswers, setUserAnswers] = React.useState([]);
  const [gameEnd, setGameEnd] = React.useState(false);
  const [gameResult, setGameResult] = React.useState(0);

  function startQuiz() {
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
            userAnswer=""
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

  function handleAnswer(event, indexAnswer) {
    event.preventDefault();

    setUserAnswers(prevUsersAnswers => {
      let newUsersAnswers = [...prevUsersAnswers];
      newUsersAnswers.push(event.target.value);
      return newUsersAnswers;
    });

    let updatedPropsForQuestions = questionsForQuiz.map((element, index) => ({
      ...element.props,
      userAnswer: userAnswers[index]
    }));

    let udatedQuestionsForUestions = updatedPropsForQuestions.map((element, index) => {
      if (index == indexAnswer) {
        return <Question 
            key={index} 
            id={index} 
            question={element.question} 
            answers={element.answers}
            handleAnswer={(event) => handleAnswer(event)}
            userAnswer={element.userAnswer}
            active={false}
        />
      } else {
        return element;
      }

      setQuestionsForQuiz(prevQuestionsForQuiz => udatedQuestionsForUestions);
    });
  }

  function checkAnswers(event) {
    event.preventDefault();

    setUserAnswers(prevUsersAnswers => deleteDoubles(prevUsersAnswers));

    if (userAnswers.length == 4) {
      setGameEnd(true);

      for (let i = 0; i < userAnswers.length; i ++) {
        if (userAnswers[i] == correctAnswers[i]) {
          setGameResult(prevGameResult => (prevGameResult + 1));
        }
      }
    }
  }

  function deleteDoubles(iterable) {
    if (!Array.isArray(iterable)) {
      iterable = iterable.split('');
    }
    
    for (let i = 0; i < iterable.length; i ++) {
      if (iterable[i - 1] === iterable[i]) {
        iterable.splice(i, 1);
        i--;
      }
    }
    
    return iterable;
  }

  function startQuizAgain() {
    setStartPosition(prevStartPosition => !prevStartPosition);
    setGameResult(0);
    setUserAnswers([]);

    if (gameEnd) {
      setGameEnd(false);      
    }
  }

  return (
    <div className="main">
      {
        startPosition ? 
        <StartScreen StartQuiz={startQuiz} /> : 
        <form className='quiz'>
            {questionsForQuiz}
            {gameEnd && <p className='quiz__result'>You scored {gameResult}/{correctAnswers.length} correct answers</p>}
            <button className='button quiz__button' onClick={gameEnd ? startQuizAgain : checkAnswers}>{gameEnd ? 'Play again' : 'Check answers'}</button>
        </form>
      }
    </div>
  );
}

export default App;
