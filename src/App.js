import React from 'react';
import Countdown from './Countdown'
import './App.css';

  class App extends React.Component {
    
    render() {
      return (
        <div className="App">
          <header className="App-header">
          <Countdown 
          target_caption="until 'No Time to Die' is released in theaters/streaming."
          target_date={new Date(2020,10,20,6,0,0,0)}/>

          <div className="partition">

          </div>

          <Countdown 
          target_caption="until KFMDM comes to Boston!"
          target_date={new Date(2021,3,14,20,0,0,0)}/> 
          </header>
        </div>
      );
    }
  };

export default App;
