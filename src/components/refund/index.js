import React from 'react';
import {View, Text} from 'react-native';
import {colors} from '../../styles';
import Icon from '../atomic/icon';
import LazyImage from '../LazyImage';
import HeaderWithBack from '../headerWithArrow';
import {Actions} from 'react-native-router-flux';
import DateWithIcon from '../dateWithIcon';
import LeftIconWithText from '../leftIconWithText';
import {typeExpense} from '../../utils/typeExpense';

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
      <View style={{marginHorizontal: 16}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'normal',
            color: colors.grayConteleDark,
          }}>
          {props.description}
        </Text>
        <LeftIconWithText
          secondaryTextIcon={'Cutlery'}
          secondaryText={typeExpense[props.type]}
          colorIcon={colors.grayConteleLight}
          colorText={colors.grayConteleLight}
          weigth={'normal'}
          size={14}
        />
      </View>

      <View>
        <Icon
          name={'CalendarChecked'}
          corPrimaria={
            props.status == 'aproved' ? colors.blue_daintree : colors.gray1
          }
          corSecundaria={
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
