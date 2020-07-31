import React from 'react';
import {View} from 'react-native';
import {colors, Title} from '../../styles';
import LazyImage from '../LazyImage';
import Header from '../header';
import {Actions} from 'react-native-router-flux';
import DateWithIcon from '../dateWithIcon';
import LeftIconWithText from '../leftIconWithText';
import {typeExpense} from '../../utils/typeExpense';
import CardLocation from '../cardLocation';
import openMap from 'react-native-open-maps';
import styles from './styles';

const Refund = ({props}) => {
  function onClickArrow() {
    Actions.pop();
  }

  function openGps(lat, lng) {
    console.log(lat, lng);
    openMap({latitude: lat, longitude: lng});
  }

  return (
    <View style={styles.primaryView}>
      <Header onClickArrow={() => onClickArrow()} value={props.value} />
      <View style={styles.margin24}>
        <DateWithIcon date={props.date} />
        <Title
          fontSize={'16'}
          fontWeight={'normal'}
          textColor={colors.grayConteleDark}>
          {props.description}
        </Title>
        <View style={styles.marginTop4}>
          <LeftIconWithText
            secondaryTextIcon={'Cutlery'}
            secondaryText={typeExpense[props.type]}
            colorIcon={colors.grayConteleLight}
            colorText={colors.grayConteleLight}
            weigth={'normal'}
            size={14}
          />
        </View>

        <View style={styles.leftIconView}>
          <LeftIconWithText
            secondaryTextIcon={'Refund'}
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
          openGps={() => openGps(props.latitude, props.longitude)}
          time={props.time}
          location={props.location}
          date={props.date}
        />
        <View style={styles.image}>
          <LazyImage imageRadius={8} />
        </View>
      </View>
    </View>
  );
};

export default Refund;
