import React, {Component} from 'react';
import {Svg} from 'react-native-svg';
import {View} from 'react-native';

import * as typesIcons from '../../typesIcons';
import {colors} from '../../../styles';

function Icon({width, height, name, corPrimaria, corSecundaria, viewBox}) {
  width = width || 32;
  height = height || 32;
  viewBox = viewBox || '0 0 32 32';
  // const {width, height, name, corPrimaria, corSecundaria, viewBox} = this.props;
  return (
    <View style={{width: 20, height: 20}}>
      <Svg width={width} height={height}>
        {typesIcons[name](corPrimaria, corSecundaria)}
      </Svg>
    </View>
  );
}

export default Icon;
