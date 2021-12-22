import React from "react";
import LifeCycle from "./components/LifeCycle";
import Timer from "./components/Timer";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import DisplayData from "./components/DisplayData";
import Spinner from "./components/Spinner";

class App extends React.Component {
  state = { data: [], counter: 0, counter2: 0, isOpen: true, isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });
    setTimeout(() => {
      const response = ["Cat", "Dog", "Chicken"];
      this.setState({ data: response, isLoading: false });
    }, 2000);
  }

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  handleIncrement2 = () => {
    this.setState({ counter2: this.state.counter2 + 1 });
  };

  handleTimer = () => {
    this.setState({ isOpen: false });
  };

  render() {
    // ! PLEASE COMMENT OUT THE COMPONENTS YOU DONT WANT TO FOCUS ON!
    return (
      <div>
        {/* life cycle methods overview */}
        <LifeCycle myNumber={this.state.counter} />

        {/* Timer component example for componentDidMount and ComponentDidUnmount */}
        {this.state.isOpen && <Timer />}
        <button onClick={this.handleTimer}>Show timer</button>

        {/* ShouldComponentUpdate example */}
        <button onClick={this.handleIncrement}>Increment</button>
        <h2>Counter 1 value</h2>
        <Counter1 value={this.state.counter} />
        <button onClick={this.handleIncrement2}>Increment</button>
        <h2>Counter 2 value</h2>
        <Counter2 value={this.state.counter2} />

        {/* setting spinner and fetching data */}
        {this.state.isLoading && <Spinner />}
        <DisplayData data={this.state.data} />
      </div>
    );
  }
}

export default App;
