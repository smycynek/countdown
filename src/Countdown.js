/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import './App.css';

/*
  Simple component to animate a countdown in
  hours, minutes, seconds from a given date
  */
const Countdown = ({ targetDate, targetCaption }) => {

  const getTimeSpan = (date) => date.getTime() - new Date().getTime();

  const getSpanComponents = (span) => {
    const days = span / (1000 * 60 * 60 * 24);
    const daysWhole = Math.floor(days);
    const remainderHours = days - daysWhole;
    const hours = remainderHours * 24;
    const hoursWhole = Math.floor(hours);
    const remainderMinutes = hours - hoursWhole;
    const minutes = remainderMinutes * 60;
    const minutesWhole = Math.floor(minutes);
    const remainderSeconds = minutes - minutesWhole;
    const seconds = remainderSeconds * 60;
    const secondsWhole = Math.floor(seconds);
    return {
      days: daysWhole,
      hours: hoursWhole,
      minutes: minutesWhole,
      seconds: secondsWhole,
    };
  };

  const createSpanFormatted = (date) => {
    const span = getTimeSpan(date);
    const spanComponents = getSpanComponents(span);
    let dayLabel = 'days';
    if (spanComponents.days === 1) {
      dayLabel = 'day';
    }
    let hourLabel = 'hours';
    if (spanComponents.hours === 1) {
      hourLabel = 'hour';
    }
    let minuteLabel = 'minutes';
    if (spanComponents.minutes === 1) {
      minuteLabel = 'minute';
    }
    let secondLabel = 'seconds';
    if (spanComponents.seconds === 1) {
      secondLabel = 'second';
    }
    return `${spanComponents.days} ${dayLabel}, 
      ${spanComponents.hours} ${hourLabel}, ${spanComponents.minutes} 
      ${minuteLabel}, ${spanComponents.seconds} ${secondLabel}`;
  };

  const [spanFormatted, setSpanFormatted] = useState(
    createSpanFormatted(targetDate),
  );

  const tick = () => {
    setSpanFormatted(createSpanFormatted(targetDate));
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 500);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <h1>{spanFormatted}</h1>
      <h2>{targetCaption}</h2>
    </div>
  );
};

Countdown.propTypes = {
  targetDate: PropTypes.instanceOf(Date),
  targetCaption: PropTypes.string,
};
Countdown.defaultProps = {
  targetCaption: 'Until June 1, 2030, 9 p.m.',
  targetDate: new Date(2030, 5, 1, 21, 0, 0, 0),
};

export default Countdown;
