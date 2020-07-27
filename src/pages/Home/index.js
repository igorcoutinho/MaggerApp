import React from 'react';
import {View, Text} from 'react-native';
import Card from '../../components/card';
import {colors} from '../../styles';

import {Actions} from 'react-native-router-flux';

const Home = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: colors.blue_eastern_opacity,
    }}>
    <Card
      primaryText={'Despesas'}
      onContainerClicked={() => Actions.expenses()}></Card>
  </View>
);

export default Home;
