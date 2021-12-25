import React from 'react';

export default function StartScreen(props) {
    return (
        <div className='start-screen'>
            <h1 className='start-screen__title'>Quizzical</h1>
            <p className='start-screen__description'>Some description if needed</p>
            <button className='start-screen__button' onClick={props.StartQuiz}>Start quiz</button>
        </div>
    )
}