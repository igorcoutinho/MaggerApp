import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Card from '../../components/card';
import {colors} from '../../styles';

function Home() {
  const [dados] = useState();
  return (
    <View style={{flex: 1}}>
      <Card
        primaryText={'PRIMEIRA DESPESA'}
        secondaryText={'Valor da despesa'}
        dadosText={'500'}
        rightIcon={'Calendario'}
        rightIconCorPrimaria={colors.orange_west_side}
      />
    </View>
  );
}

export default Home;
