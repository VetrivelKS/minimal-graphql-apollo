import React from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { ApolloConsumer } from 'react-apollo';
// import GET_HELLO from './query'

// query hello($name: String!) {
// hello(name: "Sarah")
const GET_HELLO =  gql`
{
    hello(name: "vetri")
}
`

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {data: 'loading...'};
    }
    componentWillMount(){
        this.props.client.query({
            query: GET_HELLO,
            // variables: { name: "World" }
        }).then(response => {
            this.setState({
                data:response.data.hello
            })
        })
    }
    render() {
        return(
            <div>
                {'vetri test '+this.state.data}
            </div>
        );
    }
}

/*using query Tag*/
// const GET_HELLO = gql`
// {
//     hello(name: "World through GQL")
// }
// `;
/*
const App = () => (
    <Query query={GET_HELLO}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
  
        return (
          <div>
            {data.hello}
          </div>
        );
      }}
    </Query>
  );
*/
export default App