import React from 'react';
import reset from '../assets/reset.svg';

const Reset = ({ resetQuestion }) => (
    <div onClick={resetQuestion}>
        <p>Take Again</p>
        <img src={reset} alt="arrow coming around in a circle" />
    </div>
);

export default Reset;
