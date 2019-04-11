import React, { useState, Fragment } from 'react';
import QuestionContainer from './QuestionContainer';
import questions from '../data/mockQuestions';
import '../css/knowledgeCheckBlockContainer.css';
import OptionsContainer from './OptionsContainer';
import FeedbackBlock from './FeedbackBlock';
import Reset from './Reset';

const KnowledgeCheckBlockContainer = () => {
    const [selectedAnswer, changeSelectedAnswer] = useState(null);
    const [hasSubmitted, toggleHasSubmitted] = useState(false);
    const didAnswerCorrectly = selectedAnswer === questions.question1.correctAnswer;

    const handleSubmit = () => {
        toggleHasSubmitted(true);
        if (didAnswerCorrectly) {
            console.log('correct! :)');
        } else {
            console.log('incorrect! :(');
        }
    }

    const handleReset = () => {
        toggleHasSubmitted(false);
        changeSelectedAnswer(null);
    }

    return (
        <div className="container">
            <QuestionContainer imgSrc={questions.question1.image} questionText={questions.question1.question} />
            <OptionsContainer
                possibleAnswers={questions.question1.possibleAnswers}
                selectedAnswer={selectedAnswer}
                changeSelectedAnswer={changeSelectedAnswer}
                hasSubmitted={hasSubmitted}
            />
            <button className={`submitButton${!selectedAnswer ? ' disabled' : ''}`} onClick={handleSubmit} disabled={!selectedAnswer}>Submit</button>
            {hasSubmitted && (
                <Fragment>
                    <FeedbackBlock
                        feedbackText={questions.question1.feedbackMessage}
                        didAnswerCorrectly={didAnswerCorrectly}
                    />
                    <Reset resetQuestion={handleReset} />
                </Fragment>
                
                )}
        </div>
    )
}

export default KnowledgeCheckBlockContainer;