import React from 'react';
import Option from './Option';
import '../css/optionsContainer.css';

const OptionsContainer = ({ possibleAnswers, selectedAnswer, changeSelectedAnswer, hasSubmitted }) => {
    return (
        <div className="optionsContainer">
            {possibleAnswers.map(answer => (
                <Option
                    key={answer.id}
                    answer={answer}
                    selectedAnswer={selectedAnswer}
                    changeSelectedAnswer={changeSelectedAnswer}
                    hasSubmitted={hasSubmitted}
                />
            ))}
        </div>
    );
}

export default OptionsContainer;
