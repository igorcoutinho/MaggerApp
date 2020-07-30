import React from 'react';
import {View, Text} from 'react-native';
import {colors} from '../../styles';
import Icon from '../atomic/icon';

const dateWithIcon = (props) => {
  return (
    <View
      style={{
        alignSelf: 'flex-start',
        flexDirection: 'row',
        marginVertical: 20,
      }}>
      <View style={{marginTop: 4, marginRight: 16}}>
        <Icon name="Calendar" corPrimaria={colors.grayContele} />
      </View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 24,
          color: colors.grayContele,
        }}>
        {props.date}
      </Text>
    </View>
  );
};

export default dateWithIcon;
