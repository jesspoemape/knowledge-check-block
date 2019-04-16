import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import AnimateHeight from 'react-animate-height';
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
                correctAnswer={questions.question1.correctAnswer}
            />
            <CSSTransition in={!hasSubmitted} timeout={300} classNames="submitButton">
                <button 
                    className={`submitButton${!selectedAnswer ? ' disabled' : ''}`}
                    onClick={handleSubmit}
                    disabled={!selectedAnswer}
                >
                    Submit
                </button>
            </CSSTransition>
            <AnimateHeight duration={500} height={hasSubmitted ? 'auto' : 0}>
                <CSSTransition in={hasSubmitted} timeout={1200} classNames="feedbackBlock">
                    <div>
                        <FeedbackBlock
                            feedbackText={questions.question1.feedbackMessage}
                            didAnswerCorrectly={didAnswerCorrectly}
                        />
                        <Reset resetQuestion={handleReset} />
                    </div>
                </CSSTransition>                
            </AnimateHeight>
        </div>
    )
}

export default KnowledgeCheckBlockContainer;