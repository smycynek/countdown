import React from 'react';
import './App.css';

  /*
  Simple component to animate a countdown in
  hours, minutes, seconds from a given date
  */
  class Countdown extends React.Component {

    getTimeSpan(date) {
      return date.getTime() - new Date().getTime();
    }

    getSpanComponents(span) {
      var days = span/(1000*60*60*24);
      var days_whole = Math.floor(days);
      var remainder_hours = days - days_whole;
      var hours = remainder_hours*24
      var hours_whole = Math.floor(hours);
      var remainder_minutes = hours - hours_whole;
      var minutes = remainder_minutes*60;
      var minutes_whole = Math.floor(minutes);
      var remainder_seconds = minutes - minutes_whole;
      var seconds = remainder_seconds*60;
      var seconds_whole = Math.floor(seconds);
      return {
        days: days_whole,
        hours: hours_whole,
        minutes: minutes_whole,
        seconds: seconds_whole,
      };
    }
    
    getSpanFormatted(date) {
      var span = this.getTimeSpan(date)
      var spanComponents = this.getSpanComponents(span);
      var day_label = "days";
      if (spanComponents.days === 1) {
        day_label = "day";
      }
      var hour_label = "hours";
      if (spanComponents.hours === 1) {
        hour_label = "hour";
      }
      var minute_label = "minutes";
      if (spanComponents.minutes === 1) {
        minute_label = "minute";
      }
      var seconds_label = "seconds";
      if (spanComponents.seconds === 1) {
        seconds_label = "second";
      }
      return `${spanComponents.days} ${day_label}, 
      ${spanComponents.hours} ${hour_label}, ${spanComponents.minutes} 
      ${minute_label}, ${spanComponents.seconds} ${seconds_label}`;
      }

    constructor (props) {
      super(props)
      this.state = {  interval: 500,
      spanFormatted: this.getSpanFormatted(props.target_date),
      };
    }

    componentDidMount () {
      this.timerID = setInterval(
        () => this.tick(),
        500
      )
    }
  
    tick() {
      this.setState({spanFormatted: this.getSpanFormatted(this.props.target_date)})
    }

    componentWillUnmount () {
      clearInterval(this.timerID)
    }

    render() {
      return (
        <div>
          <h1>{this.state.spanFormatted}</h1>
          <h2>{this.props.target_caption}</h2>
        </div>
      );
    }
  };

export default Countdown;
