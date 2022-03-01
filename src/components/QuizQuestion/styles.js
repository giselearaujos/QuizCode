import styled from 'styled-components';

const QuizQuestionStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

QuizQuestionStyle.Text = styled.h2`
  font-size: 12px;
  line-height: 17px;
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 5px;
  margin: 30px;
  padding: 8px;
  width: 89%;
`;

QuizQuestionStyle.Alternatives = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 5px;
  margin: 10px 30px;
  padding: 8px;
  width: 89%;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.third};
  }
`;

export default QuizQuestionStyle;
