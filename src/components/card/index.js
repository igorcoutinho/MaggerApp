import React, {Fragment} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {colors, DescDestaque2, Desc2, Title} from '../../styles';
import Icon from '../atomic/icon';

const Card = (props) => {
  const renderCard = () => {
    const {
      primaryText,
      primaryTextColor,
      secondaryText,
      rightIcon,
      lines,
      onPress,
      onRightIconClicked,
      onContainerClicked,
      secondaryTextIcon,
      leftIconCorPrimaria,
      leftIconCorSecundaria,
      rightIconCorPrimaria,
      rightIconCorSecundaria,
      dadosText,
      dadosTextColor,
      useCaptalize,
    } = props;
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
              <Title
                fontSize={'16'}
                fontWeight={'normal'}
                textColor={
                  primaryTextColor ? primaryTextColor : colors.grayConteleDark
                }>
                {primaryText}
              </Title>
            )}
            {secondaryText ? (
              <View
                onPress={onRightIconClicked}
                style={{
                  flexDirection: 'row',
                }}>
                <Icon
                  name={secondaryTextIcon}
                  corPrimaria={colors.grayConteleLight}
                  width={32}
                  height={32}
                />
                <DescDestaque2 textColor={colors.grayConteleLight}>
                  {secondaryText}
                </DescDestaque2>
              </View>
            ) : null}
          </View>

          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 6,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            {rightIcon ? (
              <View
                onPress={onRightIconClicked}
                style={{alignItems: 'flex-end', marginTop: 4}}>
                <Icon
                  name={rightIcon}
                  corPrimaria={rightIconCorPrimaria}
                  corSecundaria={rightIconCorSecundaria}
                  width={30}
                  height={30}
                />
              </View>
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

  const {onContainerClicked} = props;

  if (onContainerClicked) {
    return (
      <TouchableOpacity style={[styles.cardStyle]} onPress={onContainerClicked}>
        {renderCard()}
      </TouchableOpacity>
    );
  } else {
    return <View style={[styles.cardStyle]}>{renderCard()}</View>;
  }
};

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
});

Card.defaultProps = {
  lines: 1,
};
export default Card;
