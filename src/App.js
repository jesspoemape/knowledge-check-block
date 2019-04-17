import React from 'react';
import KnowledgeCheckBlockContainer from './components/KnowledgeCheckBlockContainer';
import mockQuestions from './data/mockQuestions';
import './App.css';

const App = () => (
    <div className="App">
        {mockQuestions.map(question => <KnowledgeCheckBlockContainer key={question.id} questionData={question} />)}
    </div>
);

export default App;
