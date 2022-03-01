import styled from 'styled-components';

const Title = styled.h1`
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  text-shadow: 2px 3px ${(props) => props.theme.colors.secondary};
  margin-top: ${(props) => props.marginTop};

  @media (min-width: 769px) and (max-width: 1200px) {
    font-size: 53px;
  }

  @media (min-width: 581px) and (max-width: 768px) {
    font-size: 50px;
  }

  @media (min-width: 481px) and (max-width: 580px) {
    font-size: 30px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 38px;
  }

  @media (min-width: 200px) and (max-width: 321px) {
    font-size: 30px;
  }
`;

export default Title;
