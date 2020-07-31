import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {colors, Title} from '../../styles';
import Icon from '../atomic/icon';
import styles from './styles';

const cardLocation = (props) => {
  console.log('props do card:', props);
  return (
    <TouchableOpacity onPress={() => props.openGps()} style={styles.arrow}>
      <View style={styles.calendar}>
        <Icon name="Calendar" corPrimaria={colors.grayConteleLight} />
      </View>
      <View style={styles.vertical8}>
        <Title
          fontSize={'16'}
          fontWeight={'bold'}
          textColor={colors.grayConteleDark}>
          {props.location}
        </Title>
        <Text style={styles.textTimeData}>
          {props.time} - {props.date}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default cardLocation;
