import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import Card from '../../components/card';
import {colors} from '../../styles';
import {dayOfWeek} from '../../utils/dayOfWeek';
import {typeExpense} from '../../utils/typeExpense';

import {Actions} from 'react-native-router-flux';
import Icon from '../../components/atomic/icon';
import TitleExpense from '../../components/tittleExpense';
import Total from '../../components/total';
import styles from './styles';

function Home() {
  const [expenses, setExpenses] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState();
  const [isListSorted, setIsListSorted] = useState(false);
  useEffect(() => {
    setExpenses({
      month: 'Setembro',
      days: [
        {
          day: 20,
          dayOfWeek: 6,
          expenses: [
            {
              description: 'Almoço restaurante',
              type: 1,
              value: 26.0,
              status: 'approved',
              date: '20/09/2020',
              time: '14h00',
              location: 'Contele Filial de Santos - SP',
              latitude: -23.966205,
              longitude: -46.336654,
              refundable: true,
            },
            {
              description: 'Almoço restaurante',
              type: 1,
              value: 26.0,
              status: 'approved',
              date: '20/09/2020',
              time: '14h00',
              location: 'Contele Filial de Santos - SP',
              latitude: -23.966205,
              longitude: -46.336654,
              refundable: false,
            },
          ],
        },
        {
          day: 14,
          dayOfWeek: 1,
          expenses: [
            {
              description: 'Almoço restaurante',
              type: 1,
              value: 26.0,
              status: 'canceled',
              date: '14/09/2020',
              time: '14h00',
              location: 'Contele Filial de Santos - SP',
              latitude: -23.966205,
              longitude: -46.336654,
              refundable: true,
            },
          ],
        },
        {
          day: 22,
          dayOfWeek: 3,
          expenses: [
            {
              description: 'Almoço restaurante',
              type: 1,
              value: 26.0,
              status: 'approved',
              date: '22/09/2020',
              time: '14h00',
              location: 'Contele Filial de Santos - SP',
              latitude: -23.966205,
              longitude: -46.336654,
              refundable: true,
            },
            {
              description: 'Almoço restaurante',
              type: 1,
              value: 326.0,
              status: 'approved',
              date: '22/09/2020',
              time: '14h00',
              location: 'Contele Filial de Santos - SP',
              latitude: -23.966205,
              longitude: -46.336654,
              refundable: true,
            },
          ],
        },
      ],
    });
    setIsLoading(false);
  }, []);

  useEffect(() => {
    sumTotal();
    sortList();
  }, [isLoading]);

  function sortList() {
    if (!isLoading) {
      const list = expenses.days.sort((a, b) => a.day - b.day);
      setExpenses({...expenses, days: list});
      setIsListSorted(true);
    }
  }
  function sumTotal() {
    let valor = 0;
    if (!isLoading) {
      expenses.days.map((item) => {
        if (item.expenses && item.expenses.length > 0) {
          item.expenses.map((a) => (valor = valor + a.value));
        }
      });
      setTotal(valor);
    }
  }
  function renderDiaDoMes(item) {
    return (
      <View style={styles.vertical4}>
        <TitleExpense day={item.day} dayOfWeek={dayOfWeek[item.dayOfWeek]} />
        {item.expenses.map((exp) => (
          <View style={{marginVertical: 4}}>
            <Card
              primaryText={exp.description}
              primaryTextColor={
                exp.refundable ? colors.grayContele : colors.grayConteleLight
              }
              disabledText={!exp.refundable}
              secondaryText={typeExpense[exp.type]}
              dadosText={exp.value.toFixed(2)}
              {...(exp.status === 'approved' && {rightIcon: 'Refund'})}
              rightIconCorPrimaria={
                exp.refundable ? colors.greenContele : colors.grayConteleLight
              }
              secondaryTextIcon={'Cutlery'}
              onContainerClicked={() => {
                if (exp.refundable) Actions.refund({props: exp});
              }}
            />
          </View>
        ))}
      </View>
    );
  }

  function renderList() {
    return (
      <View style={styles.viewList}>
        <View
          style={{
            marginHorizontal: 16,
            marginTop: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
            height: '10%',
          }}>
          <Text
            style={{
              fontSize: 32,
              fontWeight: 'bold',
              color: colors.grayContele,
            }}>
            {expenses.month}
          </Text>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'column',
              alignSelf: 'center',
            }}>
            <Icon name={'Pesquisa'} corPrimaria={colors.grayContele} />
          </View>
        </View>

        <FlatList
          style={{height: '70%'}}
          data={expenses.days}
          renderItem={({item}) => renderDiaDoMes(item)}
          ItemSeparatorComponent={() => (
            <View style={{height: 8, width: '100%'}} />
          )}
        />

        <View
          style={{
            height: '20%',
            backgroundColor: colors.blueConteleLight,
          }}>
          <Total total={total.toFixed(2)} />
        </View>
      </View>
    );
  }

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (isListSorted) {
    return <View style={styles.primaryView}>{renderList()}</View>;
  }

  return <ActivityIndicator />;
}

export default Home;
