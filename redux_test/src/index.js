//引入react核心库
import React from 'react'
//引入ReactDOM
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
//引入App
import App from './App'
import store from './redux/store'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <App />
)

store.subscribe(() => {
  root.render(
    <App />
  )
})