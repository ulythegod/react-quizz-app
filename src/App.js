import React from 'react';
import './App.css';
import blobsTop from './images/blobs-top.png'
import blobsBottom from './images/blobs-bottom.png'
import StartScreen from './components/StartScreen.js'

function App() {
  const [startPosition, setStartPosition] = React.useState(true);

  function StartQuiz() {
    setStartPosition(false);
  }

  return (
    <div className="main">
      <img className='main-top__img' src={blobsTop} />
      {startPosition ? <StartScreen StartQuiz={StartQuiz} /> : ''}
      <img className='main-bottom__img' src={blobsBottom} />
    </div>
  );
}

export default App;
