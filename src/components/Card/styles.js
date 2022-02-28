import styled from 'styled-components';

const Card = styled.div`
  margin: 0 auto;
  width: 50%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

export default Card;
