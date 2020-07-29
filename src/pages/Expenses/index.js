import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import Card from '../../components/card';
import {colors} from '../../styles';

function Home() {
  const [dataArray, setDataArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setDataArray([
      {
        Mes: 'Setembro',
        mesReferencia: '09',
        anoRerefencia: '2020',
        Dia: [
          {
            data: '22',
            diaDaSemana: 'sexta',
            despesas: [
              {
                descricao: 'Almoço restaurante',
                valor: '26,00',
                tipo: 1,
                tipoString: 'Alimentação',
                possuiRemuneracao: true,
                diaDespesa: '22/09/2020',
                local: 'Rua 7',
                horario: '11:50',
                arrayBytes: [],
              },
              {
                descricao: 'Almoço restaurante',
                tipo: 1,
                tipoString: 'Alimentação',
                valor: '326,00',
                possuiRemuneracao: true,
                diaDespesa: '22/09/2020',
                local: 'Rua 7',
                horario: '14:50',
                arrayBytes: [],
              },
            ],
          },
          {
            data: '20',
            diaDaSemana: 'quarta',
            despesas: [
              {
                descricao: 'Almoço restaurante',
                valor: '26,00',
                tipo: 1,
                tipoString: 'Alimentação',
                possuiRemuneracao: false,
                diaDespesa: '20/09/2020',
                local: 'Rua 7',
                horario: '12:50',
                arrayBytes: [],
              },
              {
                descricao: 'Almoço restaurante',
                tipo: 1,
                tipoString: 'Alimentação',
                valor: '26,00',
                possuiRemuneracao: true,
                diaDespesa: '20/09/2020',
                local: 'Rua 7',
                horario: '12:10',
                arrayBytes: [],
              },
            ],
          },
          {
            data: '14',
            diaDaSemana: 'quarta',
            despesas: [
              {
                descricao: 'Almoço restaurante',
                valor: '26,00',
                tipo: 1,
                tipoString: 'Alimentação',
                possuiRemuneracao: false,
                diaDespesa: '14/09/2020',
                local: 'Contele Filial de Santos - SP',
                horario: '13:50',
                arrayBytes: [],
              },
            ],
          },
        ],
      },
    ]);
  }, []);
  useEffect(() => {
    setIsLoading(false);
  }, [dataArray]);

  function renderDespesas(despesa) {
    return (
      <Card
        primaryText={despesa.descricao}
        secondaryText={despesa.tipoString}
        dadosText={despesa.valor}
        rightIcon={'Calendario'}
        rightIconCorPrimaria={colors.orange_west_side}
      />
    );
  }
  function renderDiaDoMes(item) {
    console.log('entrou no render mes:', item);
    return (
      <View style={{flex: 1}}>
        <Text>
          {item.data} {item.diaDaSemana}
        </Text>
        <FlatList
          data={item.despesas}
          renderItem={({despesa}) => renderDespesas(despesa)}
        />
      </View>
    );
  }

  function renderLista() {
    if (isLoading) {
      <ActivityIndicator />;
    }
    return (
      <View>
        <Text>SETEMBRO</Text>

        <FlatList
          data={dataArray}
          renderItem={({item}) => renderDiaDoMes(item)}
          //ListEmptyComponent={() => emptyList()}
        />
      </View>
    );
  }

  return <View style={{flex: 1}}>{renderLista()}</View>;
}

export default Home;
