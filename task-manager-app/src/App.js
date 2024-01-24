// src/App.js

import React from 'react';

function Task(props) {
  return (
    <div>
      <p>{props.title}</p>
    </div>
    
  );
}

function App() {
  return (
    <div>
      <h1>Task Manager App</h1>
      <Task id="1" title="React" />
      <Task id="2" title="Build" />
    </div>
  );
}

export default App;
