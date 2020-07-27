import React, { useState } from 'react';
import './App.css';
import StartWindow from './StartWindow';
import GameWindow from './GameWindow'

function App() {
  // if game in progress, show game screen
  // if not, show start window
  const [ inPlay, toggleInPlay ] = useState(false);

  return (
    <div className={'App-container'}>
      { inPlay ? <GameWindow toggleInPlay={toggleInPlay} players={4} /> : <StartWindow toggleInPlay={toggleInPlay} />}
      {/* <button onClick={() => toggleInPlay(!inPlay)}>Toggle Me</button> */}
    </div>
  );
}

export default App;
