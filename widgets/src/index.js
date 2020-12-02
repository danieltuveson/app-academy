import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Clock from './Clock';
import Tabs from './Tabs';
import { tabs } from './tabs.json';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className="app">
      {/* <App /> */}

      <div className="row">
        <h1>Clock</h1>
      </div>
      
      <div className="row">
        <Clock />
      </div>
      
      <div className="row">
        <h1>Tabs</h1>
      </div>
      <div className="row">
        <Tabs tabs={ tabs } />
      </div>

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
