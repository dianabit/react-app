import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Site from '../Site/index';

const SiteComponent = (
  <Site />
)

class GlobalSwitch extends Component {
  render() {
    const { location } = this.props;

    return (
      <div>
        <Switch location={location}>
          <Route path="/" component={SiteComponent} />
        </Switch>
      </div>
    );
  }
}

export default GlobalSwitch;
