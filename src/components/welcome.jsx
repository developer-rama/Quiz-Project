import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import Quiz from '../image/quiz.svg';
import "./welcome.css";

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);


    return (
        <div id='welcome'>
            <h2>If we were dating, would it work</h2>
            <p>Clique aqui no botão abaixo para descobrir</p>
            <button onClick={() => dispatch({ type: 'CHANGE_STATE' })}>Start</button>
            <img src={Quiz} alt='start questions' />
        </div>
    )
}

export default Welcome;