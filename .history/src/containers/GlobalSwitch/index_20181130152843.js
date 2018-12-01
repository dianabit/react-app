import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Site from '../Site/index';
import { ConnectedRouter } from 'connected-react-router';
import { withRouter } from 'react-router';

const SiteComponent = (
  <Site />
);

class GlobalSwitch extends Component {
  render() {
    return (
      <ConnectedRouter>
        <Switch>
          <Route path="/" component={SiteComponent} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default withRouter(GlobalSwitch);
