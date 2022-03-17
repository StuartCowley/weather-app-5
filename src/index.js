import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import forcast from "./data/forcast.json";

ReactDOM.render(
  <React.StrictMode>
    <App location={forcast.location} />
  </React.StrictMode>,
  document.getElementById("root")
);
