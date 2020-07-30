import React from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Home from './pages/Home';
import Expenses from './pages/Expenses';
import Refund from './components/refund';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} title="Menu" />
      <Scene key="expenses" component={Expenses} title="Despesas" />
      <Scene key="refund" component={Refund} />
    </Scene>
  </Router>
);

export default Routes;
