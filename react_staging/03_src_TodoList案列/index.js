//引入react核心库
import React from 'react'
//引入react18
import { createRoot } from 'react-dom/client';
//引入ReactDOM
// import ReactDOM from 'react-dom'
//引入App组件
import App from './App'

//渲染App到页面 老写法会报错
// ReactDOM.render(<App/>,document.getElementById('root'))

// 使用createRoot

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
 