import React, {Fragment} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {colors, DescDestaque2, Desc2, Title} from '../../styles';
import Icon from '../atomic/icon';
import styles from './styles';

const Card = (props) => {
  const renderCard = () => {
    const {
      primaryText,
      primaryTextColor,
      disabledText,
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
          <View style={styles.primaryText}>
            {primaryText && (
              <Title
                fontSize={'16'}
                fontWeight={'normal'}
                disabledText={disabledText}
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

          <View style={styles.rightIcon}>
            {rightIcon ? (
              <View onPress={onRightIconClicked} style={styles.rightIcon2}>
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

Card.defaultProps = {
  lines: 1,
};
export default Card;
