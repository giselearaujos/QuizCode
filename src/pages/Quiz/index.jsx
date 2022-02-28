import React from 'react';
import { useParams } from 'react-router-dom';
import QuizQuestion from '../../components/QuizQuestion';
import { Card, QuizHeader, Title, Score } from '../../components';

const Quiz = () => {
  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------
  const { name } = useParams();
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Card height="80%">
      <QuizHeader>
        <Title fontSize="20px" marginTop="25px">
          QuizCode
        </Title>
        <Title fontSize="20px" marginTop="25px">
          {name}
        </Title>
      </QuizHeader>
      <Score>
        <Title fontSize="15px" marginTop="25px">
          SCORE 1/10
        </Title>
      </Score>
      <QuizQuestion />
    </Card>
  );
};

export default Quiz;
