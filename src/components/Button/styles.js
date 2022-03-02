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
  cursor: pointer;

  &:hover {
    background-image: ${(props) => props.theme.colors.five};
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    font-size: 25px;
    width: 73%;
  }

  @media (min-width: 581px) and (max-width: 768px) {
    font-size: 24px;
    width: 66%;
  }

  @media (min-width: 481px) and (max-width: 580px) {
    font-size: 18px;
    width: 80%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;
    width: 91%;
  }

  @media (min-width: 200px) and (max-width: 321px) {
    font-size: 17px;
    width: 97%;
  }
`;

export default Button;
