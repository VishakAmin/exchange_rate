import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ExchangeRate } from "./components/ExchangeRate";
import { getIntialRates } from "./store/rates";
import { store } from "./store/store";
import "./style.css";

store.dispatch(getIntialRates);
  ReactDOM.render(
    <Provider store={store}>
       <ExchangeRate />
    </Provider> , 
      document.getElementById("root"));
