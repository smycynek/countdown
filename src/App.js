/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Countdown from './Countdown';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
  const divStyle = {
    backgroundColor: 'lightgrey',
  };
  const targetDate = new Date(2020, 10, 20, 6, 0, 0, 0);
  const targetCaption = "until 'No Time to Die' is released in theaters/streaming.";
  return (
    <div className="container" style={divStyle}>
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
