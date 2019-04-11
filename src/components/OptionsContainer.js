import React from 'react';
import Option from './Option';

const OptionsContainer = ({ possibleAnswers, selectedAnswer, changeSelectedAnswer, hasSubmitted }) => {
    return (
        <div>
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
