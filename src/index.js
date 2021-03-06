import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { ResultContextProvider } from "./contexts/ResultContextProvider";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./global.css";

ReactDOM.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>,
  document.getElementById("root")
);
