//引入react核心库
import React from 'react'
//引入ReactDOM
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
//引入App
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

