import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './pages/admin-login'

const render = () => ReactDOM.render(
  <App />
, document.getElementById('root'))

export default render