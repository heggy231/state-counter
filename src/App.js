import React from 'react';
import Counter from  './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter initialCount={42} />
      <Counter initialCount={-13} />
      <Counter />
    </div>
  );
}

export default App;
