import styled from 'styled-components';

const Button = styled.button`
  width: 54%;
  height: 52px;
  font-family: 'Press Start 2P';
  font-weight: bold;
  font-size: 16px;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  color: ${(props) => props.theme.colors.white};
  text-shadow: 2px 1px ${(props) => props.theme.colors.secondary};
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  //margin: 0px 10px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.five};
  }
`;

export default Button;
