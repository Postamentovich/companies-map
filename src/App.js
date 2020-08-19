import React, { useEffect } from "react";
import Tabletop from "tabletop";
import logo from "./logo.svg";
import "./App.css";

function App() {
    useEffect(() => {
        var publicSpreadsheetUrl =
            "https://docs.google.com/spreadsheets/d/1WiCHITHe2RrYocz_xxnoXxwhNDIibQhoIGe6hZpNU6c/edit#gid=0";

        function init() {
            Tabletop.init({ key: publicSpreadsheetUrl, callback: showInfo, simpleSheet: false });
        }

        function showInfo(data, tabletop) {
            console.log(data);
            // do something with the data
            // console.log(JSON.stringify(data, null, 2));
        }

        //initialise and kickstart the whole thing.
        init();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
