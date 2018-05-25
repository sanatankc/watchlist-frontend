import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Login from './page/login'
import App from './App'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path='/' component={App} />
      <Route exact path='/login' component={Login} />
      <Route path='/' render={props => 'Not Found' } />
    </Switch>
  </BrowserRouter>
)

export default Routes
