import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {colors, Title} from '../../styles';

const total = (props) => {
  return (
    <View
      style={{
        marginHorizontal: 16,
        marginTop: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Title
        fontSize={16}
        fontWeight={'bold'}
        textColor={colors.grayConteleLight}>
        TOTAL
      </Title>
      <View
        style={{
          //justifyContent: 'center',
          flexDirection: 'row',
          alignSelf: 'flex-end',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: colors.blue_dark,
            marginTop: 10,
            marginRight: 4,
          }}>
          R$
        </Text>
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
            color: colors.blue_dark,
          }}>
          {props.total}
        </Text>
      </View>
    </View>
  );
};

export default total;
