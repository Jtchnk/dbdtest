import React from 'react';
import './App.css';

function App() {
  const minArr = [];
  let min = 1;
  for (min = 1; min <= 60; min++) {
    minArr.push(min);
  }

  return (
    <div className='bg-green-300'>
      <h1 className='text-3xl font-bold'>
        Hello world!
      </h1>
    </div>
  );
}

export default App;
