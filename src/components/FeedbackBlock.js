import React from 'react';
import '../css/feedbackBlock.css'
import incorrect from '../assets/incorrect.svg';
import correct from '../assets/checkmark.svg';

const FeedbackBlock = ({ feedbackText, didAnswerCorrectly }) => {
    return (
        <div className="feedbackWrapper">
            <div className="iconContainer">
                <img src={didAnswerCorrectly ? correct : incorrect} alt={didAnswerCorrectly ? 'checkmark' : 'x'} />
            </div>
            <p>{didAnswerCorrectly ? 'Correct' : 'Incorrect'}</p>
            <p className="feedbackText">{feedbackText}</p>
        </div>
    );
}

export default FeedbackBlock;
