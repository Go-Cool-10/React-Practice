import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import UseRefDemo1 from './useRef1';
import UseRefDemo2 from './useRef2';
import UseRefDemo3 from './useRef3';
import UseRefDemo4 from './useRef4';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UseRefDemo1/> */}
    {/* <UseRefDemo2/> */}
    {/* <UseRefDemo3/> */}
    <UseRefDemo4/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
