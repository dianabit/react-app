import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { ApolloProvider } from 'react-apollo';

import App from './containers/App/index';

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