import React from "react";
import "./App.css";
import DogCard from "./DogCard";
import dogsApi from "./api/dogsApi";

class App extends React.Component {
  state = { data: null, error: "", isLoading: false };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const { data } = await dogsApi.get("breed/hound/images");
    const firstTen = data.message.splice(0, 10);
    this.setState({ data: firstTen, isLoading: false });
  }

  renderCards = () => {
    return this.state.data.map((url, i) => {
      return (
        <div key={i}>
          <DogCard url={url} />{" "}
        </div>
      );
    });
  };

  render() {
    return (
      // <div>{this.state.data && <DogCard url={this.state.data.message} />}</div>
      <div>
        {this.state.data && this.renderCards()}
        <div>{this.state.isLoading && <div>Loading....</div>}</div>
      </div>
    );
  }
}

export default App;
