import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

const styles = StyleSheet.create({
  arrow: {
    borderColor: colors.blueConteleLight,
    borderWidth: 1,
    borderRadius: 8,
    minHeight: 55,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white_alabaster,
  },
  calendar: {
    marginTop: 14,
    marginHorizontal: 17,
  },
  vertical8: {
    marginVertical: 8,
  },
  textTimeData: {
    fontWeight: 'normal',
    fontSize: 12,
    color: colors.grayContele,
  },
});

export default styles;
