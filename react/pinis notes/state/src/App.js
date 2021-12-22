import "./App.css";
import React from "react";
import FirstChildComponent from "./FirstChildComponent";
import DisplayValue from "./DisplayValue";
class App extends React.Component {
  // constructor(prop){
  //   super(props)
  //   this.state = {value:0}
  //   this.handleIncrement = this.handleIncrement(this)
  // }
  //* shorter syntax. React will implicity declare the constructor for us.
  state = { value: 0 };

  //* use arrow functions to avoid binding this
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    //* each time we set the state the render function gets invoked. Also their children as well
    console.log("im rendering");
    return (
      <div>
        {this.state.value}
        {/* so I placed a component called DisplayValue that has its own state, and when that state changes, only that component will get rerendered. IMPORTANT! Always think where should I place my state, what children needs to know it. If a child doesnt need that state, maybe put it in a separate component so only that component will get rerendered */}
        <DisplayValue />
        <FirstChildComponent />
        <button onClick={this.handleIncrement}>incrmeent</button>
      </div>
    );
  }
}

export default App;
