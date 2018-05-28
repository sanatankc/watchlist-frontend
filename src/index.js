import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import './index.css'
import Routes from './Routes'
import NavBar from './components/NavBar'
import registerServiceWorker from './registerServiceWorker'

const httpLink = createHttpLink({
  uri: 'https://watchlist-ctzcjyimlo.now.sh/graphql',
  credentials: 'include'
})


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('access_token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
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
