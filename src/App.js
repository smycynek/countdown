/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Countdown from './Countdown';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
  const targetDate = new Date(2020, 9, 2, 10, 0, 0, 0);
  const targetCaption = 'until the Sonos Arc is in stock!';
  return (
    <div className="container">
      <h1 className="text-info">Countdown Fun</h1>
      <header>
        <Countdown
          targetDate={targetDate}
          targetCaption={targetCaption}
        />

      </header>
    </div>
  );
};

export default App;
