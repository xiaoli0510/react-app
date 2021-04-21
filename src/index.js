import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    React.createElement(App,{toWhat: 'World12'}, null),
  document.getElementById('root')
);
/**StrictMode是启用严格模式，功能有：
 * 1.识别不安全的生命周期。
 * 2.关于使用过时字符串ref API的警告。
 * 3.关于使用废弃的findDOMNode方法的警告。
 * 4.检测意外的副作用。
 */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
