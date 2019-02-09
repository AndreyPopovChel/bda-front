import Header from './Header';
import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import PrivateRoute from './PrivateRoute';

import Home from './Home';
import Login from './Login';
import Register from './Register';
import Settings from './Settings';
import Customizations from './Customizations'

@inject('userStore', 'commonStore')
@withRouter
@observer
export default class App extends React.Component {

  componentWillMount() {
    if (!this.props.commonStore.token) {
      this.props.commonStore.setAppLoaded();
    }
  }

  componentDidMount() {
    if (this.props.commonStore.token) {
      this.props.userStore.pullUser()
        .finally(() => this.props.commonStore.setAppLoaded());
    }
  }

  render() {
    if (this.props.commonStore.appLoaded) {
      return (
        <div>
          <Header />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/settings" component={Settings} />
            <PrivateRoute path="/customizations" component={Customizations} />
            <PrivateRoute path="/" component={Home} />          
          </Switch>
        </div>
      );
    }
    return (
      <Header />
    );
  }
}
