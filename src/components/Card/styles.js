import styled from 'styled-components';

const Card = styled.div`
  margin: 0 auto;
  width: 50%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  min-height: 20%;

  @media (min-width: 769px) and (max-width: 1200px) {
    width: 82%;
  }

  @media (min-width: 581px) and (max-width: 768px) {
    width: 83%;
  }

  @media (min-width: 481px) and (max-width: 580px) {
    width: 87%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 94%;
  }

  @media (min-width: 200px) and (max-width: 321px) {
    width: 92%;
  }
`;

export default Card;
