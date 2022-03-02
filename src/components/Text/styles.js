import styled from 'styled-components';

const Text = styled.div`
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  text-shadow: 1px 2px ${(props) => props.theme.colors.secondary};
  margin-top: ${(props) => props.marginTop};
  width: 50%;
  min-height: 20px;

  @media (min-width: 769px) and (max-width: 1480px) {
    font-size: 17px;
    width: 100%;
  }

  @media (min-width: 581px) and (max-width: 768px) {
    font-size: 22px;
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 580px) {
    font-size: 18px;
    width: 100%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 15px;
    width: 100%;
  }

  @media (min-width: 200px) and (max-width: 321px) {
    font-size: 12px;
    width: 100%;
  }
`;

export default Text;
