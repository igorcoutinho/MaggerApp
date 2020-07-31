import React from 'react';
import {View, Text} from 'react-native';
import {colors} from '../../styles';
import Icon from '../atomic/icon';
import styles from './styles';
const dateWithIcon = (props) => {
  return (
    <View style={styles.primaryView}>
      <View style={{marginTop: 4, marginRight: 16}}>
        <Icon name="Calendar" corPrimaria={colors.grayContele} />
      </View>
      <Text style={styles.date}>{props.date}</Text>
    </View>
  );
};

export default dateWithIcon;
