import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

const styles = StyleSheet.create({
  primaryView: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  vertical4: {
    marginVertical: 4,
  },
  viewList: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default styles;
