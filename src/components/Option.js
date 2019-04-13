import React from 'react';
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
        </div>
    );
}

export default Option;
