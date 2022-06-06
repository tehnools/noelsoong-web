import React from 'react'
import * as ReactDomClient from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const rootElement = document.getElementById('root')

const root = ReactDomClient.createRoot(
  rootElement)

root.render(
<Router>
  <Routes>
    <Route exact path="/" element={<App />} />
  </Routes>
</Router>)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
