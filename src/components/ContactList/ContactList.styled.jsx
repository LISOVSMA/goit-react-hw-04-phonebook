import styled from '@emotion/styled';

export const ListWrapper = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: ${props => props.theme.spacing(2)};
  gap: ${props => props.theme.spacing(12)};
  width: ${props => props.theme.spacing(98)};
`;

export const Fragment = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: ${props => props.theme.spacing(4)};
  color: ${props => props.theme.colors.title};
`;

export const Button = styled.button`
  align-items: center;
  width: ${props => props.theme.spacing(36)};
  font-weight: 600;
  font-size: ${props => props.theme.spacing(4)};
  padding: ${props => props.theme.spacing(2)};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: ${props => props.theme.spacing(1)};
  color: ${props => props.theme.colors.title};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :focus,
  :hover {
    background-color: ${props => props.theme.colors.title};
    color: ${props => props.theme.colors.white};
  }
`;
