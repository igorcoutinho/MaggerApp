import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../styles';
import Icon from '../atomic/icon';

const headerWithArrow = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.blueConteleLight,
        maxHeight: 140,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          marginTop: 24,
          flexDirection: 'row',
          marginHorizontal: 16,
        }}>
        <TouchableOpacity onPress={() => props.onClickArrow()}>
          <Icon name="Arrow" corPrimaria={colors.grayContele} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.onClick()}>
          <Icon name="Edit" corPrimaria={colors.grayContele} />
        </TouchableOpacity>
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
    </View>
  );
};

export default headerWithArrow;
