import React from "react";
import "./App.css";

import Form from "./components/Form";
class App extends React.Component {
  state = { isOpen: false };

  // *im invoking this function from my child and my child is giving me some data back
  handleClick = (data) => {
    this.setState((state) => {
      return { isOpen: !state.isOpen };
    });
  };

  render() {
    const title = this.state.isOpen ? "Hide Me" : "Reveal Me";

    return (
      <div className="container">
        //* now our custom button is truly resuable because it gets its onclock
        function and title via props
        <CustomButton onHandleClick={this.handleClick} title={title} />
        {this.state.isOpen && <MyAwesomeComponent />}
        <Form />
      </div>
    );
  }
}
export default App;
