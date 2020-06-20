import React from "react";
import moment from "moment";
import "./Countdown.css";

export class Countdown extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format("DDD");
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");
      console.log(then);
      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    // // Mapping the date values to radius values
    // const daysRadius = mapNumber(days, 30, 0, 0, 360);
    // const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
    // const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
    // const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

    if (!seconds) {
      return null;
    }

    return (
      <div>
        <div className="countdown-wrapper">
          {days && (
            <div className="countdown-item">
              {days}
              <span>dní</span>
            </div>
          )}
          {hours && (
            <div className="countdown-item">
              {hours}
              <span>hodin</span>
            </div>
          )}
          {minutes && (
            <div className="countdown-item">
              {minutes}
              <span>minut</span>
            </div>
          )}
          {seconds && (
            <div className="countdown-item seconds">
              {seconds}
              <span>vteřin</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

