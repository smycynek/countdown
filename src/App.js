/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Countdown from './Countdown';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
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
  }
}

export default App;
