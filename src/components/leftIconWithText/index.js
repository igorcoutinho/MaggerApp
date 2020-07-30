import React from 'react';
import {View, Text} from 'react-native';
import Icon from '../atomic/icon';

const leftIconWithText = (props) => {
  console.log('props:', props);
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <Icon
        name={props.secondaryTextIcon}
        corPrimaria={props.colorIcon}
        width={32}
        height={32}
      />
      <Text
        style={{
          color: props.colorText,
          fontWeight: props.weigth,
          fontSize: props.size,
        }}>
        {props.secondaryText}
      </Text>
    </View>
  );
};

export default leftIconWithText;
