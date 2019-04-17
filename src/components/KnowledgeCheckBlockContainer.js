import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import AnimateHeight from 'react-animate-height';
import QuestionContainer from './QuestionContainer';
import '../css/knowledgeCheckBlockContainer.css';
import OptionsContainer from './OptionsContainer';
import FeedbackBlock from './FeedbackBlock';
import Reset from './Reset';

const KnowledgeCheckBlockContainer = ({ questionData }) => {
    // Hooks - State
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const didAnswerCorrectly = selectedAnswer === questionData.correctAnswer;

    /**
     * Resets state of question
     */
    const handleReset = () => {
        setHasSubmitted(false);
        setSelectedAnswer(null);
    }
    return (
        <div className="container">
            <QuestionContainer imgSrc={questionData.image} questionText={questionData.question} />
            <OptionsContainer
                possibleAnswers={questionData.possibleAnswers}
                selectedAnswer={selectedAnswer}
                changeSelectedAnswer={setSelectedAnswer}
                hasSubmitted={hasSubmitted}
                correctAnswer={questionData.correctAnswer}
            />
            <CSSTransition in={!hasSubmitted} timeout={300} classNames="submitButton">
                <button 
                    className={`submitButton${!selectedAnswer ? ' disabled' : ''}`}
                    onClick={() => setHasSubmitted(true)}
                    disabled={!selectedAnswer}
                >
                    Submit
                </button>
            </CSSTransition>
            <AnimateHeight duration={500} height={hasSubmitted ? 'auto' : 0}>
                <CSSTransition in={hasSubmitted} timeout={1200} classNames="feedbackBlock">
                    <div>
                        <FeedbackBlock
                            feedbackText={questionData.feedbackMessage}
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