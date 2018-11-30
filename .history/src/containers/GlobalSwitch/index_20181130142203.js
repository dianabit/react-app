import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Site from '../Site/index';

const Site = (
  <Site />
)

class GlobalSwitch extends Component {
  render() {
    const { location } = this.props;

    return (
      <div>
        <Switch location={location}>
          <Route path="/" component={Site} />
        </Switch>
      </div>
    );
  }
}

export default GlobalSwitch;
