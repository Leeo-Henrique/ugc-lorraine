import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import Router from "./router";
import reportWebVitals from "./reportWebVitals";
import { Header } from "./components/header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Router />
  </React.StrictMode>
);

reportWebVitals();
