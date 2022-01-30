import React from 'react';

export default function Question(props) {    
    const answersElements = props.answers.map(
        (value, index) => {
            return <button 
                key={index}
                className={
                    (props.active && props.userAnswerIndex == null) ? "answer active" : 
                    (!props.active && props.userAnswerIndex == index && props.userAnswer) ? "answer correct" :
                    (!props.active && props.userAnswerIndex == index && !props.userAnswer) ? "answer failed" :
                    "answer innactive"
                }
                value={value.isCorrect}
                onClick={(event) => props.handleAnswer(event, props.id, index, value.isCorrect, props.active)}
            >
                {value.answer} 
            </button>
        }
    )

    return(
        <div className='quiz__question'>
            <p className='question__title'>{props.question}</p>
            <div className='question__answers'>
                {answersElements}
            </div>
        </div>
    )
}