import React from 'react';

export default function Question(props) {    
    const answersElements = props.answers.map(
        (value, index) => {
            return <button 
                key={index}
                className={
                    (props.userAnswer == "") ? 
                    'answer' :
                    (props.active == true && props.userAnswer != value) ?
                    'answer innactive' :
                    (props.active == true && props.userAnswer == value) ?
                    'answer innactive correct' : ''
                }
                value={value.replace(/&quot;/g, '"').replace(/&#039;/g, '`').replace(/&amp;/g, '&')}
                onClick={(event) => {props.handleAnswer(event, index)}}
            >
                {value.replace(/&quot;/g, '"').replace(/&#039;/g, '`').replace(/&amp;/g, '&')} 
            </button>
        }
    )

    return(
        <div className='quiz__question'>
            <p className='question__title'>{props.question.replace(/&quot;/g, '"').replace(/&#039;/g, '`').replace(/&amp;/g, '&')}</p>
            <div className='question__answers'>
                {answersElements}
            </div>
        </div>
    )
}