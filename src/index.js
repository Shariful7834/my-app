import React from "react";
import ReactDOM from "react-dom";
const lucky = 7;
ReactDOM.render(
  <div>
    <h1>My First React App</h1>
    <h3>
      Hello my first app {`${lucky}`} is awesome looking niceHello my first app
      is awesome
    </h3>
    <ol>
      <li>One</li>
      <li>Tow</li>
      <li>Three</li>
    </ol>
    <p>Your Lucky Number {lucky}</p>
  </div>,
  document.getElementById("root")
);
