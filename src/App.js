import './App.css';
import { useState } from 'react';

function App() {
  const [inputCouter, setInputCounter] = useState('');

  function countWords(str) {
    if (str.trim() === '') {
      return 0;
    }
    let words = str.trim().split(/\s+/);

    return words.length;
  }


  return (
    <div className="App">
      <h1>Word Counter</h1>

      <textarea className='input-text' type="text" value={inputCouter} onChange={(e) => setInputCounter(e.target.value)} />

      <span className='counter-span'>Character: {inputCouter.length}</span>

      <span className='counter-span'>Word: {countWords(inputCouter)}</span>

      <button style={{ backgroundColor: inputCouter.length > 0 ? 'red' : 'grey', cursor: inputCouter.length > 0 ? 'pointer' : 'not-allowed' }} className='clear-btn' onClick={() => setInputCounter('')}>Clear</button>
    </div >
  );
}

export default App;
