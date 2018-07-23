**Server** => have used '**graphql-yoga**'
All we need to make a graphql server running is 

// const server = new GraphQLServer({ typeDefs, resolvers })
// server.start(() => console.log('Server is running on localhost:4000'))

// https://www.howtographql.com/react-apollo/1-getting-started/
<br/>
**Client** =>
To use the constructed queries and make a http request we use apollo-client

we create a client and make query using that client

//** STEPS FOR CLIENT**

1)npm install --save-dev babel-core babel-cli babel-preset-env babel-preset-react<br/>
2) configure .babelrc
<br/>
3)npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader<br/>
4)configure webpack.config.js
<br/>
5)add index.html in publix folder<br/>
6)use document.getElement to render component inside src/index.js<br/>
<br/>
/* https://www.howtographql.com/react-apollo/1-getting-started/ */<br/>
7)npm install apollo-client-preset react-apollo graphql-tag graphql --save<br/>
8) copy paste registerServiceWorker [YET TO EXPLORE ServiceWorker]
<br/><br/>

/* https://github.com/apollographql/react-apollo */
<br/>
9) Add necessary things to initialize client <br/>
add a <ApolloProvider/> component to the root of your React component tree.<br/>
<br/><br/>
10)npm install graphql-tag --save<br/>
<br/><br/>
/* 3 methods for simple app */

11) use query tag <br/>
refer https://github.com/apollographql/react-apollo<br/>
<br/>
12) or else use ApolloProvider/ApolloConsumer to get 'client' inside component and use client.query()<br/>
ex:
	class SomeNthChild extends React.component {
	  render() {
		return (
		  <ApolloConsumer>
			{client => (
				<button
				  onClick={async () => {
					const { data } = await client.query({
					  query: GET_DOG_PHOTO,
					  variables: { breed: "bulldog" }
					});
					this.onDogFetched(data.dog);
				  }}
				>
				  Click me!
				</button>
			)}
		  </ApolloConsumer>
		);
	  }
	}
<br/><br/>
13) or [without provider consumer => did not use provider consumer as I have only one child]
send 'client' via prop and use it as this.props.client.query in child component
// ^ used in this repo

