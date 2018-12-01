import React from 'react';
import { Route } from 'react-router-dom';
import GlobalSwitch from '../GlobalSwitch/index';


class App extends React.Component {
  render() {
    return <Route component={GlobalSwitch} />;
  }
}

export default App;
