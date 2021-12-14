import logo from "./logo.svg";
import "./App.css";
import React from "react";
const myVariable = 1;
const myName = "pini";
const arr = ["hello", "world"];
const obj = { name: "pini" };
const myFunc = (title) => {
  return <h1>{title}</h1>;
};

function App() {
  return (
    <div className="App">
      <h1>{myVariable}</h1>
      <h1>{myName.toUpperCase()}</h1>
      <h1>{1 + 1}</h1>
      <h1>{arr}</h1>
      <h1>
        {arr[0]} {arr[1]}
      </h1>
      <h1>{myFunc("pini")}</h1>
      <h1>{`hello my name is ${myName}`}</h1>
    </div>
  );
}

export default App;
