import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App firstRetryDelay={300} maxAttempts={6} url="http://localhost:5000" />
  </React.StrictMode>,
  document.getElementById("root")
);
