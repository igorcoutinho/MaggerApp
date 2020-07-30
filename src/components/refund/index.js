import React, {Component, Fragment} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../styles';
import Icon from '../atomic/icon';
import LazyImage from '../LazyImage';
import HeaderWithBack from '../headerWithArrow';
import {Actions} from 'react-native-router-flux';
import DateWithIcon from '../dateWithIcon';
// description: 'Almoço restaurante',
// type: 'FOOD',
// value: 26.0,
// status: 'approved',
// date: '22/09/2020',
const Refund = ({props}) => {
  function onClickArrow() {
    Actions.pop();
  }
  return (
    <View style={{flex: 1}}>
      <HeaderWithBack onClickArrow={() => onClickArrow()} value={props.value} />

      <DateWithIcon date={props.date} />

      <Text>{props.description}</Text>
      <View>
        <Icon name={'Calendar'} />
        <Text>{props.type}</Text>
      </View>
      <View>
        <Icon
          name={'Calendar'}
          corPrimaria={
            props.status == 'aproved' ? colors.blue_daintree : colors.gray1
          }
        />
        <Text>
          {props.status == 'aproved' ? 'Reembolsável' : 'Não reembolsável '}
        </Text>
      </View>
      <LazyImage />
    </View>
  );
};

export default Refund;
