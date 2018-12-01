import React from 'react';
import { Route } from 'react-router-dom';
import GlobalSwitch from '../GlobalSwitch/index';
import { withRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return <Route component={GlobalSwitch} />;
  }
}

export default withRouter(App);
