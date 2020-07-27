import styled from 'styled-components';
import {Dimensions, StyleSheet} from 'react-native';

export const colors = {
  blue_daintree: '#00232F',
  blue_casal: '#295761',
  blue_leaf: '#9EDFE6',
  blue_eastern: '#149BAA',
  blue_eastern_opacity: 'rgba(20, 154, 169, 0.2)',
  yellow_selective: '#FFB300',
  orange_west_side: '#FF960B',
  orange_west_side_opacity: 'rgba(255, 150, 11, 0.2)',
  red_guardsman: '#C40D00',
  red_guardsman_opacity_20: '#C40D0033',
  red_dark_burgundy: '#B80C08',
  white_solid: '#FFF',
  white_alabaster: '#FCFCFC',
  gray_rodrigo: '#F8F8F8',
  gray_gallery: '#EFEFEF',
  gray_alto: '#E1DFDF',
  gray_regent: '#606668',
  gray_cold: '#BFC8CB',
  transparent: 'rgba(0,0,0,0)',
  green_japanese: '#096B00',
  green_japanese_opacity_20: '#096B0033',
  red_tamarillo: '#F65854',
  sea_pink: '#EE9E9D',
  egg_sour: '#FFF4DA',
  pirate_gold: '#AC7903',
  blue_hawkes: '#E8F4FD',
  blue_deep_sea: '#0D4361',
  green_surf: '#DBE9DA',
  red_peep: '#F6DCDA',
  gray1: '#1F1F1F',
  gray2: '#5E5E5E',
  gray3: '#C4C4C4',
  gray4: '#DFDFDF',
  gray5: '#EBEBEB',
  gray6: '#F7F7F7',
  gray7: '#FCFCFC',
};

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const spacing = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const fonts = {
  xs: 10, // extra - small
  sm: 12, // small - utilizada em detalhes ou legendas
  md: 14, // medium - tamanho default da fonte
  lg: 16, // large - parecido com um subtitulo, utilizado quando quiser chamar atenção para algo.
  xl: 20, // extra large - Maior tamanho de fonte, pouco utilizado
};

export const TagDestaque = styled.Text`
  color: ${(props) => props.textColor || colors.gray_regent};
  font-size: ${fonts.xl};
  margin-horizontal: ${(props) => props.marginHorizontal || 0};
  margin-vertical: ${(props) => props.marginVertical || 0};
`;

export const Titulo = styled.Text`
  color: ${(props) => props.textColor || colors.gray_regent};
  font-size: ${fonts.lg};
  margin-horizontal: ${(props) => props.marginHorizontal || 0};
  margin-vertical: ${(props) => props.marginVertical || 0};
`;

export const TagNormal = styled.Text`
  color: ${(props) => props.textColor || colors.gray_regent};
  font-size: ${fonts.md};
  margin-horizontal: ${(props) => props.marginHorizontal || 0};
  margin-vertical: ${(props) => props.marginVertical || 0};
`;

export const DescDestaque1 = styled.Text`
  color: ${(props) => props.textColor || colors.gray_regent};
  font-size: ${fonts.md};
  margin-horizontal: ${(props) => props.marginHorizontal || 0};
  margin-vertical: ${(props) => props.marginVertical || 0};
`;

export const Desc1 = styled.Text`
  color: ${(props) => props.textColor || colors.gray_regent};
  font-size: ${fonts.md};
  margin-horizontal: ${(props) => props.marginHorizontal || 0};
  margin-vertical: ${(props) => props.marginVertical || 0};
`;

export const DescDestaque2 = styled.Text`
  color: ${(props) => props.textColor || colors.gray_regent};
  font-size: ${fonts.sm};
  margin-horizontal: ${(props) => props.marginHorizontal || 0};
  margin-vertical: ${(props) => props.marginVertical || 0};
`;

export const Desc2 = styled.Text`
  color: ${(props) => props.textColor || colors.gray_regent};
  font-size: ${fonts.sm};
  margin-horizontal: ${(props) => props.marginHorizontal || 0};
  margin-vertical: ${(props) => props.marginVertical || 0};
`;

export const Info = styled.Text`
  color: ${(props) => props.textColor || colors.gray_regent};
  font-size: ${fonts.xs};
  margin-horizontal: ${(props) => props.marginHorizontal || 0};
  margin-vertical: ${(props) => props.marginVertical || 0};
`;

export const InfoBold = styled.Text`
  color: ${(props) => props.textColor || colors.gray_regent};
  font-size: ${(props) => props.fontSize || fonts.xs};
`;

// -----------------------------------------------------------
//                          IMAGEM
// -----------------------------------------------------------
export const BgImage = styled.ImageBackground`
  width: ${(props) => props.size || '100%'};
  aspect-ratio: ${(props) => props.ratio || 1};
`;

export const OriginalImage = styled.Image`
  width: ${(props) => props.size || '100%'};
  aspect-ratio: ${(props) => props.ratio || 1};
`;

// -----------------------------------------------------------
//                          OUTROS
// -----------------------------------------------------------
export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.gray_cold,
})`
  flex: 1;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 16px;
  min-height: 40px;
  color: ${colors.gray_regent};
  border-color: ${colors.orange_west_side};
  border-width: 2;
`;

export const Spacing = styled.View`
  margin-vertical: ${(props) => props.marginVertical || 0};
  margin-horizontal: ${(props) => props.marginHorizontal || 0};
`;

export const Divisor = styled.Text`
  color: ${(props) => props.textColor || colors.blue_daintree};
  font-size: ${fonts.lg};
  margin-horizontal: ${(props) => props.marginHorizontal || 0};
  margin-vertical: ${(props) => props.marginVertical || 0};
`;

export const SubHeader = styled.Text`
  color: ${(props) => props.textColor || colors.gray_regent};
  font-size: ${fonts.sm};
  margin-horizontal: 16;
  margin-vertical: 16;
`;

export const Card = styled.View`
  shadow-color: ${colors.gray_regent};
  shadow-offset: {
    width: 0;
    height: 1;
  }
  shadow-opacity: 0.22;
  shadow-radius: 2.22;
  elevation: 3;
  background-color: ${(props) => props.backgroundColor || colors.white_solid};
  margin-horizontal: ${spacing.md};
  margin-bottom: ${spacing.sm};
  padding-horizontal: ${spacing.md};
  padding-vertical: ${spacing.md};
`;

export const separador = {
  borderBottomColor: colors.gray_alto,
  borderBottomWidth: 1,
  paddingBottom: 8,
  marginBottom: 8,
};

export const singleButton = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  height: 48,
  borderRadius: 2,
  backgroundColor: colors.blue_daintree,
};
