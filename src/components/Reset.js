import React from 'react';
import reset from '../assets/reset.svg';
import '../css/reset.css';

const Reset = ({ resetQuestion }) => (
    <div className="resetContainer">
        <button className="inner" onClick={resetQuestion}>
            <p className="resetText">Take Again</p>
            <img className="resetIcon" src={reset} alt="arrow coming around in a circle" />
        </button>
    </div>
);

export default Reset;
