import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth } from "components/auth";
import "./index.scss";

ReactDOM.render(
    <React.StrictMode>
        <Auth>
            <App />
        </Auth>
    </React.StrictMode>,
    document.getElementById("root"),
);

serviceWorker.unregister();
