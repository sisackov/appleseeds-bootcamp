import React from "react";
class Counter1 extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.value !== this.props.value) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    console.log("counter 1 rendered");
    return <div>{this.props.value}</div>;
  }
}
export default Counter1;
