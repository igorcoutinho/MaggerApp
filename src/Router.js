import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Expenses from './pages/Expenses';
import Refund from './components/refund';

const Routes = () => (
  <Router>
    <Scene key="root">
      {/* <Scene key="home" component={Home} title="Menu" /> */}
      <Scene
        key="expenses"
        component={Expenses}
        title={'Despesas'}
        hideNavBar
      />
      <Scene key="refund" component={Refund} hideNavBar />
    </Scene>
  </Router>
);

export default Routes;
