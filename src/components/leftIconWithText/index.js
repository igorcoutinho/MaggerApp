import React from 'react';
import {View, Text} from 'react-native';
import Icon from '../atomic/icon';

const leftIconWithText = (props) => {
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
      <View style={{marginLeft: 8}}>
        <Text
          style={{
            color: props.colorText,
            fontWeight: props.weigth,
            fontSize: props.size,
          }}>
          {props.secondaryText}
        </Text>
      </View>
    </View>
  );
};

export default leftIconWithText;
