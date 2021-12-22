import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    console.log("Im in the Constructor");
    //! This is called before the mounting occurs. Before we call render
    super(props);
  }
  componentDidMount() {
    //! is executed after the first render. This is where AJAX requests and DOM or state updates should occur.
    console.log("component did mount");
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate");
    return true;

    // return false;
    //!should return true or false value. This will determine if the component will be updated or not. This is set to true by default. If you are sure that the component doesn't need to render after state or props are updated, you can return false value.
  }

  componentDidUpdate(prevProps, nextState) {
    //! is called just after rendering. Maybe you want to do another asynchronous request depending if the component updated or not
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
    //!is called after the component is unmounted from the dom.
    //! Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as cancelled network requests, or cleaning up any DOM elements created in componentDidMount etc.
  }

  render() {
    console.log("Im in Render");
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}
export default LifeCycle;
