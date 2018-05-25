import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routes from './Routes'
import NavBar from './components/NavBar'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Fragment>
    <NavBar />
    <Routes />
  </Fragment>
, document.getElementById('root'))
registerServiceWorker()

if (module.hot) {
  module.hot.accept()
}
