import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ThreeJS from './ThreeJS'
import Biography from './Biography'
import reportWebVitals from './reportWebVitals';
import Footer from './Footer'


//Web page composition.
ReactDOM.render(
  <React.StrictMode>
    <div id="content-box">
    <div id="canvas">
      <ThreeJS />
    </div>
    <Biography />
    </div>
    <Footer />
  </React.StrictMode>,

  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
