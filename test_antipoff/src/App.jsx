import './App.css';
import {Authorization} from "./Layout/Authorization";
import './main.global.css'
import './colors.global.css'
import {Provider} from "react-redux";
import {store} from "./store/store";
import {Layout} from "./Layout";
import React, {useEffect, useState} from "react";

function App() {
    const [checkIn, setCheckIn] = useState(false)
    const token = JSON.parse(localStorage.token)
    useEffect(() => {
        if (token === 'QpwL5tke4Pnpja7X4') {
            setCheckIn(true)
        }
    }, [token])
  return (
      <Provider store={store}>
          {
              !checkIn &&
              <Authorization/>
          }
          {
              checkIn &&
              <Layout/>
          }
      </Provider>

  );
}

export default App;