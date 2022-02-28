import React from 'react';
import QuizQuestionStyle from './styles';
import Button from '../Button/styles';

const QuizQuestion = () => {
  return (
    <QuizQuestionStyle>
      <QuizQuestionStyle.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        quidem voluptatem quis error facilis animi inventore? Nihil, nobis
        consectetur hic fuga natus iste voluptatibus voluptatem sunt doloribus
        quo quod blanditiis!
      </QuizQuestionStyle.Text>
      <QuizQuestionStyle.Alternatives>
        lorem ipsum
      </QuizQuestionStyle.Alternatives>
      <QuizQuestionStyle.Alternatives>
        lorem ipsum
      </QuizQuestionStyle.Alternatives>
      <QuizQuestionStyle.Alternatives>
        lorem ipsum
      </QuizQuestionStyle.Alternatives>
      <QuizQuestionStyle.Alternatives>
        lorem ipsum
      </QuizQuestionStyle.Alternatives>
      <Button type="submit" marginBottom="32px" marginTop="15px">
        Submit
      </Button>
    </QuizQuestionStyle>
  );
};

export default QuizQuestion;
