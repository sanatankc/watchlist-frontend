import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from "react-apollo"
import ApolloClient from "apollo-boost"
import './index.css'
import Routes from './Routes'
import NavBar from './components/NavBar'
import registerServiceWorker from './registerServiceWorker'

const client = new ApolloClient({
  uri: 'https://watchlist-cnctfkofik.now.sh/graphql'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <div>
      <NavBar />
      <Routes />
    </div>
  </ApolloProvider>
, document.getElementById('root'))

registerServiceWorker()

if (module.hot) {
  module.hot.accept()
}
