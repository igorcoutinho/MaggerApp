import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import Card from '../../components/card';
import {colors} from '../../styles';
import {dayOfWeek} from '../../utils/dayOfWeek';
import {typeExpense} from '../../utils/typeExpense';

import {Actions} from 'react-native-router-flux';
import Icon from '../../components/atomic/icon';
import TitleExpense from '../../components/tittleExpense';

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
            },
            {
              description: 'Almoço restaurante',
              type: 1,
              value: 326.0,
              status: 'approved',
              date: '20/09/2020',
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
              status: 'approved',
              date: '14/09/2020',
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
            },
            {
              description: 'Almoço restaurante',
              type: 1,
              value: 326.0,
              status: 'canceled',
              date: '22/09/2020',
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
      console.log('listasorted:', expenses);
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
      <View style={{marginVertical: 4}}>
        <TitleExpense day={item.day} dayOfWeek={dayOfWeek[item.dayOfWeek]} />
        {item.expenses.map((exp) => (
          <View style={{marginVertical: 4}}>
            <Card
              primaryText={exp.description}
              secondaryText={typeExpense[exp.type]}
              dadosText={exp.value.toFixed(2)}
              rightIcon={'Refund'}
              rightIconCorPrimaria={colors.greenContele}
              secondaryTextIcon={'Cutlery'}
              onContainerClicked={() => Actions.refund({props: exp})}
            />
          </View>
        ))}
      </View>
    );
  }

  function renderList() {
    console.log('renderlist', expenses);
    return (
      <View>
        <View
          style={{
            marginHorizontal: 16,
            marginTop: 8,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
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
          data={expenses.days}
          renderItem={({item}) => renderDiaDoMes(item)}
          ItemSeparatorComponent={() => (
            <View style={{height: 8, width: '100%'}} />
          )}
        />

        <View
          style={{
            marginHorizontal: 16,
            marginTop: 14,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: colors.grayConteleLight,
            }}>
            TOTAL
          </Text>
          <View
            style={{
              //justifyContent: 'center',
              flexDirection: 'row',
              alignSelf: 'flex-end',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: colors.blue_dark,
                marginTop: 10,
                marginRight: 4,
              }}>
              R$
            </Text>
            <Text
              style={{
                fontSize: 26,
                fontWeight: 'bold',
                color: colors.blue_dark,
              }}>
              {total ? total.toFixed(2) : null}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (isListSorted) {
    return (
      <View style={{flex: 1, backgroundColor: colors.gray6}}>
        {renderList()}
      </View>
    );
  }

  return <ActivityIndicator />;
}

export default Home;
