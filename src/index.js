import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from "routes/App";
import GlobalStyle from 'styles/global';
ReactDOM.render(React.createElement(BrowserRouter, null,
    React.createElement(GlobalStyle, null),
    React.createElement(App, null)), document.getElementById("app"));
