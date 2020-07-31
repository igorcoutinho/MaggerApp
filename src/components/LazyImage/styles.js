import styled from 'styled-components';

export const Small = styled.ImageBackground`
  width: ${(props) => props.size || '100%'};
  aspect-ratio: ${(props) => props.ratio || 1};
  border-radius: ${(props) => props.borderRadius || 0};
`;

export const Original = styled.Image`
  width: ${(props) => props.size || '100%'};
  aspect-ratio: ${(props) => props.ratio || 1};
  border-radius: ${(props) => props.borderRadius || 0};
`;
