import styled from 'styled-components';

const Base = styled.body`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  font-family: 'Press Start 2P';
  width: 100%;
  height: 100vh;
`;

export default Base;
