import React from 'react';
import '../css/questionContainer.css';

const QuestionContainer = ({ imgSrc, questionText}) => {
    return (
        <div className="questionContainer">
            <p>{questionText}</p>
            <img src={imgSrc} alt="text" />
        </div>
    );
};

export default QuestionContainer;