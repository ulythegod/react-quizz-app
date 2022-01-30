import React from 'react';
import win5 from '../images/win5.gif'

export default function Butterflies(props) {
    return (
        <>
            <img className='left-win-animation' src={win5} alt='left-win-animation' />
            <img className='rigth-win-animation' src={win5} alt='rigth-win-animation' />
        </>  
    )
}