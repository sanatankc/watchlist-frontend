import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
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
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes />
      </div>
    </BrowserRouter>
  </ApolloProvider>
, document.getElementById('root'))

registerServiceWorker()

if (module.hot) {
  module.hot.accept()
}
