import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { ApolloProvider } from 'react-apollo';

import App from './containers/App';


// function Child(props) {
//     return (
//         <div>
//             <h1>Well, hello world!</h1>
//             <p>Hello from the other siiiideeee...</p>
//         </div>
//     );
// }

// class Parent extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <Child />
//         )
//     }
// }

ReactDOM.hydrate(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <div>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </div>
      </Provider>
    </ApolloProvider>,
    document.getElementById('root')
  );