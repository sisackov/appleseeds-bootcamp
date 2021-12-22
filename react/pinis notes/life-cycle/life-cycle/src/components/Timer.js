import React from "react";
class Timer extends React.Component {
  state = { value: 0 };

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("timer invoked");
      this.setState({ value: this.state.value + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("clearing timer");
    clearInterval(this.timer);
  }

  render() {
    return <div>{this.state.value}</div>;
  }
}
export default Timer;
