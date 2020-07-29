import React, {Component, Fragment} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  colors,
  DescDestaque2,
  Desc2,
  TagNormal,
  Separador,
  fonts,
} from '../../styles';
import Icon from '../atomic/icon';

export default class Card extends Component {
  static defaultProps = {
    lines: 1,
  };

  renderCard = () => {
    const {
      primaryText,
      secondaryText,
      rightIcon,
      lines,
      onPress,
      onRightIconClicked,
      onContainerClicked,
      secondaryTextMoreLine,
      leftIconCorPrimaria,
      leftIconCorSecundaria,
      rightIconCorPrimaria,
      rightIconCorSecundaria,
      dadosText,
      dadosTextColor,
      useCaptalize,
    } = this.props;
    console.log(primaryText);
    return (
      <Fragment>
        <View style={styles.cardContainer}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              minHeight: 40,
            }}>
            {primaryText && (
              <Text
                textColor={colors.blue_daintree}
                style={{textTransform: useCaptalize ? 'capitalize' : null}}>
                {primaryText}
              </Text>
            )}
            {secondaryText ? (
              <DescDestaque2
                style={{marginVertical: 1}}
                textColor={colors.blue_casal}
                numberOfLines={2}>
                {secondaryText}
              </DescDestaque2>
            ) : null}
          </View>

          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 16,
              paddingVertical: 8,
              alignItems: 'flex-start',
            }}>
            {rightIcon ? (
              <TouchableOpacity
                onPress={onRightIconClicked}
                style={{marginHorizontal: 10}}>
                <Icon
                  name={rightIcon}
                  corPrimaria={rightIconCorPrimaria}
                  corSecundaria={rightIconCorSecundaria}
                  width={20}
                  height={20}
                />
              </TouchableOpacity>
            ) : null}

            <Desc2
              textColor={dadosTextColor}
              numberOfLines={1}
              style={{maxWidth: 100, alignSelf: 'center'}}>
              {dadosText}
            </Desc2>
          </View>
        </View>
      </Fragment>
    );
  };

  render() {
    const {onContainerClicked} = this.props;
    console.log(onContainerClicked);

    if (onContainerClicked) {
      return (
        <TouchableOpacity
          style={[styles.cardStyle]}
          onPress={onContainerClicked}>
          {this.renderCard()}
        </TouchableOpacity>
      );
    } else {
      return <View style={[styles.cardStyle]}>{this.renderCard()}</View>;
    }
  }
}

const styles = StyleSheet.create({
  cardStyle: {
    shadowColor: colors.gray_regent,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
    backgroundColor: colors.white_solid,
    opacity: 1,
    borderColor: colors.gray_cold,
  },
  cardContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'flex-start',
    marginVertical: 4,
  },
  captionTextContainer: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
  captionTextContainer2: {
    //alignSelf: 'flex-end',
    //alignItems: 'flex-end',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    width: 44,
    backgroundColor: colors.gray_rodrigo,
    marginRight: 8,
    borderRadius: 8,
    marginHorizontal: 16,
  },
});
