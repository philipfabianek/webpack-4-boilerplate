// Polyfills
import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import "./scripts/polyfill";

// Styles
// import "aos/dist/aos.css";
// import "aos/dist/aos.js";
import './stylesheets/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";
import { App } from "./scripts/App";

ReactDOM.render(
    (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    ),
    document.getElementById("app")
);
