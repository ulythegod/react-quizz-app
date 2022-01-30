import React from 'react';

export default function StartScreen(props) {
    return (
        <div className='start-screen'>
            <h1 className='start-screen__title'>Кризалис квиз</h1>
            <p className='start-screen__description'>На знание Кризалис</p>
            <button className='button' onClick={props.StartQuiz}>Начать игру</button>
        </div>
    )
}