import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../styles';
import Icon from '../atomic/icon';

const refundDescription = (props) => {
  return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 16,
        }}>
          <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            color: colors.grayContele,
            marginTop: 10,
            alignSelf: 'flex-start',
          }}>
          R$
        </Text>
        <Text
          style={{fontWeight: 'bold', fontSize: 48, color: colors.grayContele}}>
          {props.value.toFixed(2)}
        </Text>
      </View>

      <View
        style={{
          alignContent: 'flex-end',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          marginBottom: 20,
          marginHorizontal: 16,
          flexDirection: 'row',
        }}>
        
      </View>
  );
};

export default refundDescription;
