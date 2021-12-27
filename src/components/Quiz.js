import React from 'react';

export default function Quiz(props) {
    return(
        <form className='quiz'>
            <div className='quiz__question'>
                <p className='question__title'>Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?</p>
                <div className='question__answers'>
                    <input className='answer innactive'>Cabbage Patch Kids</input>
                    <p className='answer failed'>Transformers</p>
                    <p className='answer correct'>Care Bears</p>
                    <p className='answer'>Rubik’s Cube</p>
                </div>
            </div>
            <div className='quiz__question'>
                <p className='question__title'>Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?</p>
                <div className='question__answers'>
                    <p className='answer'>Cabbage Patch Kids</p>
                    <p className='answer'>Transformers</p>
                    <p className='answer'>Care Bears</p>
                    <p className='answer'>Rubik’s Cube</p>
                </div>
            </div>
            <div className='quiz__question'>
                <p className='question__title'>Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?</p>
                <div className='question__answers'>
                    <p className='answer'>Cabbage Patch Kids</p>
                    <p className='answer'>Transformers</p>
                    <p className='answer'>Care Bears</p>
                    <p className='answer'>Rubik’s Cube</p>
                </div>
            </div>
            <div className='quiz__question'>
                <p className='question__title'>Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?</p>
                <div className='question__answers'>
                    <p className='answer'>Cabbage Patch Kids</p>
                    <p className='answer'>Transformers</p>
                    <p className='answer'>Care Bears</p>
                    <p className='answer'>Rubik’s Cube</p>
                </div>
            </div>
            <button className='start-screen__button'>Check answers</button>
        </form>
    )
}