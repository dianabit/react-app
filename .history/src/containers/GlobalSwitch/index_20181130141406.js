import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

const Site = Loadable({
  loader: () => import(/* webpackChunkName: "Site" */'../Site'),
  loading: () => <div>Loading site</div>,
  modules: ['Site'],
  webpack: () => [require.resolveWeak('../Site')],
});


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
