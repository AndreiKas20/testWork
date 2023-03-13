import './App.css';
import './main.global.css'
import './colors.global.css'
import {Provider} from "react-redux";
import {store} from "./store/store";

import {BrowserRouter} from "react-router-dom";
import React from "react";
import Layout from "./Layout/Layout";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Layout/>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
