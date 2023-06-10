import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  display: block;
  text-align: center;
  font-size: ${props => props.theme.spacing(12)};
  color: ${props => props.theme.colors.title};
  text-shadow: ${props => `${props.theme.colors.shadow} 2px 3px 4px`};
  margin: ${props => `${props.theme.spacing(5)} 0`};
`;
