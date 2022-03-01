import styled from 'styled-components';

const Text = styled.p`
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  text-shadow: 1px 2px ${(props) => props.theme.colors.secondary};
  margin-top: ${(props) => props.marginTop};
`;

export default Text;
