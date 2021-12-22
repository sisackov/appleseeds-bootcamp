import React from "react";
class Counter2 extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.value !== this.props.value) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    console.log("counter 2 rendered");
    return <div>{this.props.value}</div>;
  }
}
export default Counter2;
