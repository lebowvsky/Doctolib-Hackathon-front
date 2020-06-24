import React from "react";
import styles from "./clock.module.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className={styles.clockContainer}>
        <div className={styles.time}>
          {this.state.date.toLocaleTimeString("en-GB")}.
        </div>
        <div className={styles.date}>
          {this.state.date.toLocaleDateString("en-GB")}
        </div>
      </div>
    );
  }
}

export default Clock;
