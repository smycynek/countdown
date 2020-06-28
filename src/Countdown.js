// eslint-disable-next-line
/* eslint-disable react-hooks/exhaustive-deps */
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

  const createSpanComponents = (span) => {
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

  const createDateSpanComponents = (date) => createSpanComponents(getTimeSpan(date));

  const [spanComponents, setSpanComponents] = useState(
    createDateSpanComponents(targetDate),
  );

  const tick = () => {
    setSpanComponents(createDateSpanComponents(targetDate));
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 500);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div className="container-fluid border border-secondary">
      <div className="row">
        <div className="col-sm">
          <span className="text-dark">{spanComponents.days}</span>
        </div>
        <div className="col-sm">
          <span className="text-secondary">{spanComponents.days === 1 ? ' Day' : ' Days'}</span>
        </div>
      </div>

      <div className="row">
        <div className="col-sm">
          <span className="text-dark">{spanComponents.hours}</span>
        </div>
        <div className="col-sm">
          <span className="text-secondary">{spanComponents.hours === 1 ? ' Hour' : ' Hours'}</span>
        </div>
      </div>

      <div className="row">
        <div className="col-sm">
          <span className="text-dark">{spanComponents.minutes}</span>
        </div>
        <div className="col-sm">
          <span className="text-secondary">{spanComponents.minutes === 1 ? ' Minute' : ' Minutes'}</span>
        </div>
      </div>

      <div className="row">
        <div className="col-sm">
          <span className="text-dark">{spanComponents.seconds}</span>
        </div>
        <div className="col-sm">
          <span className="text-secondary">{spanComponents.seconds === 1 ? ' Second' : ' Seconds'}</span>
        </div>
      </div>
      <span className="text-info">
        <em>{targetCaption}</em>
      </span>
    </div>
  );
};

Countdown.propTypes = {
  targetDate: PropTypes.instanceOf(Date),
  targetCaption: PropTypes.string,
};

Countdown.defaultProps = {
  targetCaption: 'Specify a caption...',
  targetDate: new Date(2099, 11, 31, 23, 59, 59, 0),
};

export default Countdown;
