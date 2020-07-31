import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

const styles = StyleSheet.create({
  cardStyle: {
    shadowColor: colors.gray_regent,
    shadowOffset: {
      width: 1,
      // height: 3,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    backgroundColor: colors.white_solid,
    opacity: 1,
    borderColor: colors.gray_cold,
  },
  cardContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'flex-start',
    marginVertical: 8,
  },
  primaryText: {
    flex: 1,
    justifyContent: 'center',
    minHeight: 40,
  },
  rightIcon: {
    flexDirection: 'row',
    paddingVertical: 6,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  rightIcon2: {
    alignItems: 'flex-end',
    marginTop: 4,
  },
});

export default styles;
