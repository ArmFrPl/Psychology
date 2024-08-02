import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {GoogleOAuthProvider} from "@react-oauth/google";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import {thunk} from 'redux-thunk';
import './i18n';
import './index.css';
import App from './Components/App';
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId='283846230309-fb3pijmj5vbvipi44l8hbocmq3q2kaut.apps.googleusercontent.com'>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </GoogleOAuthProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
