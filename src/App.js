import React, { Component } from 'react';
import KnowledgeCheckBlockContainer from './components/KnowledgeCheckBlockContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Knowledge Check Block</h1>
        <KnowledgeCheckBlockContainer />
      </div>
    );
  }
}

export default App;
