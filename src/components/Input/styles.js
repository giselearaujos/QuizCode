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

  @media (min-width: 769px) and (max-width: 1200px) {
    font-size: 25px;
    width: 69%;
  }

  @media (min-width: 581px) and (max-width: 768px) {
    font-size: 24px;
    width: 62%;
  }

  @media (min-width: 481px) and (max-width: 580px) {
    font-size: 18px;
    width: 75%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 18px;
    width: 85%;
  }

  @media (min-width: 200px) and (max-width: 321px) {
    font-size: 18px;
    width: 88%;
  }
`;

export default Input;
