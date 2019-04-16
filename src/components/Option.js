import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../css/option.css';

const Option = ({ answer: { id, text }, selectedAnswer, changeSelectedAnswer, hasSubmitted, correctAnswer }) => {
    return (
        <div className={`optionWrapper${hasSubmitted ? ' disabled' : ''}`} onClick={() => hasSubmitted ? null : changeSelectedAnswer(id)} role="button" tabIndex={0}>
            <label>
                <input
                    type="radio"
                    name={`option-${id}`}
                    value={id}
                    checked={selectedAnswer === id}
                    onChange={() => changeSelectedAnswer(id)}
                    className="radioInput"
                    disabled={hasSubmitted}
                />
                <div className={`radioInput${hasSubmitted ? ' submitted' : ''}`} data-correct-answer={correctAnswer === id} />
                
                {text}
            </label>
            <CSSTransition in={hasSubmitted && correctAnswer === id} timeout={1500} classNames="optionBorder">
                <div className="border" />
            </CSSTransition>
        </div>
    );
}

export default Option;
