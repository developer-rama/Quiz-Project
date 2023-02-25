import React from 'react'
import Quiz from '../image/quiz.svg'
import "./Welcome.css";

const Welcome = () => {
    return (
        <div id='welcome'>
            <h2>Seja Bem-Vindo</h2>
            <p>Clique aqui no botão abaixo para começar</p>
            <button></button>
            <img src={Quiz} alt='start questions' />
        </div>
    )
}

export default Welcome;