import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label``;

export const Input = styled.input`
  width: ${props => props.theme.spacing(90)};
  margin-bottom: ${props => props.theme.spacing(5)};
  outline: none;
  padding: ${props => props.theme.spacing(3)};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: ${props => props.theme.spacing(1)};
  color: ${props => props.theme.colors.title};
  font-weight: 500;
  font-size: ${props => props.theme.spacing(4)};
  :focus,
  :hover {
    border-color: ${props => props.theme.colors.title};
  }
`;

export const Button = styled.button`
  margin-top: ${props => props.theme.spacing(5)};
  align-items: center;
  width: ${props => props.theme.spacing(50)};
  font-weight: 600;
  font-size: ${props => props.theme.spacing(4)};
  padding: ${props => props.theme.spacing(3)};
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

export const Span = styled.span`
  display: flex;
  margin-bottom: ${props => props.theme.spacing(1)};
  font-weight: 600;
  font-size: ${props => props.theme.spacing(4)};
  color: ${props => props.theme.colors.title};
`;
