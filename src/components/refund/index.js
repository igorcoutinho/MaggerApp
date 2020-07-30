import React from 'react';
import {View, Text} from 'react-native';
import {colors, Title} from '../../styles';
import Icon from '../atomic/icon';
import LazyImage from '../LazyImage';
import Header from '../header';
import {Actions} from 'react-native-router-flux';
import DateWithIcon from '../dateWithIcon';
import LeftIconWithText from '../leftIconWithText';
import {typeExpense} from '../../utils/typeExpense';
import CardLocation from '../cardLocation';

const Refund = ({props}) => {
  function onClickArrow() {
    Actions.pop();
  }
  return (
    <View style={{flex: 1}}>
      <Header onClickArrow={() => onClickArrow()} value={props.value} />
      <View style={{marginHorizontal: 24}}>
        <DateWithIcon date={props.date} />

        <Title
          fontSize={'16'}
          fontWeight={'normal'}
          textColor={colors.grayConteleDark}>
          {props.description}
        </Title>
        <View style={{marginTop: 4}}>
          <LeftIconWithText
            secondaryTextIcon={'Cutlery'}
            secondaryText={typeExpense[props.type]}
            colorIcon={colors.grayConteleLight}
            colorText={colors.grayConteleLight}
            weigth={'normal'}
            size={14}
          />
        </View>

        <View style={{marginTop: 30, marginBottom: 25}}>
          <LeftIconWithText
            secondaryTextIcon={'Calendar'}
            secondaryText={
              props.status == 'approved' ? 'Reembolsável' : 'Não reembolsável '
            }
            colorIcon={
              props.status == 'approved'
                ? colors.greenContele
                : colors.grayConteleLight
            }
            colorText={
              props.status == 'approved'
                ? colors.greenContele
                : colors.grayConteleLight
            }
            weigth={'bold'}
            size={16}
          />
        </View>

        <CardLocation
          time={props.time}
          location={props.location}
          date={props.date}
        />
        <View style={{borderRadius: 8, marginTop: 24}}>
          <LazyImage imageRadius={8} />
        </View>
      </View>
    </View>
  );
};

export default Refund;
