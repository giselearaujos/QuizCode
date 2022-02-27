import styled from 'styled-components';

const Title = styled.h1`
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  text-shadow: 2px 3px ${(props) => props.theme.colors.secondary};
  margin-top: ${(props) => props.marginTop};
`;

export default Title;
