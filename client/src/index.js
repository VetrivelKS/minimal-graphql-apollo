import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
// copied from // https://www.howtographql.com/react-apollo/1-getting-started/
// refer the above link for extensive details
// 1
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// 2
const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

// 4
/* use provider context to pass client for distant children, or pass it as prop directly*/

// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>
//   , document.getElementById('root')
// )


ReactDOM.render(
    <App client={client} />
  , document.getElementById('root')
)
registerServiceWorker()
// ^  https://stackoverflow.com/questions/47953732/what-does-registerserviceworker-do-in-react-js