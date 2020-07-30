import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {colors} from '../../styles';

const titleExpense = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'baseline',
        marginHorizontal: 16,
      }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: colors.grayConteleLight,
        }}>
        {props.day}
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: colors.grayConteleLight,
        }}>
        {props.dayOfWeek.toUpperCase()}
      </Text>
    </View>
  );
};

export default titleExpense;
