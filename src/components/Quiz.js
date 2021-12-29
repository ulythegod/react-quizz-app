import React from 'react';
import Question from './Question';

export default function Quiz(props) {
    const questions = props.questions.results.map(
        (value, index) => {
            return <Question 
                key={index} 
                id={index} 
                question={value.question} 
                answers={value.incorrect_answers} 
                correctAnswer={value.correct_answer} 
                handleAnswer={(event) => props.handleAnswer(event)}
            />
        }
    )

    return(
        <form className='quiz'>
            {questions}
            <button className='button quiz__button'>Check answers</button>
        </form>
    )
}