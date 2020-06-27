/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Countdown from './Countdown';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
  const divStyle = {
    backgroundColor: 'lightblue',
  };
  return (
    <div className="container" style={divStyle}>
      <h1>Countdown</h1>
      <header>
        <Countdown
          targetCaption="until 'No Time to Die' is released in theaters/streaming."
          targetDate={new Date(2020, 10, 20, 6, 0, 0, 0)}
        />

        <div className="partition" />

        <Countdown
          targetCaption="until KFMDM comes to Boston!"
          targetDate={new Date(2021, 3, 14, 20, 0, 0, 0)}
        />

        <div className="partition" />

        <Countdown />
      </header>
    </div>
  );
};

export default App;
