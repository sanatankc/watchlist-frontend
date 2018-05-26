import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Login from './page/login'
import RootPage from './page/root'
import AddPage from './page/add'

const Routes = () => (
  <Switch>
    <PrivateRoute exact path='/' component={RootPage} />
    <PrivateRoute exact path='/add' component={AddPage} />
    <Route exact path='/login' component={Login} />
    <Route path='/' render={props => 'Not Found' } />
  </Switch>
)

export default Routes
