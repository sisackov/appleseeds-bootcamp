import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  state = { number: 0 };

  handleClick = () => {
    //setState is aschorouonus because we can have multple setstate calls in our app and react patches them up and updates them to the dom in one single update for performance.
    this.setState({ number: this.state.number + 1 }, () => {
      console.log(this.state.number);
    });

    console.log(this.state.number);
    //it can't gaurantee that the state will update right away. console log and see
    //callback funciton for console.log
    //not best practice because we cannot gaurantee that this.state.number is the recent state. Because maybe in another component they update this number state to something else.
    // There is a is a rule in React which we need to follow. If in your setState you use this.state directly,(for example "hello", would be okay) so we should do this:
    this.setState((prevState, prevProps) => {
      return { number: prevState.number + 1 };
    });
    //for best practice alsways when you need to use this.state inside your setState use this syntax. Using a function instead of an object
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.number}</p>
          <button onClick={this.handleClick}>Update State</button>
        </header>
      </div>
    );
  }
}

export default App;
