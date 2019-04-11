import React from 'react';
import '../css/option.css';

const Option = ({ answer: { id, text }, selectedAnswer, changeSelectedAnswer, hasSubmitted }) => {
    return (
        <div className="optionWrapper">
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
                <div className="radioInput" />
                {text}
            </label>
        </div>
    );
}

export default Option;
