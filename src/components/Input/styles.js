import styled from 'styled-components';

const Input = styled.input`
  width: 50%;
  height: 50px;
  font-family: 'Press Start 2P';
  font-weight: bold;
  font-size: 16px;
  color: ${(props) => props.theme.colors.primary};
  text-shadow: 2px 1px ${(props) => props.theme.colors.secondary};
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  padding: 0px 10px;
  margin-bottom: 20px;
`;

export default Input;
